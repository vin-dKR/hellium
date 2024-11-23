'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="relative w-64 h-64 mx-auto">
                    <Image
                        src="/images/error.svg"
                        alt="Error Illustration"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        {error.message || "We're sorry, but something went wrong. Please try again."}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={reset}
                        variant="default"
                        className="min-w-[150px] dark:text-brown"
                    >
                        Try Again
                    </Button>
                    <Button
                        variant="outline"
                        className="min-w-[150px] dark:text-brown"
                        asChild
                    >
                        <Link href="/">
                            Go Home
                        </Link>
                    </Button>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <p className="text-sm font-mono text-left text-gray-700 dark:text-gray-300">
                            {error.stack}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}