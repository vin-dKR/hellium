import { onGetPaymetConnected } from '@/actions/settings'
import InfoBar from '@/components/infobar/InfoBar'
import React from 'react'


const IntegrationsPage = async () => {
    const payment = await onGetPaymetConnected()


    return (
        <>
            <InfoBar />

        </>
    )
}

export default IntegrationsPage