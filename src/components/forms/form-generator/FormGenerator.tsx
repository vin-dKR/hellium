import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'

const FormGenerator = ({
    errors,
    inputType,
    name,
    placeholder,
    defaultValue,
    register,
    type,
    form,
    label,
    lines,
    options,
}: FormGeneratorProps) => {
    switch (inputType) {
        case 'input':
        default:
            return (
                <Label
                    className="flex flex-col gap-2"
                    htmlFor={`input-${label}`}
                >
                    {label && label}
                    <Input
                        id={`input-${label}`}
                        type={type}
                        placeholder={placeholder}
                        form={form}
                        defaultValue={defaultValue}
                        {...register(name)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }: any) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </Label>
            )
        case 'select':
            return (
                <Label htmlFor={`select-${label}`}>
                    {label && label}
                    <select
                        form={form}
                        id={`select-${label}`}
                        {...register(name)}
                    >
                        {options?.length &&
                            options.map((option) => (
                                <option
                                    value={option.value}
                                    key={option.id}
                                >
                                    {option.label}
                                </option>
                            ))}
                    </select>
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }: any) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </Label>
            )
        case 'textarea':
            return (
                <Label
                    className="flex flex-col gap-2"
                    htmlFor={`input-${label}`}
                >
                    {label && label}
                    <Textarea
                        form={form}
                        id={`input-${label}`}
                        placeholder={placeholder}
                        {...register(name)}
                        rows={lines}
                        defaultValue={defaultValue}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }: any) => (
                            <p className="text-red-400 mt-2">
                                {message === 'Required' ? '' : message}
                            </p>
                        )}
                    />
                </Label>
            )
            defualt: return <></>   
    }
}

export default FormGenerator