import Section from '@/components/section-label/SectionLabel'
import React from 'react'
import FormGenerator from '../form-generator/FormGenerator'


const GreetingsMessage = ({
    message,
    register,
    errors,
}: GreetingMessageProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Section
                label="Greeting message"
                message="Customize your welcome message"
            />
            <div className="lg:w-[500px]">
                <FormGenerator
                    placeholder={message}
                    inputType="textarea"
                    lines={2}
                    register={register}
                    errors={errors}
                    name="welcomeMessage"
                    type="text"
                />
            </div>
        </div>
    )
}

export default GreetingsMessage