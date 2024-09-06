import React, { forwardRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import RealTimeMode from './RealTimeMode'
import Image from 'next/image'
import TabsMenu from '../tabs/TabsMenu'
import { BOT_TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import { Separator } from '../ui/separator'
import Bubble from './Bubble'
import { Responding } from './Responding'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Paperclip, Send } from 'lucide-react'
import { Label } from '../ui/label'
import { CardDescription, CardTitle } from '../ui/card'
import Accordion from '../accordion/Accordion'

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
                                Sales Rep - Hellium
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
                    <div className="relative w-16 h-16">
                        <Image
                            src="https://ucarecdn.com/019dd17d-b69b-4dea-a16b-60e0f25de1e9/propuser.png"
                            fill
                            alt="users"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <TabsMenu
                    triggers={BOT_TABS_MENU}
                    className=" bg-transparent border-[1px] border-border m-2"
                >
                    <TabsContent value="chat">
                        <Separator orientation="horizontal" />
                        <div className="flex flex-col h-full">
                            <div
                                style={{
                                    background: theme || '',
                                    color: textColor || '',
                                }}
                                className="px-3 flex h-[400px] flex-col py-5 gap-3 chat-window overflow-y-auto"
                                ref={ref}
                            >
                                {chats.map((chat, key) => (
                                    <Bubble
                                        key={key}
                                        message={chat}
                                    />
                                ))}
                                {onResponding && <Responding />}
                            </div>
                            <form
                                onSubmit={onChat}
                                className="flex px-3 py-1 flex-col flex-1 bg-porcelain"
                            >
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="upload">
                                        <Paperclip />
                                        <Input
                                            {...register('image')}
                                            type="file"
                                            id="upload"
                                            className="hidden"
                                        />
                                    </Label>
                                    <Input
                                        {...register('content')}
                                        placeholder="Type your message..."
                                        className="focus-visible:ring-0 flex-1 focus-visible:ring-offset-0 bg-porcelain rounded-none outline-none border-none pl-2"
                                    />
                                    <Button
                                        type="submit"
                                    >
                                        <Send />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </TabsContent>

                    <TabsContent value="helpdesk">
                        <div className="h-[485px] overflow-y-auto overflow-x-hidden p-4 flex flex-col gap-4">
                            <div>
                                <CardTitle>Help Desk</CardTitle>
                                <CardDescription>
                                    Browse from a list of questions people usually ask.
                                </CardDescription>
                            </div>
                            <Separator orientation="horizontal" />

                            {helpdesk.map((desk) => (
                                <Accordion
                                    key={desk.id}
                                    trigger={desk.question}
                                    content={desk.answer}
                                />
                            ))}
                        </div>
                    </TabsContent>
                </TabsMenu>
            </div>
        )
    }
)
export default BotWindow