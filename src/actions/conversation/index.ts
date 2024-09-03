'use server'

import client from "@/lib/prisma"
//WIP
// import { pusherServer } from "@/lib/utils"

export const onToggleRealtime = async (id: string, state: boolean) => {
    try {
        const chatRoom = await client.chatRoom.update({
            where: {
                id,
            },
            data: {
                live: state,
            },
            select: {
                id: true,
                live: true
            }
        })

        if (chatRoom) {
            return {
                status: 200,
                message: chatRoom.live
                    ? 'Realtime mode enabled'
                    : 'Realtime mode disabled',
                chatRoom,
            }
        }
    } catch (error) {
        return {
            status: 500,
            msg: error
        }
    }
}
type ConversationMode = { live: boolean };

export const onGetConversationMode = async (id: string) => {
    try {
        const mode = await client.chatRoom.findUnique({
            where: {
                id
            },
            select: {
                live: true
            }
        })

        return mode as ConversationMode;
    } catch (error) {
        return {
            status: 500,
            msg: error
        }
    }
}

export const onGetDomainChatRooms = async (id: string) => {
    try {
        const domains = await client.domain.findUnique({
            where: {
                id,
            },
            select: {
                customer: {
                    select: {
                        email: true,
                        chatRoom: {
                            select: {
                                createdAt: true,
                                id: true,
                                message: {
                                    select: {
                                        message: true,
                                        createdAt: true,
                                        seen: true
                                    },
                                    orderBy: {
                                        createdAt: 'desc'
                                    },
                                    take: 1,
                                }
                            }
                        }
                    },
                }
            }
        })

        if (domains) {
            return domains
        }
    } catch (error) {
        return {
            status: 500,
            message: error
        }
    }
}

export const onGetChatMessages = async (id: string) => {
    try {
        const message = await client.chatRoom.findMany({
            where: {
                id,
            },
            select: {
                id: true,
                live: true,
                message: {
                    select: {
                        id: true,
                        role: true,
                        message: true,
                        createdAt: true,
                        seen: true
                    },
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            },
        })

        if (message) return message

    } catch (error) {
        return {
            status: 500,
            message: error
        }
    }
}

export const onViewUnReadMessages = async (id: string) => {
    try {
        await client.chatMessage.updateMany({
            where: {
                chatRoomId: id,
            },
            data: {
                seen: true,
            },
        })
    } catch (error) {
        console.log(error)
    }
}

export const onOwnerSendMessage = async (
    chatRoom: string,
    message: string,
    role: 'assistant' | 'user'
) => {
    try {
        const chat = await client.chatRoom.update({
            where: {
               id: chatRoom, 
            },
            data: {
                message: {
                    create: {
                        message,
                        role,
                    }
                }
            },
            select: {
                message: {
                    select: {
                        id: true,
                        role: true,
                        message: true,
                        createdAt: true,
                        seen: true,
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1,
                }
            }
        })
        
        if (chat) return chat
    } catch (error) {
        return {
            status: 500,
            message: error
        }
    }
}

export const onRealTimeChat = async (
    chatroomId: string,
    message: string,
    id: string,
    role: 'assistant' | 'user'
) => {
    //WIP
    // pusherServer.trigger(chatroomId, 'realtime-mode', {
    //     chat: {
    //         message: {
    //             id,
    //             role,
    //         }
    //     }
    // })
}