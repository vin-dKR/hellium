import InfoBar from '@/components/infobar/InfoBar'
import BillingSettings from '@/components/settings/BillingSettings'
import React from 'react'

type Props = {}

const Settings = (props: Props) => {
    return (
        <div>
            <InfoBar />
            <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
                <BillingSettings />
            </div>
        </div>
    )
}

export default Settings