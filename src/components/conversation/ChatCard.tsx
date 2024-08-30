'use client'

// import { useChatTime } from '@/hooks/conversation/useConversation'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { User } from 'lucide-react'

type ChatCardProps = {
    title: string
    description?: string
    createdAt: Date
    id: string
    onChat(): void
    seen?: boolean
}

const ChatCard = ({
    title,
    description,
    createdAt,
    onChat,
    id,
    seen,
}: ChatCardProps) => {
    // const { messageSentAt, urgent } = useChatTime(createdAt, id)

    return (
        <Card
            onClick={onChat}
            className="rounded-none border-r-0 hover:bg-muted cursor-pointer transition duration-150 ease-in-out">
            <CardContent className="py-4 flex gap-3">
                <div>
                    <Avatar>
                        <AvatarFallback className="bg-muted">
                            <User />
                        </AvatarFallback>
                    </Avatar>
                </div>
            </CardContent>
        </Card>
    )
}

export default ChatCard