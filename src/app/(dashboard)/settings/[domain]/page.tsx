import { onGetCurrentDomainInfo } from '@/actions/settings'
import BotTrainingForm from '@/components/forms/settings/BotTrainingForm'
import SettingsForm from '@/components/forms/settings/SettingsForm'
import InfoBar from '@/components/infobar/InfoBar'
import ProductTable from '@/components/products/ProductTable'
import { redirect } from 'next/navigation'
import React from 'react'

const DomainSetting = async ({ params }: DomainSettingProps) => {
    const domain = await onGetCurrentDomainInfo(params.domain)
    console.log(params.domain)
    if (!domain) redirect("/dashboard")
    return (
        <div>
            <InfoBar />
            <div className="overflow-y-auto w-full chat-window flex-1">
                {domain && 'domains' in domain && domain.domains.length > 0 && (
                    <SettingsForm
                        id={domain.domains[0].id}
                        name={domain.domains[0].name}
                        chatBot={domain.domains[0].chatBot}
                        plan={domain.subscription?.plan!}
                    />
                )}
                <BotTrainingForm id={domain.domains[0].id} />
                {/* <ProductTable
                    products={domain.domains[0].products || []}
                    id={domain.domains[0].id}
                /> */}
            </div>
        </div>
    )
}

export default DomainSetting