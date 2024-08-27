'use client'

import { useSettings } from '@/hooks/settings/useSettings'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import DomainUpdate from './DomainUpdate'
import CodeSnippet from './CodeSnippet'
import EditChatBotIcon from './EditChatBotIcon'
import PremiumBadge from '@/icons/premium-badge'
import dynamic from 'next/dynamic'


const WelcomeMessage = dynamic(
    () => import('./GreetingMessage').then((props) => props.default),
    {
        ssr: false,
    }
)


const SettingsForm = ({ id, name, chatBot, plan }: SettingsFormProps) => {
    const {
        register,
        onUpdateSettings,
        errors,
        onDeleteDomain,
        deleting,
        loading
    } = useSettings(id)

    return (
        <form onSubmit={onUpdateSettings} className='flex flex-col gap-8 pb-10'>
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-2xl">Domain Settings</h2>
                <Separator orientation="horizontal" />
                <DomainUpdate
                    name={name}
                    register={register}
                    errors={errors}
                />
                <CodeSnippet id={id} />
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <div className="flex gap-4 items-center">
                    <h2 className="font-bold text-2xl">Chatbot Settings</h2>
                    <div className="flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold">
                        <PremiumBadge />
                        Premium
                    </div>
                </div>
                <Separator orientation="horizontal" />
                <div className="grid md:grid-cols-2">
                    <div className="col-span-1 flex flex-col gap-5 order-last md:order-first">
                        <EditChatBotIcon
                            chatBot={chatBot}
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <WelcomeMessage
                            message={chatBot?.welcomeMessage!}
                            register={register}
                            errors={errors}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SettingsForm