'use client'

import { onUpdatePassword } from "@/actions/settings"
import { useToast } from "@/components/ui/use-toast"
import { ChangePasswordProps, ChangePasswordSchema } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTheme } from "next-themes"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useThemeMode = () => {
    const { setTheme, theme } = useTheme()

    return {
        theme,
        setTheme
    }
}

export const useChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ChangePasswordProps>({
        resolver: zodResolver(ChangePasswordSchema),
        mode: 'onChange'
    })

    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)

    const onChangePasswordHandle = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const updated = await onUpdatePassword(values.password)
            if (updated) {
                setLoading(false)
                reset()
                toast({
                    title: 'Success',
                    description: !updated.message
                })
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Please try again!'
            })
        }
    })

    return {
        register,
        errors,
        onChangePasswordHandle,
        loading,
    }
}