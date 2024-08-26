import React from 'react'
import FormGenerator from '../form-generator/FormGenerator'

const DomainUpdate = ({ name, register, errors }: DomainUpdateProps) => {
    return (
        <div className="flex gap-2 pt-5 items-end w-[400px]">
            <FormGenerator
                label="Domain Name"
                register={register}
                name="domain"
                errors={errors}
                type='text'
                inputType='input'
                placeholder={name}
            />
        </div>
    )
}

export default DomainUpdate