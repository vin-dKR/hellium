import SignInFormProvider from '@/components/forms/sign-in/FormProvider';
import LoginForm from '@/components/forms/sign-in/LoginForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
  return (
    <div className='flex-1 py-36 md:px-16 w-full'>
      <div className='flex flex-col h-full gap-3'>
        <SignInFormProvider>
          <div className='flex flex-col gap-3'>
            <LoginForm />
            <div className='w-full flex flex-col gap-3 items-center'>
              <Button type='submit' className='bg-brown w-full hover:bg-orange'>
                Submit
              </Button>
              <p className='text-iridium'>
                Don’t have an account?{' '}
                <Link href='/auth/sign-up' className='font-bold'>
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
