'use client'
import { useCompletePayment } from "@/hooks/billing/useBillings"
import { CardDescription } from "../ui/card"
import { PaymentElement } from "@stripe/react-stripe-js"
import { Button } from "../ui/button"
import { Loader } from "../loader/Loader"


export const PaymentForm = ({ plan }: PlanProps) => {
	const { onMakePayment, processing } = useCompletePayment(plan)
	return (
		<form
			onSubmit={onMakePayment}
			className="flex flex-col gap-3"
		>
			<div>
				<h2 className="font-semibold text-xl">Payment Method</h2>
				<CardDescription>Enter your card details</CardDescription>
			</div>
			<PaymentElement />
			<Button type="submit">
				<Loader loading={processing}>Pay</Loader>
			</Button>
		</form>
	)
}
