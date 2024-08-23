import InfoBar from '@/components/infobar/InfoBar'
import BillingSettings from '@/components/settings/BillingSettings'
import ChangePassword from '@/components/settings/ChangePassword'
import DarkModeToggle from '@/components/settings/DarkModeToggle'
import React from 'react'


const Settings = () => {
    return (
        <div>
            <InfoBar />
            <div className="overflow-y-auto w-full chat-window flex-1 h-full flex flex-col gap-10">
                <BillingSettings />
                <DarkModeToggle />
                <ChangePassword />
            </div>
        </div>
    )
}

export default Settings