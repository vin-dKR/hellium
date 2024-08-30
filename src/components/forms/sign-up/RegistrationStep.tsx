'use client'
import { useAuthContextHook } from '@/context/UseAuthContext'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './TypeSelectionForm'
import dynamic from 'next/dynamic'
import { Spinner } from '@/components/spinner/Spinner'

import { DynamicOptionsLoadingProps } from 'next/dynamic'

const LoadingSpinner = (props: DynamicOptionsLoadingProps) => {
    return <div><Spinner /></div>
}
const DetailForm = dynamic(() => import('./AccountDetailForm'), {
    ssr: false,
    loading: LoadingSpinner as (loadingProps: DynamicOptionsLoadingProps) => JSX.Element,
})

const OTPForm = dynamic(() => import('./OTPForm'), {
    ssr: false,
    loading: LoadingSpinner as (loadingProps: DynamicOptionsLoadingProps) => JSX.Element,
})

const RegistrationFormStep = () => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

    setValue('otp', onOTP)

    switch (currentStep) {
        case 1:
            return (
                <TypeSelectionForm
                    register={register}
                    userType={onUserType}
                    setUserType={setOnUserType}
                />
            )
        case 2:
            return (
                <DetailForm
                    errors={errors}
                    register={register}
                />
            )
        case 3:
            return (
                <OTPForm
                    otp={onOTP}
                    setOtp={setOnOTP}
                />
            )
    }

    return <div>RegistrationFormStep</div>
}

export default RegistrationFormStep