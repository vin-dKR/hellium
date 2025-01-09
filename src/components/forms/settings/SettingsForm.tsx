'use client'

import { useSettings } from '@/hooks/settings/useSettings'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import DomainUpdate from './DomainUpdate'
import CodeSnippet from './CodeSnippet'
import EditChatBotIcon from './EditChatBotIcon'
import PremiumBadge from '@/icons/premium-badge'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader/Loader'


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
        <>
            <form onSubmit={onUpdateSettings} className='flex flex-col gap-8 pb-10 px-1'>
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
                        <div className="flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold dark:bg-brown">
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
                            <WelcomeMessage
                                message={chatBot?.welcomeMessage!}
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <div className="col-span-1 relative">
                            <Image
                                src="/images/bot-ui.png"
                                className="sticky top-0"
                                alt="bot-ui"
                                width={530}
                                height={769}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="flex gap-5 justify-start">
                        <Button
                            onClick={onDeleteDomain}
                            variant="destructive"
                            type="button"
                            className="px-10 h-[50px]"
                        >
                            <Loader loading={deleting}>Delete Domain</Loader>
                        </Button>
                        <Button
                            type="submit"
                            className="w-[100px] h-[50px] dark:text-brown"
                        >
                            <Loader loading={loading}>Save</Loader>
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SettingsForm
