"use client"
import { useEmailMarketing } from '@/hooks/email-marketing/useEmailMarketing'
import React from 'react'
import CustomerTable from './CustomerTable'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'


const EmailMarketing = ({ domains, campaign, subscription }: EmailMarketingProps) => {
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
        <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CustomerTable
                domains={domains}
                onId={onSetAnswersId}
                onSelect={onSelectedEmail}
                select={isSelected}
                id={isId}
            />
            <div>
                <div className="flex gap-3 justify-end">
                    <Button
                        disabled={isSelected.length == 0}
                        onClick={addCustomerToCampaign}
                    >
                        <Plus /> Add to Campaign
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EmailMarketing