import { onLoginUser } from '@/actions/auth'
import SideBar from '@/components/sidebar/SideBar'
import { ChatProvider } from '@/context/useChatContext'
import React from 'react'

const layout = async ({ children }: Props) => {

  const authenticated = await onLoginUser()
  if (!authenticated) return null

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={authenticated.domain} />
        <div className="w-full flex flex-col pl-20 pr-6 md:pl-4 z-0">
          {children}
        </div>
      </div>
    </ChatProvider>
  )
}

export default layout