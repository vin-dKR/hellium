'use client'
import { useChatbot } from '@/hooks/chat-bot/useChatbot'
import React from 'react'
import BotWindow from './BotWindow'
import Image from 'next/image'
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
        <div className="h-screen flex flex-col justify-end items-end gap-4 md:pr-4 pr-2 pb-2 md:pb-4">
            {botOpened && (
                <BotWindow
                    className="w-2/3 h-[85vh] md:w-[400px] md:h-[600px] fixed bottom-22 right-0 md:bottom-24 md:right-6"
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
                        className="object-contain"
                    />
                ) : (
                    <Image
                        src='/images/Big Logo.svg'
                        alt='big-logo.com'
                        width={60}
                        height={60}
                        className='bg-transparent'
                        style={{ width: 'auto', height: 'auto' }}
                        priority
                    />
                )}
            </div>
        </div>
    )
}

export default AiChatbot