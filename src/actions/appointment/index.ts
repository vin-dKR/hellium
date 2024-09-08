'use server'

import client from "@/lib/prisma"

export const onDomainCustomerResponses = async (customerId: string) => {
    try {
        const customerQestion = await client.customer.findUnique({
            where: {
                id: customerId
            },
            select: {
                email: true,
                questions: {
                    select: {
                        id: true,
                        question: true,
                        answered: true,
                    }
                }
            }
        })

        if (customerQestion) {
            return customerQestion
        }
    } catch (error) {
        console.log(error)
    }
}