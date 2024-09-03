'use server'

import client from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'

export const onCompleteUserRegistration = async (
    fullname: string,
    clerkId: string,
    type: string
) => {
    try {
        const registered = await client.user.create({
            data: {
                fullname,
                clerkId,
                type,
                subscription: {
                    create: {},
                },
            },
            select: {
                fullname: true,
                id: true,
                type: true,
            },
        })

        if (registered) {
            return { status: 200, user: registered }
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const onLoginUser = async () => {
    const user = await currentUser()
    if (!user) redirectToSignIn()
    else {
        try {
            const authenticated = await client.user.findUnique({
                where: {
                    clerkId: user.id
                },
                select: {
                    id: true,
                    type: true,
                    fullname: true,
                }
            })

            if (authenticated) {
                const domains = await onGetAllAccountDomains()
                if (domains && 'domains' in domains) {
                    return {
                        status: 200,
                        user: authenticated,
                        domain: domains.domains
                    }
                }
            }
        } catch (error) {
            console.log(error)
            return { status: 500, error: error }
        }
    }
}

export const onGetCurrentDomainInfo = async (domain: string) => {
    const user = await currentUser()
    if (!user) return

    try {
        const userDomain = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
            select: {
                subscription: {
                    select: {
                        plan: true,
                    },
                },
                domains: {
                    where: {
                        name: {
                            contains: domain,
                        },
                    },
                    select: {
                        id: true,
                        name: true,
                        icon: true,
                        userId: true,
                        products: true,
                        chatBot: {
                            select: {
                                id: true,
                                welcomeMessage: true,
                                icon: true,
                            },
                        },
                    },
                },
            },
        })

        if (userDomain) {
            return userDomain
        }

    } catch (error) {
        return {
            status: 500,
            message: error
        }
    }
}