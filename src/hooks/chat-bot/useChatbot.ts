import { onGetCurrentChatBot } from "@/actions/chatbot"
import { postToParent } from "@/lib/utils"
import { ChatBotMessageProps, ChatBotMessageSchema } from "@/schemas/conversation.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

export const useChatbot = () => {
    const { register, handleSubmit, reset } = useForm<ChatBotMessageProps>({
        resolver: zodResolver(ChatBotMessageSchema)
    })
    const [currentBot, setCurrentBot] = useState<
        | {
            name: string
            chatBot: {
                id: string,
                icon: string | null,
                welcomeMessage: string | null,
                background: string | null,
                textColor: string | null,
                helpdesk: boolean
            } | null
            helpdesk: {
                id: string,
                question: string,
                answer: string,
                domainId: string | null
            }[]
        } | undefined
    >()

    const messageWindowRef = useRef<HTMLDivElement | null>(null)
    const [botOpened, setBotOpened] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [onAiTyping, setOnAiTyping] = useState<boolean>(false)
    const [currentBotId, setCurrentBotId] = useState<string>()
    const onOpenChatBot = () => setBotOpened((prev) => !prev)
    const [onChats, setOnChats] = useState<{
        role: 'assistant' | 'user';
        content: string;
        link?: string
    }[]
    >([])
    const [onRealTime, setOnRealTime] = useState<{
        chatroom: string;
        mode: boolean
    } | undefined
    >(undefined)

    const onScrollToBottom = () => {
        messageWindowRef.current?.scroll({
            top: messageWindowRef.current.scrollHeight,
            left: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        onScrollToBottom()
    }, [onChats, messageWindowRef])

    useEffect(() => {
        postToParent(
            JSON.stringify({
                width: botOpened ? 550 : 80,
                height: botOpened ? 800 : 80,
            })
        )
    }, [botOpened])

    // limit the number of requests made
    let limitRequest = 0

    useEffect(() => {
        window.addEventListener('message', (e) => {
            console.log(e.data)
            const botid = e.data
            if (limitRequest < 1 && typeof botid == 'string') {
                onGetDomainChatBot(botid)
                limitRequest++
            }
        })
    }, [])

    // Function to fetch and set the current chatbot based on the provided ID
    const onGetDomainChatBot = async (id: string) => {
        setCurrentBotId(id)
        const chatbot = await onGetCurrentChatBot(id)
        if (chatbot) {
            setOnChats((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: chatbot.chatBot?.welcomeMessage!,
                },
            ])
            setCurrentBot(chatbot)
            setLoading(false)
        }
    }
}