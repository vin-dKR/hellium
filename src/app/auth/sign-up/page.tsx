import SignUpFormProvider from '@/components/forms/sign-up/FormProvider'
import RegistrationFormStep from '@/components/forms/sign-up/RegistrationStep'

import React from 'react'


const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  )
}

export default SignUp