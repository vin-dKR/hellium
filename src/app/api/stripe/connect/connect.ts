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
    } catch (error) {
        console.log(error)
    }
}