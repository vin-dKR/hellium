import SectionLabel from '@/components/section-label/SectionLabel'
import UploadButton from '@/components/upload-button/UploadBtn'
import { BotIcon } from '@/icons/bot-icon'
import Image from 'next/image'
import React from 'react'


const EditChatBotIcon = ({ register, errors, chatBot }: EditChatBotIconProps) => {
    return (
        <div className="py-5 flex flex-col gap-5 items-start">
            <SectionLabel
                label="Edit Image"
                message="Change the icon for the chatbot."
            />
            <UploadButton
                label='Edit Icon'
                register={register}
                errors={errors}
            />
            {chatBot?.icon ? (
                <div className='rounded-full overflow-hidden'>
                    <Image
                        src={`https://ucarecdn.com/${chatBot.icon}`}
                        alt='bot'
                        width={80}
                        height={80}
                    />
                </div>
            ) : (
                <div className="rounded-full cursor-pointer shadow-md w-20 h-20 flex items-center justify-center bg-grandis">
                    <BotIcon />
                </div>
            )}
        </div>
    )
}

export default EditChatBotIcon