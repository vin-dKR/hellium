'use client'

import { Loader } from '@/components/loader/Loader'
import { AuthContextProvider } from '@/context/UseAuthContext'
import { useSignUpForm } from '@/hooks/sign-up/useSignUp'
import React from 'react'
import { FormProvider } from 'react-hook-form'


const SignUpFormProvider = ({ children }: Props) => {
    const { methods, onHandleSubmit, loading } = useSignUpForm()

    return (
        <AuthContextProvider>
            <FormProvider {...methods}>
                <form
                    onSubmit={onHandleSubmit}
                    className="h-full"
                >
                    <div className="flex flex-col justify-between gap-3 h-full">
                        <Loader loading={loading}>{children}</Loader>
                    </div>
                </form>
            </FormProvider>
        </AuthContextProvider>
    )
}

export default SignUpFormProvider