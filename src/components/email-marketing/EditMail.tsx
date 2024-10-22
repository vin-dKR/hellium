"use client"
import React from 'react'
import { Loader } from '@/components/loader/Loader'
import { useEditEmail } from '@/hooks/email-marketing/useEmailMarketing'
import FormGenerator from '../forms/form-generator/FormGenerator'
import { Button } from '../ui/button'


const EditMail = ({
    id,
    onCreate,
    errors,
    register,
    setDefault,
}: EditMailProps) => {
    const { loading, template } = useEditEmail(id)
    setDefault('description', template ? JSON.parse(template) : '')
    return (
        <form
            onSubmit={onCreate}
            className="flex flex-col gap-3"
        >
            <Loader loading={loading}>
                <FormGenerator
                    name="description"
                    label="Message"
                    register={register}
                    errors={errors}
                    inputType="textarea"
                    lines={10}
                    placeholder="your email description"
                    type="text"
                />
                <Button>Save</Button>
            </Loader>
        </form>
    )
}

export default EditMail