import Image from 'next/image'
import { Button } from '../ui/button'


const HomePage = () => {
    return (
        <div>
            <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
                <span className="relative inline-block px-4 py-2 text-sm text-white">
                    <span className="absolute inset-0 rounded-full border-2 border-orange bg-opacity-0"></span>
                    <span className="relative z-10">✨ An AI powered sales assistant chatbot</span>
                </span>
                <Image
                    src="/images/logo-hero.svg"
                    width={400}
                    height={100}
                    alt="Logo"
                    className="max-w-lg object-contain"
                />
                <p className="text-center max-w-[500px]">
                    Your AI powered sales assistant! Embed Corinna AI into any website
                    with just a snippet of code!
                </p>
                <Button className="bg-orange font-bold text-white px-4">
                    Start For Free
                </Button>
                <Image
                    src="/images/iphonecorinna.png"
                    width={260}
                    height={100}
                    alt="Logo"
                    className="max-w-lg object-contain"
                />
            </div>

            <div className="flex justify-center items-center flex-col gap-4 mt-10">
                <h2 className="text-4xl text-center"> Choose what fits you right</h2>
                <p className="text-muted-foreground text-center max-w-lg">
                    Our straightforward pricing plans are tailored to meet your needs. If
                    {" you're"} not ready to commit you can get started for free.
                </p>
            </div>
        </div>
    )
}

export default HomePage