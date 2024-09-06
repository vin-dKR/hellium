import React from 'react'
import { cn, extractUUIDFromString, getMonthName } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const Bubble = ({ message, createdAt }: BubbleProps) => {
    let d = new Date()
    const image = extractUUIDFromString(message.content)
    // console.log(message.content)

    return (
        <div
            className={cn(
                'flex gap-2 items-end',
                message.role == 'assistant' ? 'self-start' : 'self-end flex-row-reverse'
            )}
        >
            {message.role == 'assistant' ? (
                <Avatar className="w-5 h-5">
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            ) : (
                <Avatar className="w-5 h-5">
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                </Avatar>
            )}
            <div
                className={cn(
                    'flex flex-col min-w-[200px] max-w-[300px] px-2 py-1 rounded-lg shadow-lg',
                    message.role == 'assistant'
                        ? 'bg-white border border-gray-300 rounded-br-lg'
                        : 'bg-grandis border border-grandis rounded-bl-lg'
                )}
            >
                {createdAt ? (
                    <div className="flex text-xs text-gray-600 mb-2">
                        <p className="font-semibold">
                            {createdAt.getDate()} {getMonthName(createdAt.getMonth())}
                        </p>
                    </div>
                ) : null}
                {image ? (
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={`https://ucarecdn.com/${image[0]}/`}
                            fill
                            alt="image"
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <p className="text-sm text-gray-800">
                        {/* actual message */}
                        {message.content.replace('(complete)', ' ')}
                        {message.link && (
                            <Link
                                className="underline font-bold pl-2 text-blue-600 hover:text-blue-800"
                                href={message.link}
                                target="_blank"
                            >
                                Your Link
                            </Link>
                        )}
                    </p>
                )}
                <p className="text-[10px] text-gray-600 mt-0 text-right">
                    {createdAt ? (
                        `${createdAt.getHours()}:${String(createdAt.getMinutes()).padStart(2, '0')} ${createdAt.getHours() > 12 ? 'PM' : 'AM'}`
                    ) : (
                        `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')} ${d.getHours() > 12 ? 'pm' : 'am'}`
                    )}
                </p>
            </div>
        </div>
    )
}

export default Bubble