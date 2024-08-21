'use server'

import React, { createContext, useContext, useState } from 'react'

const ChatInitialValues: ChatInitialValuesProps = {
    chatRoom: undefined,
    setChatRoom: () => undefined,
    chats: [],
    setChats: () => undefined,
    loading: false,
    setLoading: () => undefined,
    realtime: false,
    setRealtime: () => undefined,
}

const chatContext = createContext(ChatInitialValues)
const { Provider } = chatContext

export const ChatProvider = ({ children }: Props) => {
    const [chats, setChats] = useState(ChatInitialValues.chats)
    const [loading, setLoading] = useState(ChatInitialValues.loading)
    const [chatRoom, setChatRoom] = useState(ChatInitialValues.chatRoom)
    const [realtime, setRealtime] = useState(ChatInitialValues.realtime)

    const values = {
        chats,
        setChats,
        loading,
        setLoading,
        chatRoom,
        setChatRoom,
        realtime,
        setRealtime,
    }
    return <Provider value={values}>{children}</Provider>
}

export const useChatContext = () => {
    const state = useContext(chatContext)
    return state
}