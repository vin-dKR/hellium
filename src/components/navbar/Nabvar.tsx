"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function NavBar() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className='flex gap-5 justify-between items-center px-7 py-2 font-bold border-b border-solid border-orange leading-[154.5%] max-md:flex-wrap max-md:px-5'>
      <div className='flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700'>
        <Image
          src={isDark ? '/images/logo.svg' : '/images/Dark-logo.svg'}
          alt='LOGO'
          sizes='100vw'
          style={{
            width: '150px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
      </div>
      <div className='relative border border-orange rounded-full p-3 hidden md:flex '>
        <span className='absolute justify-self-center self-center w-[98%] h-[94%] inset-0 rounded-full bg-brown bg-opacity-60 backdrop-blur-md z-0' />

        <ul className='relative gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-300 max-md:flex-wrap max-md:max-w-full font-normal md:flex z-[10]'>
          <li>Home</li>
          <li>Pricing</li>
          <li>News Room</li>
          <li>Features</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='flex w-[150px] justify-end'>
        <Link
          href='/dashboard'
          className='bg-theme-gradient px-4 py-1.5 rounded-sm text-brown'
        >
          Free Trial
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
