'use server'

import client from "@/lib/prisma"
import { boolean } from "zod"

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

export const onGetAllDomainBookings = async (domainId: string) => {
    try {
        const bookings = await client.bookings.findMany({
            where: {
                id: domainId
            },
            select: {
                slot: true,
                date: true,
            }
        })

        if (bookings) {
            return bookings
        }
    } catch (error) {
        console.log(error)
    }
}

export const onBookNewAppointment = async (
    domainId: string,
    customerId: string,
    slot: string,
    date: string,
    email: string
) => {
    try {
        const bookings = await client.customer.update({
            where: {
                id: customerId,
            },
            data: {
                booking: {
                    create: {
                        domainId,
                        slot,
                        date,
                        email
                    }
                }
            }
        })
        if (bookings) {
            return { status: 200, message: 'Booking created' }
        }
    } catch (error) {
        console.log(error)
    }

}