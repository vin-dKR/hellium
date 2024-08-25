import { onGetCurrentDomainInfo } from '@/actions/auth'
import React from 'react'

const DomainSetting = async ({ params }: DomainSettingProps) => {
    const domain = await onGetCurrentDomainInfo(params.domain)
    
    return (
        <div>page</div>
    )
}

export default DomainSetting