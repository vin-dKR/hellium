import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"
import {
    useElements,
    useStripe as useStripeHook,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { onCreateCustomerPaymentSecret, onUpdateSubscription } from "@/actions/stripe"
import { useRouter } from 'next/navigation'

export const useStripe = () => {
    const [onStripeAccountPending, setOnStripeAccountPending] = useState<boolean>(false)

    const onStripeConnect = async () => {
        try {
            setOnStripeAccountPending(true);
            const account = await axios.get(`/api/stripe/connect`)

            if (account) {
                setOnStripeAccountPending(false)
                window.location.href = account.data.url
            }
        } catch (error) {
            console.log(error);
        }
    }
    return { onStripeConnect, onStripeAccountPending }
}

export const useCompleteCustomerPayment = (onNext: () => void) => {
    const [processing, setProcessing] = useState<boolean>(false)
    const { toast } = useToast()
    const stripe = useStripeHook()
    const elements = useElements()

    const onMakePayment = async (e: React.MouseEvent) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return null
        }

        console.log('no reload')

        try {
            setProcessing(true)

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://localhost:3000/settings',
                },
                redirect: 'if_required',
            })

            if (error) {
                console.log(error)
            }

            if (paymentIntent?.status === 'succeeded') {
                toast({
                    title: 'Success',
                    description: 'Payment complete',
                })
                onNext()
            }

            setProcessing(false)
        } catch (error) {
            console.log(error)
        }
    }

    return { processing, onMakePayment }
}

export const useStripeCustomer = (amount: number, stripeId: string) => {
    const [stripeSecret, setStripeSecret] = useState<string>('')
    const [loadForm, setLoadForm] = useState<boolean>(false)

    const onGetCustomerIntent = async (amount: number) => {
        try {
            setLoadForm(true)
            const paymentIntent = await onCreateCustomerPaymentSecret(amount, stripeId)

            if (paymentIntent) {
                setLoadForm(false)
                setStripeSecret(paymentIntent.secret!)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onGetCustomerIntent(amount)
    }, [])

    return {
        stripeSecret,
        loadForm
    }
}


export const useSubscription = (plan: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
	const [loading, setLoading] = useState<boolean>(false)
	const [payment, setPayment] = useState<'STANDARD' | 'PRO' | 'ULTIMATE'>(plan)
	const { toast } = useToast()
	const router = useRouter()

	const onUpdateToFreeTier = async () => {
		try {
			setLoading(true)
			const free = await onUpdateSubscription('STANDARD')
			if (free) {
				setLoading(false)
				toast({
					title: "Success",
					description: free.message
				})
				router.refresh()
			}
		} catch(e) {
			console.log(e)
		}

	}	
	const onSetPayment = (payment: 'STANDARD' | 'PRO' | 'ULTIMATE') => setPayment(payment)
	
	return {
		loading, 
		onSetPayment, 
		payment, 
		onUpdateToFreeTier 
	}
}
