import { onGetDomainChatRooms } from "@/actions/conversation"
import { useChatContext } from "@/context/useChatContext"
import { ConversationSearchSchema } from "@/schemas/conversation.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export const useConversation = () => {
    const { register, watch } = useForm({
        resolver: zodResolver(ConversationSearchSchema),
        mode: 'onChange'
    })

    const { setLoading: loadMessages, setChatRoom, setChats } = useChatContext()
    const [loading, setLoading] = useState<boolean>(false)

    const [chatRooms, setChatRooms] = useState<
        {
            chatRoom: {
                id: string
                createdAt: Date
                message: {
                    message: string
                    createdAt: Date
                    seen: boolean
                }[]
            }[]
            email: string | null
        }[]
    >([])


    useEffect(() => {
        const search = watch(async (value) => {
            setLoading(true)
            try {
                const rooms = await onGetDomainChatRooms(value.domain)
                if (rooms && 'customer' in rooms) {
                    setChatRooms(rooms.customer)
                } else {
                    console.error('Unexpected response format:', rooms)
                }
            } catch (error) {
                console.log(error)
            }
        })
        return () => search.unsubscribe()
    }, [watch])
}