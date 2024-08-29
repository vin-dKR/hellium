import InfoBar from '@/components/infobar/InfoBar'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

type Props = {}

const ConversationPage = (props: Props) => {
    return (
        <div className='w-full h-full flex'>
            <Separator orientation='vertical' />
            <div className="w-full h-full flex flex-col">
                <div className="px-5">
                    <InfoBar />
                </div>
            </div>
        </div>
    )
}

export default ConversationPage