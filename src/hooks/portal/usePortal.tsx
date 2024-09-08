import { useToast } from '@/components/ui/use-toast'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const usePortal = (
    customerId: string,
    domainId: string,
    email: string
) => {
    const {
        register,
        setValue,
        formState: { errors },
        handleSubmit
    } = useForm()
    const { toast } = useToast()
    const [step, setStep] = useState<number>(1)
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedSlot, setSelectedSlot] = useState<string | undefined>('')
    const [loading, setLoading] = useState<boolean>(false)

    setValue('date', date)

    const onNext = () => setStep((prev) => prev + 1)
    const onPrev = () => setStep((prev) => prev - 1)

    const onBookingAppointmenmt = handleSubmit(async (values) => {
        try {
            setLoading(true)
            // SA: onBookNewAppointment actions
        } catch (error) {
            console.log(error)
        }
    })






    return {

    }
}

export default usePortal