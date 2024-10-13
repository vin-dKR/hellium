"use server"

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    typescript: true,
    apiVersion: '2024-06-20'
})

export const onCreateCustomerPaymentSecret = async (amount: number, stripeId: string) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "inr",
            amount: amount * 100,
            automatic_payment_methods: {
                enabled: true
            },
        },
            {
                stripeAccount: stripeId
            }
        )

        if (paymentIntent) {
            return {
                secret: paymentIntent.client_secret
            }
        }
    } catch (error) {
        console.log(error)
    }
}