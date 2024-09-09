import React from 'react'


const PortalSteps = ({
    questions,
    type,
    register,
    error,
    onNext,
    step,
    onBooking,
    date,
    onBack,
    onSlot,
    loading,
    slot,
    products,
    bookings,
    amount,
    stripeId,
}: PortalStepsProps) => {
    if (step == 1) {
        return (
            <div>
                {/* Question Form */}
            </div>
        )
    }

    if (step == 2 && type == 'Appointment') {
        return (
            <div>
                {/* Book Appointment Date */}
            </div>
        )
    }


    if (step == 2 && type == 'Payment') {
        return (
            <div>
                {/* Paymetn Checkout */}
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center gap-3">
            <h2 className="font-bold text-gray-600 text-4xl">Thank You</h2>
            <p className="text-center">
                Thank you for taking the time to fill in this form. We look forward to
                <br /> speaking to you soon.
            </p>
        </div>
    )
}

export default PortalSteps