import { onGetCurrentDomainInfo } from '@/actions/auth'
import SettingsForm from '@/components/forms/settings/SettingsForm'
import InfoBar from '@/components/infobar/InfoBar'
import BotTrainingForm from '@/components/settings/BotTrainingForm'
import { redirect } from 'next/navigation'
import React from 'react'

const DomainSetting = async ({ params }: DomainSettingProps) => {
    const domain = await onGetCurrentDomainInfo(params.domain)
    if (!domain || 'status' in domain) redirect("/dashboard")
    return (
        <>
            <InfoBar />
            <div className="overflow-y-auto w-full chat-window flex-1 h-0">
                <SettingsForm
                    id={domain.domains[0].id}
                    name={domain.domains[0].name}
                    chatBot={domain.domains[0].chatBot}
                    plan={domain.subscription?.plan!}
                />
                <BotTrainingForm id={domain.domains[0].id} />
            </div>
        </>
    )
}

export default DomainSetting