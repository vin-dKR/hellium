"use server"

import client from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs"

export const onGetAllCustomer = async (id: string) => {
    try {
        const customer = await client.user.findUnique({
            where: {
                clerkId: id
            },
            select: {
                subscription: {
                    select: {
                        credits: true,
                        plan: true,
                    }
                },
                domains: {
                    select: {
                        customer: {
                            select: {
                                id: true,
                                email: true,
                                Domain: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        if (customer) {
            return customer
        }
    } catch (error) {
        console.log(error)
    }
}

export const onGetAllCampaigns = async (id: string) => {
    try {
        const campaign = await client.user.findUnique({
            where: {
                clerkId: id
            },
            select: {
                campaign: {
                    select: {
                        name: true,
                        id: true,
                        customers: true,
                        createdAt: true
                    }
                }
            }
        })

        if (campaign) {
            return campaign
        }
    } catch (error) {
        console.log(error)
    }
}

export const onCreateMarketingCampaign = async (name: string) => {
    try {
        const user = await currentUser()
        if (!user) return null

        const campaign = await client.user.update({
            where: {
                clerkId: user.id
            },
            data: {
                campaign: {
                    create: {
                        name
                    }
                }
            }
        })

        if (campaign) {
            return { status: 200, message: 'You campaign was created' }
        }
    } catch (error) {
        console.log(error)
    }
}

export const onSaveEmailTemplate = async (template: string, campaignId: string) => {
    try {
        const newTemplate = await client.campaign.update({
            where: {
                id: campaignId
            },
            data: {
                template
            }
        })

        if (newTemplate) {
            return {
                status: 200, message: 'Email template created'
            }
        }
    } catch (error) {
        console.log(error)
    }
}