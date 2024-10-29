"use server"

import Stripe from 'stripe'
import { currentUser } from "@clerk/nextjs"
import client from '@/lib/prisma'

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

export const onUpdateSubscription = async (plan: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
	try {
		const user = await currentUser()
		if (!user) return

		const update = await client.user.update({
			where: {
				clerkId: user.id
			},
			data: {
				subscription: {
					update: {
						data: {
							plan,
							credits: plan == 'PRO' ? 50 : plan == 'ULTIMATE' ? 500 : 10
						}
					} 
				} 
			},
			select: {
				subscription: {
					select: {
						plan: true
					}
				}
			}
		}) 

		if (update) {
			return {
				status: 200,
				message: 'Hurrrah! Subscription Updated',
				plan: update.subscription?.plan
			}
		}
	} catch(e) { 
		console.log(e) 	 
	} 
}

const setPlanAmount = (item: "STANDARD" | "PRO" | "ULTIMATE") => {
	if (item == "PRO") {
		return 5000
	}
	if (item == "ULTIMATE") {
		return 10000
	}
	return 0
}


export const onGetStripeClientSecret = async (item: "STANDARD" | "PRO" | "ULTIMATE") => {
	try{
		const amount = setPlanAmount(item)
		const paymentIntent = await stripe.paymentIntents.create({
			currency: "inr",
			amount: amount,
			automatic_payment_methods: {
				enabled: true
			}
		})

		if (paymentIntent) {
			return {
				secret: paymentIntent.client_secret
			}
		}
	} catch(e) {
		console.log(e)
	}
}
