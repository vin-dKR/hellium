'use server'

import client from "@/lib/prisma"
import { clerkClient, currentUser } from "@clerk/nextjs/server"

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

export const onIntegrateDomain = async (domain: string, icon: string) => {
    const user = await currentUser()
    if (!user) return
    try {
        const subscription = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
            select: {
                _count: {
                    select: {
                        domains: true,
                    },
                },
                subscription: {
                    select: {
                        plan: true,
                    },
                },
            },
        })
        const domainExists = await client.user.findFirst({
            where: {
                clerkId: user.id,
                domains: {
                    some: {
                        name: domain,
                    },
                },
            },
        })

        if (!domainExists) {
            if (
                (subscription?.subscription?.plan == 'STANDARD' &&
                    subscription._count.domains < 1) ||
                (subscription?.subscription?.plan == 'PRO' &&
                    subscription._count.domains < 5) ||
                (subscription?.subscription?.plan == 'ULTIMATE' &&
                    subscription._count.domains < 10)
            ) {
                const newDomain = await client.user.update({
                    where: {
                        clerkId: user.id,
                    },
                    data: {
                        domains: {
                            create: {
                                name: domain,
                                icon,
                                chatBot: {
                                    create: {
                                        welcomeMessage: 'Hey there, have  a question? Text us here',
                                    },
                                },
                            },
                        },
                    },
                })

                if (newDomain) {
                    return { status: 200, message: 'Domain successfully added' }
                }
            }
            return {
                status: 400,
                message:
                    "You've reached the maximum number of domains, upgrade your plan",
            }
        }
        return {
            status: 400,
            message: 'Domain already exists',
        }
    } catch (error) {
        console.log(error)
    }
}


// password-change
export const onUpdatePassword = async (password: string) => {
    try {
        const user = await currentUser()

        if (!user) return null

        const updateUser = await clerkClient.users.updateUser(user.id, { password })
        if (updateUser) {
            return {
                status: 200,
                message: "Pasword updated"
            }
        }
    } catch (error) {
        return {
            status: 500,
            message: error
        }
    }
}

export const onUpdateDomain = async (id: string, name: string) => {
    try {
        const domainExists = await client.domain.findFirst({
            where: {
                name: {
                    contains: name,
                },
            },
        })

        if (!domainExists) {
            const domain = await client.domain.update({
                where: {
                    id,
                },
                data: {
                    name,
                },
            })

            if (domain) {
                return {
                    status: 200,
                    message: 'Domain updated',
                }
            }

            return {
                status: 400,
                message: 'Oops something went wrong!',
            }
        }

        return {
            status: 400,
            message: 'Domain with this name already exists',
        }
    } catch (error) {
        console.log(error)
    }
}