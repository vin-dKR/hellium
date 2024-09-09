import { onBookNewAppointment } from '@/actions/appointment'
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

    const onBookAppointment = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const booked = await onBookNewAppointment(
                values.slot,
                values.date,
                customerId,
                domainId,
                email
            )

            if (booked && booked.status === 200) {
                toast({
                    title: 'Sucess',
                    description: booked.message
                })
                setStep(3)
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    })

    const onSelectedTimeSlot = (slot: string) => setSelectedSlot(slot)

    return {
        step,
        onNext,
        onPrev,
        register,
        errors,
        date,
        setDate,
        onBookAppointment,
        onSelectedTimeSlot,
        selectedSlot,
        loading,
    }
}

export default usePortal