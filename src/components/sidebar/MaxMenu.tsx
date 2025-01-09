import { SIDE_BAR_MENU } from '@/constants/menu';
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import MenuItem from './MenuItems';
import DomainMenu from './DomainMenu';
import { useTheme } from 'next-themes';

const MaxMenu = ({ current, domains, onExpand, onSignOut }: MaxMenuProps) => {
    const { theme } = useTheme()
    let isDark = theme === "dark"
  return (
    <div className='py-3 px-4 flex flex-col h-full z-[100]'>
      <div className='flex justify-between items-center'>
        <Image
          src={ isDark ?  '/images/Logo.svg' : '/images/Dark-logo.svg'}
          alt='LlOGO'
          sizes='100vw'
          className='animate-fade-in opacity-0 delay-300 fill-mode-forwards'
          style={{
            width: '50%',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
        <Menu
          className='cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards'
          onClick={onExpand}
        />
      </div>
      <div className='animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10'>
        <div className='flex flex-col'>
          <p className='text-xs text-gray-500 mb-3'>MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size='max' {...menu} key={key} current={current} />
          ))}
          <DomainMenu domains={domains} />
        </div>
        <div className='flex flex-col'>
          <p className='text-xs text-gray-500 mb-3'>OPTIONS</p>
          <MenuItem
            size='max'
            label='Sign out'
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size='max'
            label='Mobile App'
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  );
};

export default MaxMenu;
