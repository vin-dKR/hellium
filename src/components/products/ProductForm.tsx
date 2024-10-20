'use client'

import { useProducts } from "@/hooks/settings/useSettings"
import FormGenerator from "../forms/form-generator/FormGenerator"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { UploadIcon } from "lucide-react"
import { ErrorMessage } from "@hookform/error-message"
import { Button } from "../ui/button"
import { Loader } from '@/components/loader/Loader'

const CreateProductForm = ({ id }: IdProps) => {
    const { onCreateNewProduct, register, errors, loading } = useProducts(id)
    return (
        <form
            className="mt-3 w-full flex flex-col gap-5 py-10"
            onSubmit={onCreateNewProduct}
        >
            <FormGenerator
                inputType="input"
                register={register}
                label="Name"
                name="name"
                errors={errors}
                placeholder="Your product name"
                type="text"
            />
            <div className="flex flex-col items-start">
                <Label
                    htmlFor="upload-product"
                    className="flex gap-2 p-3 rounded-lg bg-peach text-gray-600 cursor-pointer font-semibold text-sm items-center"
                >
                    <Input
                        {...register('image')}
                        className="hidden"
                        type="file"
                        id="upload-product"
                    />
                    <UploadIcon />
                    Upload
                </Label>
                <ErrorMessage
                    errors={errors}
                    name="image"
                    render={({ message }) => (
                        <p className="text-red-400 mt-2">
                            {message === 'Required' ? '' : message}
                        </p>
                    )}
                />
            </div>
            <FormGenerator
                inputType="input"
                register={register}
                label="Price"
                name="price"
                errors={errors}
                placeholder="0.00"
                type="text"
            />
            <Button
                type="submit"
                className="w-full"
            >
                <Loader loading={loading}>Create Product</Loader>
            </Button>
        </form >
    )
}

export default CreateProductForm