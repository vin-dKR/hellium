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

    type ChatInitialValuesProps = {
        realtime: boolean
        setRealtime: React.Dispatch<React.SetStateAction<boolean>>
        chatRoom: string | undefined
        setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>
        chats: {
            message: string
            id: string
            role: 'assistant' | 'user' | null
            createdAt: Date
            seen: boolean
        }[]
        setChats: React.Dispatch<
            React.SetStateAction<
                {
                    message: string
                    id: string
                    role: 'assistant' | 'user' | null
                    createdAt: Date
                    seen: boolean
                }[]
            >
        >
        loading: boolean
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    }

    type SidebarProps = {
        domains:
        | {
            id: string
            name: string
            icon: string
        }[]
        | null
        | undefined
    }

    type MaxMenuProps = {
        onExpand(): void
        current: string
        onSignOut(): void
        domains:
        | {
            id: string
            name: string
            icon: string | null
        }[]
        | null
        | undefined
    }

    type UploadBtnProps = {
        register: UseFormRegister<any>
        errors: FieldErrors<FieldValues>
        label: string
    }

    type AppDrawerProps = {
        onOpen: JSX.Element
        children: React.ReactNode
        title: string
        description: string
    }

    type DomainMenuProps = {
        min?: boolean
        domains:
        | {
            id: string
            name: string
            icon: string | null
        }[]
        | null
        | undefined
    }
}