'use client'
import { useChatbot } from '@/hooks/chat-bot/useChatbot'
import React from 'react'
import BotWindow from './BotWindow'


const AiChatbot = () => {
    const {
        onOpenChatBot,
        botOpened,
        onChats,
        register,
        onStartChatting,
        onAiTyping,
        messageWindowRef,
        currentBot,
        loading,
        onRealTime,
        setOnChats,
        errors,
    } = useChatbot()
    return (
        <div className="h-screen flex flex-col justify-end items-end gap-4">
            {botOpened && (
                <BotWindow
                    errors={errors}
                    setChat={setOnChats}
                    realtimeMode={onRealTime}
                    helpdesk={currentBot?.helpdesk!}
                    domainName={currentBot?.name!}
                    ref={messageWindowRef}
                    help={currentBot?.chatBot?.helpdesk}
                    theme={currentBot?.chatBot?.background}
                    textColor={currentBot?.chatBot?.textColor}
                    chats={onChats}
                    register={register}
                    onChat={onStartChatting}
                    onResponding={onAiTyping}
                />
            )}
        </div>
    )
}

export default AiChatbot