import { onAddCustomerToEmail, onCreateMarketingCampaign, onSaveEmailTemplate } from "@/actions/mail"
import { useToast } from "@/components/ui/use-toast"
import { EmailMarketingBodySchema, EmailMarketingSchema } from "@/schemas/marketing.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useEmailMarketing = () => {
    const [isSelected, setIsSelected] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [campaignId, setCampaignId] = useState<string | undefined>()
    const [processing, setProcessing] = useState<boolean>(false)
    const [isId, setIsId] = useState<string | undefined>()
    const [editing, setEditing] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(EmailMarketingSchema)
    })

    const {
        register: registerEmail,
        handleSubmit: SubmitEmail,
        formState: { errors: emailErrors },
        setValue
    } = useForm({
        resolver: zodResolver(EmailMarketingBodySchema)
    })

    const { toast } = useToast()
    const router = useRouter()

    const onCreateCampaign = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const campaign = await onCreateMarketingCampaign(values.name)
            if (campaign) {
                reset()
                toast({
                    title: "Success",
                    description: campaign.message
                })
                setLoading(false)
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        }
    })

    const onCreateEmailTemplate = SubmitEmail(async (values) => {
        try {
            setEditing(true)
            const template = JSON.stringify(values.description)
            const emailTemplate = await onSaveEmailTemplate(template, campaignId!)

            if (emailTemplate) {
                toast({
                    title: "Success",
                    description: emailTemplate.message
                })
                setEditing(false)
            }
        } catch (error) {
            console.log(error)
        }
    })

    const onSelectCampagin = (id: string) => setCampaignId(id)

    const addCustomerToCampaign = async () => {
        try {
            setProcessing(true)
            const customerAdd = await onAddCustomerToEmail(isSelected, campaignId!)
            if (customerAdd) {
                toast({
                    title: "Success",
                    description: customerAdd.message
                })
            }
            setProcessing(false)
            setCampaignId(undefined)
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }

    const onSelectedEmail = (email: string) => {
        const duplicate = isSelected.find((e) => e === email)
        if (duplicate) {
            setIsSelected(isSelected.filter((e) => e != email))
        } else {
            setIsSelected((prev) => [...prev, email])
        }
    }

    const onBulkEmail = (email: string, campaignId: string) => {
        try {
            // WIP: SA
        } catch (error) {
            console.log(error)
        }
    }
    return {
        onCreateCampaign,
        onCreateEmailTemplate,
        onSelectCampagin,
        addCustomerToCampaign,
        onSelectedEmail
    }
}