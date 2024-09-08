import { onDomainCustomerResponses, onGetAllDomainBookings } from '@/actions/appointment'
import React from 'react'


const CustomerSignUpForm = async ({ params }: CustomerSignUpFormProps) => {
    const questions = await onDomainCustomerResponses(params.customerid)
    const bookings = await onGetAllDomainBookings(params.customerid)

    return (
        <div>
            {/* PortalForm Page */}
        </div>
    )
}

export default CustomerSignUpForm