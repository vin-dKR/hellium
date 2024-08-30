'use client'
import { AuthContextProvider } from '@/context/UseAuthContext'
import { useSignInForm } from '@/hooks/sign-in/useSignIn'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Loader } from '@/components/loader/Loader'


const LoginFormProvider = ({ children }: Props) => {
    const { methods, onHandleSubmit, loading } = useSignInForm()

    return (
        <AuthContextProvider>
            <FormProvider {...methods}>
                <form
                    onSubmit={onHandleSubmit}
                    className='h-full'
                >
                    <div className="flex flex-col justify-between gap-3 h-full">
                        <Loader loading={loading}>{children}</Loader>
                    </div>
                </form>
            </FormProvider>
        </AuthContextProvider>
    )
}

export default LoginFormProvider