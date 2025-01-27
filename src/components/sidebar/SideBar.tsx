'use client';

import useSideBar from '@/hooks/side-bar/useSideBar';
import { cn } from '@/lib/utils';
import React from 'react';
import MaxMenu from './MaxMenu';
import { MinMenu } from './MinMenu';

const SideBar = ({ domains }: SidebarProps) => {
  const { expand, onExpand, page, onSignOut } = useSideBar();

  return (
    <div
      className={cn(
        'bg-cream dark:bg-brown h-full fill-mode-forwards fixed md:relative z-50',
        expand == undefined && '',
        expand == true
          ? 'animate-open-sidebar'
          : expand == false && 'animate-close-sidebar',
      )}
    >
      {expand ? (
        <MaxMenu
          current={page!}
          domains={domains}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          current={page!}
          domains={domains}
          onShrink={onExpand}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
};

export default SideBar;
