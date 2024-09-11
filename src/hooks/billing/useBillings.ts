import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import {
    useElements,
    useStripe as useStripeHook,
} from '@stripe/react-stripe-js'

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