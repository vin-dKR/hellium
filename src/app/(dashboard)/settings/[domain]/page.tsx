import { onGetCurrentDomainInfo } from '@/actions/settings'
import BotTrainingForm from '@/components/forms/settings/BotTrainingForm'
import SettingsForm from '@/components/forms/settings/SettingsForm'
import InfoBar from '@/components/infobar/InfoBar'
import ProductTable from '@/components/products/ProductTable'
import { redirect } from 'next/navigation'
import React from 'react'

const DomainSetting = async ({ params }: DomainSettingProps) => {
  // console.log(params.domain)
  const domain = await onGetCurrentDomainInfo(`${params.domain}.com`)
  if (!domain) redirect("/dashboard")
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full overflow-x-hidden chat-window flex-1">
        <SettingsForm
          plan={domain.subscription?.plan!}
          chatBot={domain.domains[0].chatBot}
          id={domain.domains[0].id}
          name={domain.domains[0].name}
        />
        <BotTrainingForm id={domain.domains[0].id} />
        <ProductTable
          id={domain.domains[0].id}
          products={domain.domains[0].products || []}
        />
      </div>
    </>
  )
}

export default DomainSetting
