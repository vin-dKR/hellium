import { onGetAllAccountDomains } from '@/actions/settings'
import ConversationMenu from '@/components/conversation/ConversationMenu'
import Messenger from '@/components/conversation/Messenger'
import InfoBar from '@/components/infobar/InfoBar'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'


const ConversationPage = async () => {
    const result = await onGetAllAccountDomains()
    const domains = result && 'domains' in result ? result.domains : undefined

    return (
        <div className='w-full h-full flex'>
            <ConversationMenu domains={domains} />
            <Separator orientation='vertical' />
            <div className="w-full h-full flex flex-col">
                <div className="px-5">
                    <InfoBar />
                </div>
                <Messenger/>
            </div>
        </div>
    )
}

export default ConversationPage