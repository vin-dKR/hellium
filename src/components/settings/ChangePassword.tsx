'use client'

import { useChangePassword } from '@/hooks/settings/useSettings'
import React from 'react'
import SectionLabel from '../section-label/SectionLabel'
import FormGenerator from '../forms/form-generator/FormGenerator'
import { Button } from '../ui/button'
import { Loader } from '../loader/Loader'


const ChangePassword = () => {
    const { register, errors, onChangePasswordHandle, loading } = useChangePassword()
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
                <SectionLabel
                    label="Change Password"
                    message="Reset your password"
                />
            </div>
            <form
                onSubmit={onChangePasswordHandle}
                className="lg:col-span-4"
            >
                <div className="lg:w-[500px] flex flex-col gap-3">
                    <FormGenerator
                        register={register}
                        errors={errors}
                        name="password"
                        placeholder="New Password"
                        type="text"
                        inputType="input"
                    />
                    <FormGenerator
                        register={register}
                        errors={errors}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="text"
                        inputType="input"
                    />
                    <Button className="bg-grandis text-gray-700 font-semibold">
                        <Loader loading={loading}>Change Password</Loader>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword