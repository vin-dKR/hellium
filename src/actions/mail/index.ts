"use server"

import client from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs"
import nodemailer from 'nodemailer'

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

export const onAddCustomerToEmail = async (customers: string[], id: string) => {
    try {
        const customerAdd = await client.campaign.update({
            where: {
                id
            },
            data: {
                customers
            }
        })

        if (customerAdd) {
            return {
                status: 200,
                message: "Customer added to Campaign."
            }
        }
    } catch (error) {
        console.log(error)
    }
}

// send mail in bulk
export const onBulkMailer = async (email: string[], campaignId: string) => {
    try {
        const user = await currentUser()
        if (!user) return null

        const template = await client.campaign.findUnique({
            where: {
                id: campaignId
            },
            select: {
                name: true,
                template: true
            }
        })

        if (template && template.template) {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.NODE_MAILER_EMAIL,
                    pass: process.env.NODE_MAILER_PASSWORD
                }
            })

            const mailOption = {
                to: email,
                subject: template.name,
                text: JSON.parse(template.template)
            }

            transporter.sendMail(mailOption, function (error, info) {
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email Sent' + info.response)
                }
            })

            const creditUsed = await client.user.update({
                where: {
                    id: user.id
                },
                data: {
                    subscription: {
                        update: {
                            credits: { decrement: email.length }
                        }
                    }
                }
            })

            if (creditUsed) {
                return { status: 200, message: 'Campaign emails sent' }
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const onGetAllCustomerResponse = async (id: string) => {
    try {
        const user = await currentUser()
        if (!user) return null

        const answers = await client.user.findUnique({
            where: {
                clerkId: id
            },
            select: {
                domains: {
                    select: {
                        customer: {
                            select: {
                                questions: {
                                    where: {
                                        customerId: id,
                                        answered: {
                                            not: null
                                        }
                                    },
                                    select: {
                                        question: true,
                                        answered: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        if (answers) {
            return answers.domains
        }
    } catch (error) {
        console.log(error)
    }
}


export const onGetEmailTemplate = async (id: string) => {
    try {
        const template = await client.campaign.findUnique({
            where: {
                id
            },
            select: {
                template: true
            }
        })

        if (template) {
            return template.template
        }
    } catch (err) {
        console.log(err)
    }
}
