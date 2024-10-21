"use client"
import { useEmailMarketing } from '@/hooks/email-marketing/useEmailMarketing'
import React from 'react'
import CustomerTable from './CustomerTable'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import Modal from '../modal/Modal'
import { Card, CardDescription } from '../ui/card'
import { Loader } from '@/components/loader/Loader'
import FormGenerator from '../forms/form-generator/FormGenerator'


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
                    <Modal
                        title="Create a new campaign"
                        description="Add your customers and create a marketing campaign"
                        trigger={
                            <Card className="flex gap-2 items-center px-3 cursor-pointer text-sm">
                                <Loader loading={false}>
                                    <Plus />
                                </Loader>
                            </Card>
                        }
                    >
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={onCreateCampaign}
                        >
                            <FormGenerator
                                name="name"
                                register={register}
                                errors={errors}
                                inputType="input"
                                placeholder="your campaign name"
                                type="text"
                            />
                            <Button
                                className="w-full"
                                disabled={loading}
                                type="submit"
                            >
                                <Loader loading={loading}>Create Campaign</Loader>
                            </Button>
                        </form>
                    </Modal>
                    <Card className="p-2">
                        <CardDescription className="font-bold">
                            {subscription?.credits} credits
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EmailMarketing