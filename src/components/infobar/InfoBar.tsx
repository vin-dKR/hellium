'use client';

import React from 'react';
import BreadCrump from './BreadCrump';
import { SignedIn, UserButton } from '@clerk/nextjs';

const InfoBar = () => {
  return (
    <div className='flex w-full justify-between items-center py-1 mb-8'>
      <BreadCrump />
      <div className='flex gap-3 items-center'>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default InfoBar;
