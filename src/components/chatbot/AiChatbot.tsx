'use client'
import { useChatbot } from '@/hooks/chat-bot/useChatbot'
import React from 'react'
import BotWindow from './BotWindow'
import Image from 'next/image'
import { BotIcon } from '@/icons/bot-icon'
import { cn } from '@/lib/utils'


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
            <div
                className={cn(
                    'rounded-full relative cursor-pointer shadow-md w-20 h-20 flex items-center justify-center',
                    loading ? 'invisible' : 'visible'
                )}
                onClick={onOpenChatBot}
            >
                {currentBot?.chatBot?.icon ? (
                    <Image
                        src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
                        alt="bot"
                        fill
                    />
                ) : (
                    <Image
                        src='/images/Big Logo.svg'
                        alt='big-logo.com'
                        width={60}
                        height={60}
                        className='bg-transparent'
                    />
                )}
            </div>
        </div>
    )
}

export default AiChatbot