'use client';

import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import React from 'react';

const UserTypeCard = ({
  text,
  value,
  title,
  userType,
  register,
  setUserType,
}: UserTypeCardProps) => {
  return (
    <Label htmlFor={value} className=''>
      <Card
        className={cn(
          'w-full cursor-pointer',
          userType == value && 'border-orange',
        )}
      >
        <CardContent className='flex justify-between p-2 bg-brown rounded-md'>
          <div className='flex items-center gap-3'>
            <Card
              className={cn(
                'flex justify-center p-3',
                userType == value && 'border-orange',
              )}
            >
              <User
                size={30}
                className={cn(
                  userType == value ? 'text-orange' : 'text-gray-400',
                )}
              />
            </Card>
            <div className=''>
              <CardDescription className='text-gray-100'>
                {title}
              </CardDescription>
              <CardDescription className='text-gray-400'>
                {text}
              </CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                'w-4 h-4 rounded-full',
                userType == value ? 'bg-orange' : 'bg-transparent',
              )}
            >
              <Input
                {...register('type', {
                  onChange: (event) => setUserType(event.target.value),
                })}
                value={value}
                id={value}
                className='hidden'
                type='radio'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
