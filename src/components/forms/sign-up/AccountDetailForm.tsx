import { USER_REGISTRATION_FORM } from '@/constants/forms'
import React from 'react'
import FormGenerator from '../form-generator/FormGenerator'

function AccountDetailForm({ errors, register }: AccountDetailFormProps) {
    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">Account details</h2>
            <p className="text-iridium md:text-sm">Enter your email and password</p>
            {USER_REGISTRATION_FORM.map((field) => (
                <FormGenerator
                    key={field.id}
                    {...field}
                    errors={errors}
                    register={register}
                    name={field.name}
                />
            ))}
        </>
    )
}

export default AccountDetailForm