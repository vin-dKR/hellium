import React from 'react'
import { Spinner } from '../spinner/Spinner'
import { cn } from '@/lib/utils'

export const Loader = ({
    loading,
    children,
    noPadding,
    className,
}: LoaderProps) => {
    return loading ? (
        <div className={cn(className || 'w-full py-5 flex justify-center')}>
            <Spinner noPadding={noPadding} />
        </div>
    ) : (
        children
    )
}

