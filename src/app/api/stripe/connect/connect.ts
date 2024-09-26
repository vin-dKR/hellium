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

        if (account) {
            const approve = await stripe.accounts.update(account.id, {
                business_profile: {
                    mcc: '5045',
                    url: 'https://fakeweb.com',
                },
                company: {
                    address: {
                        city: 'Nala',
                        line1: '123 State St.',
                        postal_code: '815355',
                        state: 'JH',
                    },
                    tax_id: '000000000',
                    name: 'The Fake web',
                    phone: '00000000',
                },
            })
            if (approve) {
                const person = await stripe.accounts.createPerson(account.id, {
                    first_name: 'Vin',
                    last_name: 'KR',
                    relationship: {
                        representative: true,
                        title: 'CEO',
                    },
                })
                if (person) {
                    const approvePerson = await stripe.accounts.updatePerson(account.id, person.id, {
                        address: {
                            city: 'victoria ',
                            line1: '123 State St',
                            postal_code: 'V8P 1A1',
                            state: 'BC',
                        },
                        dob: {
                            day: 10,
                            month: 11,
                            year: 1980,
                        },
                        ssn_last_4: '0000',
                        phone: '8888675309',
                        email: 'jenny@bestcookieco.com',
                        relationship: {
                            executive: true,
                        },
                    })
                    if (approvePerson) {
                        const owner = await stripe.accounts.createPerson(account.id, {
                            first_name: 'Kathleen',
                            last_name: 'Banks',
                            email: 'kathleen@bestcookieco.com',
                            address: {
                                city: 'victoria ',
                                line1: '123 State St',
                                postal_code: 'V8P 1A1',
                                state: 'BC',
                            },
                            dob: {
                                day: 10,
                                month: 11,
                                year: 1980,
                            },
                            phone: '8888675309',
                            relationship: {
                                owner: true,
                                percent_ownership: 80,
                            },
                        })
                    }
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
}