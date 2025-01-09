import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  size: 'max' | 'min';
  label: string;
  icon: JSX.Element;
  path?: string;
  current?: string;
  onSignOut?(): void;
};

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'flex items-center gap-2 px-1 py-2 rounded-lg my-1',
            !current
              ? 'text-gray-500 stroke-yellow-500'
              : current == path
                ? 'bg-white font-bold text-black'
                : 'text-gray-500 fill-gray-500',
          )}
          href={path ? `/${path}` : '#'}
        >
            <span
                className={cn(
                    !current
                    ? 'text-gray-500'
                    : current == path
                    ? 'text-black dark:text-black'
                    : 'text-gray-500'
                )}
            >
                {icon}
            </span>
          {label}
        </Link>
      );
    case 'min':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            !current
              ? 'text-gray-500'
              : current == path
                ? 'bg-white font-bold text-black'
                : 'text-gray-500',
            'rounded-lg py-2 px-2 my-1',
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon}
        </Link>
      );
    default:
      return null;
  }
};

export default MenuItem;
