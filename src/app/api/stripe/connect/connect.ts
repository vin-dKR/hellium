import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    typescript: true,
    apiVersion: '2024-06-20',
})

export async function GET() {
    try {
        const user = await currentUser()
        if (!user) return new NextResponse('User not authenticated')

        const account = await stripe.accounts.create({
            country: 'US',
            type: 'custom',
            business_type: 'company',
            capabilities: {
                card_payments: {
                    requested: true,
                },
                transfers: {
                    requested: true,
                },
            },
            external_account: 'btok_us',
            tos_acceptance: {
                date: 1547923073,
                ip: '172.18.80.19',
            },
        })
        
    } catch (error) {
        console.log(error)
    }
}