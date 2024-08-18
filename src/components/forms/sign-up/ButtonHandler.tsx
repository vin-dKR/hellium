'use client'

import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/context/UseAuthContext'
import { useSignUpForm } from '@/hooks/sign-up/useSignUp'
import Link from 'next/link'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useToast } from "@/components/ui/use-toast"


function ButtonHandler() {
  const { currentStep, setCurrentStep } = useAuthContextHook()
  const { formState, getFieldState, getValues } = useFormContext()
  const { onGenerateOTP } = useSignUpForm()

  const { isDirty: isName } = getFieldState('fullname', formState)
  const { isDirty: isEmail } = getFieldState('email', formState)
  const { isDirty: isPassword } = getFieldState('password', formState)
  const { isDirty: isPasswordConfirm } = getFieldState('confirmPassword', formState)

  const { toast } = useToast()

  if (currentStep === 3) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          onClick={() => {
            console.log("Create an account button clicked");
          }}
        >
          Create an account
        </Button>
        <p>
          Already have an account?
          <Link
            href="/auth/sign-in"
            className="font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    )
  }


  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full"
          {...(isName &&
            isEmail &&
            isPassword &&
            isPasswordConfirm && {
            onClick: () => {
              if (getValues('password') === getValues('confirmPassword')) {
                onGenerateOTP(
                  getValues('email'),
                  getValues('password'),
                  setCurrentStep
                );
              } else {
                toast({
                  variant: "destructive",
                  title: 'Error',
                  description: "Passwords do not match",
                  className: "bg-red-600 text-white w-full p-4 shadow-lg",

                })
              }
            }
          })}
          disabled={!(isName && isEmail && isPassword === isPasswordConfirm)}
        >
          Continue
        </Button>
        <p>
          Already have an account?{' '}
          <Link
            href="/auth/sign-in"
            className="font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    )
  }


  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Button
        type="submit"
        className="w-full"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
      >
        Continue
      </Button>
      <p>
        Already have an account?{' '}
        <Link
          href="/auth/sign-in"
          className="font-bold"
        >
          Sign In
        </Link>
      </p>
    </div>
  )
}

export default ButtonHandler