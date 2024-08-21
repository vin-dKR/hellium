import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

declare global {
    type Props = {
        children: ReactNode;
    };

    type InitialValuesProps = {
        currentStep: number
        setCurrentStep: Dispatch<SetStateAction<number>>
    }

    type SpinnerProps = {
        noPadding?: boolean
    }

    type LoaderProps = {
        loading: boolean
        children: React.ReactNode
        className?: string
        noPadding?: boolean
    }

    type TypeSelectionProps = {
        register: UseFormRegister<FieldValues>
        userType: 'owner' | 'student'
        setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
    }

    type UserTypeCardProps = {
        value: string
        title: string
        text: string
        register: UseFormRegister<FieldValues>
        userType: 'owner' | 'student'
        setUserType: Dispatch<SetStateAction<'owner' | 'student'>>
    }

    type UserRegistrationProps = {
        id: string
        type: 'email' | 'text' | 'password'
        inputType: 'select' | 'input'
        options?: { value: string; label: string; id: string }[]
        label?: string
        placeholder: string
        name: string
    }

    type AccountDetailFormProps = {
        register: UseFormRegister<FieldValues>
        errors: FieldErrors<FieldValues>
    }

    type FormGeneratorProps = {
        type: 'text' | 'email' | 'password'
        inputType: 'select' | 'input' | 'textarea'
        options?: { value: string; label: string; id: string }[]
        label?: string
        placeholder: string
        register: UseFormRegister<any>
        name: string
        errors: FieldErrors<FieldValues>
        lines?: number
        form?: string
        defaultValue?: string
    }

    // type OTPFormsProps = {
    //     setOTP: Dispatch<SetStateAction<string>>
    //     onOTP: string
    // }

    type OTPProps = {
        otp: string
        setOtp: Dispatch<SetStateAction<string>>
    }

    type SelectionLabel = {
        label: String
        message: String
    }
}