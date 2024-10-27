"use client"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Loader } from "../loader/Loader"
import { useStripeElements } from "@/hooks/billing/useBillings"

const StripeElement = async ({payment}: StripeElementProps) => {
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
					//Payment Form
				</Elements>
			</Loader>
		)
	)
}

export default StripeElement
