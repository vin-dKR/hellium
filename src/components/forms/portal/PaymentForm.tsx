'use client'
import { Loader } from '@/components/loader/Loader'
import { Button } from '@/components/ui/button'
import { PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'


export const CustomerPaymentForm = ({ onNext }: CustomerPaymentFormProps) => {
    
    return (
        <div className="flex flex-col">
            <PaymentElement />
            <Button
                type="submit"
                className="w-full mt-5"
                onClick={hooks.onMakePayment}
            >
                <Loader loading={hooks.processing}>Pay</Loader>
            </Button>
        </div>
    )
}