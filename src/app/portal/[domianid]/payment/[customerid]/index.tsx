import React from 'react'
import { onDomainCustomerResponses, onGetAllDomainBookings } from '@/actions/appointment'
import PortalForm from '@/components/forms/portal/PortalForm'

const CustomerPaymentPage = async ({ params }: {
    params: { domainId: string, customerId: string }
}) => {
    const questions = await onDomainCustomerResponses(params.customerId)

    if (!questions) return null

    return (
        <PortalForm
            email={questions.email!}
        // WIP for products
        />
    )
}

export default CustomerPaymentPage