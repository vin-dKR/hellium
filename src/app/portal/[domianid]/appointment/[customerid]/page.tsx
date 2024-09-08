import { onDomainCustomerResponses, onGetAllDomainBookings } from '@/actions/appointment'
import PortalForm from '@/components/forms/portal/PortalForm'
import React from 'react'


const CustomerSignUpForm = async ({ params }: CustomerSignUpFormProps) => {
    const questions = await onDomainCustomerResponses(params.customerid)
    const bookings = await onGetAllDomainBookings(params.customerid)

    if (!questions) return null

    return (
        <div>
            <PortalForm
                bookings={bookings}
                email={questions.email!}
                domainid={params.domainid}
                customerId={params.customerid}
                questions={questions.questions}
                type="Appointment"
            />
        </div>
    )
}

export default CustomerSignUpForm