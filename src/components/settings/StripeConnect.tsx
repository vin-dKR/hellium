'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Loader } from '@/components/loader/Loader'
import { useStripe } from '@/hooks/billing/useBillings'

const StripeConnect = ({ connected }: StripeConnectProps) => {
    const { onStripeConnect, onStripeAccountPending } = useStripe()

    return (
        <Button
            disabled={connected}
            onClick={onStripeConnect}
        >
            <Loader loading={onStripeAccountPending}>
                {connected ? 'Connected' : 'Connect to Stripe'}
            </Loader>
        </Button>
    )
}

export default StripeConnect