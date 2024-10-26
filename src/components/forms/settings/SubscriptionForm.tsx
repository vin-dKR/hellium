"use client"

import { useSubscription } from "@/hooks/billing/useBillings"
import { Loader } from "@/components/loader/Loader"		

export default const SubscriptionForm = ({ plans }: SubscriptionFormsProps) => {
	const { loading, onSetPayment, payment, onUpdateToFreeTier } = useSubscription(plans)

	return (
		<Loader loading={ loading }>
			<div className="flex flex-col gap-5" >
				<div className="flex flex-col gap-3">
					Subscription Card
				</div>
			</div>
		</Loader>
	)
}
