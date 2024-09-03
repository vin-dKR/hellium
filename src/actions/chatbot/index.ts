'use server'

import client from "@/lib/prisma"

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