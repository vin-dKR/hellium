import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="relative w-64 h-64 mx-auto">
                    <Image
                        src="/images/Big Logo.svg"
                        alt="404 Illustration"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Could not find the requested resource
                    </p>
                </div>

                <Button
                    variant="default"
                    className="min-w-[150px] dark:text-brown"
                    asChild
                >
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        </div>
    )
}