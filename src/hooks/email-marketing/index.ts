import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useEmailMarketing = () => {
    const [isSelected, setIsSelected] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [campaignId, setCampaignId] = useState<string | undefined>()
    const [processing, setProcessing] = useState<boolean>(false)
    const [isId, setIsId] = useState<string | undefined>()
    const [editing, setEditing] = useState<boolean>(false)

    const {register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(EmailMarketingSchema)
    })
}