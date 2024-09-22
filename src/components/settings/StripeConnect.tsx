'use client'

import React from 'react'
import { Button } from '../ui/button'
import { connected } from 'process'
import { Loader } from '@/components/loader/Loader'

const StripeConnect = ({ connect }: StripeConnectProps) => {
    // WIP: stripe
    const { onStripeConnect, onStripAccountPending } = useStripe()

    return (
        <Button
            disabled={connected}
            onClick={onStripeConnect}
        >
            <Loader loading={onStripAccountPending}>
                {connected ? 'Connected' : 'Connect to Stripe'}
            </Loader>
        </Button>
    )
}

export default StripeConnect