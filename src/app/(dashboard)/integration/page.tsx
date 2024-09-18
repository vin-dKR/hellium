import { onGetPaymetConnected } from '@/actions/settings'
import InfoBar from '@/components/infobar/InfoBar'
import IntegrationList from '@/components/integrations/IntegrationList'
import React from 'react'


const IntegrationsPage = async () => {
    const payment = await onGetPaymetConnected()

    const connections = {
        strip: payment ? true : false
    }

    return (
        <>
            <InfoBar />
            <IntegrationList connections={connections} />
        </>
    )
}

export default IntegrationsPage