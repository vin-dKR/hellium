'use client'

import { useConversation } from '@/hooks/conversation/useConversation'
import React from 'react'
import TabsMenu from '../tabs/TabsMenu'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import { Loader } from '@/components/loader/Loader'
import { CardDescription } from '../ui/card'
import { Separator } from '@radix-ui/react-separator'


const ConversationMenu = ({ domains }: ConversationPageProps) => {
    const { register, chatRooms, loading, onGetActiveChatMessages } = useConversation()

    return (
        <div className="py-3 px-0">
            <TabsMenu triggers={TABS_MENU}>
                <TabsContent value="unread">
                    {/* <ConversationSearch
                        domains={domains}
                        register={register}
                    /> */}
                    <div className="flex flex-col">
                        <Loader loading={loading}>
                            {chatRooms.length ? (
                                chatRooms.map((room) => (
                                    // <ChatCard
                                    //     seen={room.chatRoom[0].message[0]?.seen}
                                    //     id={room.chatRoom[0].id}
                                    //     onChat={() => onGetActiveChatMessages(room.chatRoom[0].id)}
                                    //     createdAt={room.chatRoom[0].message[0]?.createdAt}
                                    //     key={room.chatRoom[0].id}
                                    //     title={room.email!}
                                    //     description={room.chatRoom[0].message[0]?.message}
                                    // />
                                    <div>never mind</div>
                                ))
                            ) : (
                                <CardDescription>No chats for you domain</CardDescription>
                            )}
                        </Loader>
                    </div>
                </TabsContent>
                <TabsContent value="all">
                    <Separator
                        orientation="horizontal"
                        className="mt-5"
                    />
                    all
                </TabsContent>
                <TabsContent value="expired">
                    <Separator
                        orientation="horizontal"
                        className="mt-5"
                    />
                    expired
                </TabsContent>
                <TabsContent value="starred">
                    <Separator
                        orientation="horizontal"
                        className="mt-5"
                    />
                    starred
                </TabsContent>
            </TabsMenu>
        </div>
    )
}

export default ConversationMenu