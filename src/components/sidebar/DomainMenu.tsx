import { cn } from '@/lib/utils';
import React from 'react';
import { Plus } from 'lucide-react';
import { Loader } from '../loader/Loader';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useDomain } from '@/hooks/side-bar/useDomain';
import AppDrawer from '../drawer/Drawer';
import UploadButton from '../upload-button/UploadBtn';
import FormGenerator from '../forms/form-generator/FormGenerator';

const DomainMenu = ({ domains, min }: DomainMenuProps) => {
  const { register, onAddDomain, loading, errors, isDomain } = useDomain();

  return (
    <div
      className={cn('flex flex-col gap-3', min ? 'items-center mt-6' : 'mt-3')}
    >
      <div className='flex justify-between w-full items-center justify-center'>
        {!min && <p className='text-xs text-gray-500'>DOMAINS</p>}
        <AppDrawer
          description='add in your domain address to integrate your chatbot'
          title='Add your business domain'
          onOpen={
            <div className='relative flex justify-center items-center cursor-pointer text-gray-500 rounded-full border-2 w-8 h-8'>
              <Plus className='m-auto' />
            </div>
          }
        >
          <Loader loading={loading}>
            <form
              className='mt-3 w-6/12 flex flex-col gap-3'
              onSubmit={onAddDomain}
            >
              <FormGenerator
                inputType='input'
                register={register}
                label='Domain'
                name='domain'
                errors={errors}
                placeholder='mydomain.com'
                type='text'
              />
              <UploadButton
                register={register}
                label='Upload Icon'
                errors={errors}
              />
              <Button type='submit' className='w-full'>
                Add Domain
              </Button>
            </form>
          </Loader>
        </AppDrawer>
      </div>
      <div className='flex flex-col gap-1 text-ironside font-medium'>
        {domains &&
          domains.map((domain) => (
            <Link
              href={`/settings/${domain.name.split('.')[0]}`}
              key={domain.id}
              className={cn(
                'flex gap-3 rounded-full transition duration-100 ease-in-out cursor-pointer ',
                !min ? 'p-1 h-[30px] ' : 'w-[30px] h-[30px]',
                domain.name.split('.')[0] == isDomain && 'bg-white',
              )}
            >
              <Image
                src={`https://ucarecdn.com/${domain.icon}/`}
                alt='logo'
                width={30}
                height={30}
                className='rounded-full object-cover'
                layout='intrinsic'
              />
              {!min && <p className='text-sm'>{domain.name}</p>}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DomainMenu;
