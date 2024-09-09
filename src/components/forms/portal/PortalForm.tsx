import usePortal from '@/hooks/portal/usePortal'
import React from 'react'


const PortalForm = ({
    questions,
    type,
    customerId,
    domainid,
    bookings,
    products,
    email,
    amount,
    stripeId,
}: PortalFormProps) => {
    const {
        step,
        onNext,
        onPrev,
        register,
        errors,
        date,
        setDate,
        onBookAppointment,
        onSelectedTimeSlot,
        selectedSlot,
        loading,
    } = usePortal(customerId, domainid, email)
    return (
        <div>
            portla form
        </div>
    )
}

export default PortalForm