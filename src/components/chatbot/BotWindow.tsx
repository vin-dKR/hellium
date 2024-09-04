import React, { forwardRef } from 'react'

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
            <div>BotWindow</div>
        )
    }
)
export default BotWindow