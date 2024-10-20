"use client"
import { useEmailMarketing } from '@/hooks/email-marketing/useEmailMarketing'
import React from 'react'


const EmailMarketing = (props: EmailMarketingProps) => {
    const {
        onCreateCampaign,
        onCreateEmailTemplate,
        onSelectCampagin,
        addCustomerToCampaign,
        onSelectedEmail,
        onBulkEmail,
        isSelected,
        register,
        errors,
        loading,
        processing,
        campaignId,
        onSetAnswersId,
        isId,
        registerEmail,
        emailErrors,
        editing,
        setValue,
    } = useEmailMarketing()
    return (
        <div>
            Email Marketing
        </div>
    )
}

export default EmailMarketing