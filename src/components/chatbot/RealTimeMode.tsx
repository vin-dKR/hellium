import React from 'react'
import { Card } from '../ui/card'
import { useRealTime } from '@/hooks/chat-bot/useChatbot'


const RealTimeMode = ({ chatRoomId, setChats }: RealTimeModeProps) => {
    useRealTime(chatRoomId, setChats)

    return (
        <Card className="px-3 rounded-full py-1 bg-orange font-bold text-white text-sm">
            Real Time
        </Card>
    )
}

export default RealTimeMode