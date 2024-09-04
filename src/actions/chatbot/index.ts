'use server'

import client from "@/lib/prisma"
import { extractEmailsFromString } from "@/lib/utils"
import { onRealTimeChat } from "../conversation"
import { clerkClient } from "@clerk/nextjs"
import { onMailer } from "../mailer"

export const onGetCurrentChatBot = async (id: string) => {
    try {
        const chatbot = await client.domain.findUnique({
            where: {
                id,
            },
            select: {
                name: true,
                helpdesk: true,
                chatBot: {
                    select: {
                        id: true,
                        welcomeMessage: true,
                        icon: true,
                        textColor: true,
                        background: true,
                        helpdesk: true,
                    },
                },
            },
        })

        if (chatbot) {
            return chatbot
        }
    } catch (error) {
        console.log(error)
    }
}


export const onStoreConversations = async (
    id: string,
    message: string,
    role: 'assistant' | 'user'
) => {
    try {
        await client.chatRoom.update({
            where: {
                id,
            },
            data: {
                message: {
                    create: {
                        message,
                        role,
                    }
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}



let customerEmail: string | undefined

export const onAiChatBotAssistant = async (
    id: string,
    chat: { role: 'assistant' | 'user'; content: string }[],
    author: 'user',
    message: string
) => {
    try {
        const chatBotDomain = await client.domain.findUnique({
            where: {
                id,
            },
            select: {
                name: true,
                filterQuestions: {
                    where: {
                        answered: null,
                    },
                    select: {
                        question: true,
                    },
                },
            },
        })
        if (chatBotDomain) {
            const extractedEmail = extractEmailsFromString(message)
            if (extractedEmail) {
                customerEmail = extractedEmail[0]
            }

            if (customerEmail) {
                const checkCustomer = await client.domain.findUnique({
                    where: {
                        id,
                    },
                    select: {
                        User: {
                            select: {
                                clerkId: true,
                            },
                        },
                        name: true,
                        customer: {
                            where: {
                                email: {
                                    startsWith: customerEmail,
                                },
                            },
                            select: {
                                id: true,
                                email: true,
                                questions: true,
                                chatRoom: {
                                    select: {
                                        id: true,
                                        live: true,
                                        mailed: true,
                                    },
                                },
                            },
                        },
                    },
                })
                if (checkCustomer && !checkCustomer.customer.length) {
                    const newCustomer = await client.domain.update({
                        where: {
                            id,
                        },
                        data: {
                            customer: {
                                create: {
                                    email: customerEmail,
                                    questions: {
                                        create: chatBotDomain.filterQuestions,
                                    },
                                    chatRoom: {
                                        create: {},
                                    },
                                },
                            },
                        },
                    })
                    if (newCustomer) {
                        console.log('new customer made')
                        const response = {
                            role: 'assistant',
                            content: `Welcome aboard ${customerEmail.split('@')[0]
                                }! I'm glad to connect with you. Is there anything you need help with?`,
                        }
                        return { response }
                    }
                }
                if (checkCustomer && checkCustomer.customer[0].chatRoom[0].live) {
                    await onStoreConversations(
                        checkCustomer?.customer[0].chatRoom[0].id!,
                        message,
                        author
                    )

                    onRealTimeChat(
                        checkCustomer.customer[0].chatRoom[0].id,
                        message,
                        'user',
                        author
                    )

                    if (!checkCustomer.customer[0].chatRoom[0].mailed) {
                        const user = await clerkClient.users.getUser(
                            checkCustomer.User?.clerkId!
                        )

                        onMailer(user.emailAddresses[0].emailAddress)

                        //update mail status to prevent spamming
                        const mailed = await client.chatRoom.update({
                            where: {
                                id: checkCustomer.customer[0].chatRoom[0].id,
                            },
                            data: {
                                mailed: true,
                            },
                        })

                        if (mailed) {
                            return {
                                live: true,
                                chatRoom: checkCustomer.customer[0].chatRoom[0].id,
                            }
                        }
                    }
                    return {
                        live: true,
                        chatRoom: checkCustomer.customer[0].chatRoom[0].id,
                    }
                }
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}