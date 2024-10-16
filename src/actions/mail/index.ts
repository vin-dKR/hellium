"use server"

import client from "@/lib/prisma"

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