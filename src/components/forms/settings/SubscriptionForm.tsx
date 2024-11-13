'use client'
import { Loader } from '@/components/loader/Loader'
import StripeElements from '@/components/settings/StripeElements'
import SubscriptionCard from '@/components/settings/SubscriptionCard'
import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/billing/useBillings'
import React from 'react'

type Props = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
}

const SubscriptionForm = ({ plan }: Props) => {
  const { loading, onSetPayment, payment, onUpdateToFreeTier } =
    useSubscription(plan)

  return (
    <Loader loading={loading}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <SubscriptionCard
            title="STANDARD"
            description="Perfect if you’re just getting started with Hellium AI"
            price="0"
            payment={payment}
            onPayment={onSetPayment}
            id="STANDARD"
          />

          <SubscriptionCard
            title="PRO"
            description="Perfect if you’re just getting started with Hellium AI"
            price="50"
            payment={payment}
            onPayment={onSetPayment}
            id="PRO"
          />

          <SubscriptionCard
            title="ULTIMATE"
            description="Perfect if you’re just getting started with Hellium AI"
            price="100"
            payment={payment}
            onPayment={onSetPayment}
            id="ULTIMATE"
          />

        </div>
        <StripeElements payment={payment} />
        {payment === 'STANDARD' && (
          <Button onClick={onUpdateToFreeTier}>
            <Loader loading={loading}>Confirm</Loader>
          </Button>
        )}
      </div>
    </Loader>
  )
}

export default SubscriptionForm
