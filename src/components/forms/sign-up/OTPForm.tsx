
import OTPInput from '@/components/otp/OTP'
import React from 'react'

const OTPForm = ({ otp, setOtp }: OTPProps) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-iridium md:text-sm">
        Enter the one time password that was sent to your email.
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput
          otp={otp}
          setOtp={setOtp}
        />
      </div>
    </>
  )
}

export default OTPForm