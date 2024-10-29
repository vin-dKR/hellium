"use client"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Loader } from "../loader/Loader"
import { useStripeElements } from "@/hooks/billing/useBillings"
import { PaymentForm } from "./PaymentForm"

const StripeElement = ({payment}: StripeElementProps) => {
	const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!)
	const { stripeSecret, loadForm } = useStripeElements(payment)

	return(
		StripePromise && 
		(payment === "PRO" || payment === "ULTIMATE") && (
			<Loader loading={loadForm}>
				<Elements
					stripe={StripePromise}
					options={{
						clientSecret: stripeSecret
					}}	
				>	
					<PaymentForm plan={payment} /> 
				</Elements>
			</Loader>
		)
	)
}

export default StripeElement
