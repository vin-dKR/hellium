'use server'

import client from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs"

export const onGetSubsPlan = async () => {
    try {
        const user = await currentUser()
        if (!user) return

        const plan = await client.user.findUnique({
            where: {
                clerkId: user.id
            },
            select: {
                subscription: true
            }
        })

        if (plan) {
            return plan.subscription?.plan
        }
    } catch (error) {
        console.log(error)
    }
}

export const onGetAllAccountDomains = async () => {
    const user = await currentUser()
    if (!user) return

    try {
        const domains = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
            select: {
                id: true,
                domains: {
                    select: {
                        name: true,
                        icon: true,
                        id: true,
                        customer: {
                            select: {
                                chatRoom: {
                                    select: {
                                        id: true,
                                        live: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })
        return { ...domains }
    } catch (error) {
        console.log(error)
        return { status: 500, error: error }
    }
}