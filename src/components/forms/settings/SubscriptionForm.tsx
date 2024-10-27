"use client"

import { useSubscription } from "@/hooks/billing/useBillings"
import { Loader } from "@/components/loader/Loader"
import SubscriptionCard from "@/components/settings/SubscriptionCard"
import StripeElements from "@/components/settings/StripeElements"

const SubscriptionForm = ({ plan }: SubscriptionFormProps) => {
	const { loading, onSetPayment, payment, onUpdateToFreeTier } = useSubscription(plan)

	return (
		<Loader loading={loading}>
			<div className="flex flex-col gap-5" >
				<div className="flex flex-col gap-3">
					<SubscriptionCard
						title='STANDARD'
						description='Perfect if you are just getting started with Hellium AI.'
						price='0'
						payment={payment}
						onPayment={onSetPayment}
						id='STANDARD'
					/>
					<SubscriptionCard
						title='PRO'
						description='Perfect if you are just getting started with Hellium AI.'
						price='15'
						payment={payment}
						onPayment={onSetPayment}
						id='PRO'
					/>
					<SubscriptionCard
						title='ULTIMATE'
						description='Perfect if you are just getting started with Hellium AI.'
						price='35'
						payment={payment}
						onPayment={onSetPayment}
						id='ULTIMATE'
					/>
				</div>
				<StripeElements payment={payment} />
			</div>
		</Loader>
	)
}

export default SubscriptionForm 
