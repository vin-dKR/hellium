import React, { forwardRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

// huge perops in BotWindowProps..
const BotWindow = forwardRef<HTMLDivElement, BotWindowProps>(
    (
        {
            errors,
            register,
            chats,
            onChat,
            onResponding,
            domainName,
            helpdesk,
            realtimeMode,
            setChat,
            textColor,
            theme,
            help,
        },
        ref
    ) => {
        return (
            <div className="h-[670px] w-[450px] flex flex-col bg-white rounded-xl mr-[80px] border-[1px] overflow-hidden">
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex gap-2">
                        <Avatar className="w-20 h-20">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex items-start flex-col">
                            <h3 className="text-lg font-bold leading-none">
                                Sales Rep - Web Prodigies
                            </h3>
                            <p className="text-sm">{domainName.split('.com')[0]}</p>
                            {realtimeMode?.mode && (
                                <RealTimeMode
                                    setChats={setChat}
                                    chatRoomId={realtimeMode.chatroom}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
export default BotWindow