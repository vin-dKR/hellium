import React from 'react'
import UserTypeCard from './UserTypeCard'

const TypeSelectionForm = ({ register, setUserType, userType }: TypeSelectionProps) => {
    return (
        <>
            <h2 className='text-gravel md:text-4xl font-bold'>Create an Account</h2>
            <p className='text-iridium md: text-sm'>Tell us about yourself! What you do? Let&apos;s tailor your
                <br />experience so ti best suits you
            </p>
            <UserTypeCard
                text="Setting up my account for my company."
                value="owner"
                title="I own a business"
                userType={userType}
                register={register}
                setUserType={setUserType}
            />
            <UserTypeCard
                text="Looking to learn about the tool."
                value="student"
                title="I am a student"
                userType={userType}
                register={register}
                setUserType={setUserType}
            />
        </>
    )
}

export default TypeSelectionForm
