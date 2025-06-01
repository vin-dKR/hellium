'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();
    const handleSubmit = () => {
        router.push('/dashboard');
    };
    return (
        <div className='mt-60'>
            <div className='flex items-center justify-center flex-col mt-[80px] gap-4 '>
                <span className='relative inline-block px-4 py-2 text-sm text-white'>
                    <span className='absolute inset-0 rounded-full bg-theme-gradient' />
                    <span className='absolute justify-self-center self-center w-[99%] h-[94%] inset-0 rounded-full bg-brown bg-opacity-60 backdrop-blur-md' />
                    <span className='relative z-10'>
                        ✨ An AI powered sales assistant chatbot
                    </span>
                </span>
                <Image
                    src='/images/logo-hero.svg'
                    width={500}
                    height={100}
                    alt='Logo'
                    className='max-w-2xl object-contain mt-10'
                />
                <p className='text-center text-xl max-w-[500px]'>
                    Your AI powered sales assistant! Embed Hellium AI into any website
                    with just a snippet of code!
                </p>
                <Button
                    onClick={handleSubmit}
                    className='bg-theme-gradient font-bold text-black px-4'
                >
                    Start For Free
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
