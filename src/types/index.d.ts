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

    type ModalProps = {
        trigger: React.ReactNode
        children: React.ReactNode
        title: string
        description: string
        type?: 'Integration'
        logo?: string
    }

    type SubscriptionFormProps = {
        plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
    }

    type SubscriptionCardProps = {
        title: string
        description: string
        price: string
        onPayment(payment: string): void
        payment: string
        id: string
    }

    type DomainSettingProps = { params: { domain: string } }

    type SettingsFormProps = {
        id: string
        name: string
        plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
        chatBot: {
            id: string
            icon: string | null
            welcomeMessage: string | null
        } | null
    }

    type DomainUpdateProps = {
        name: string
        register: UseFormRegister<FieldValues>
        errors: FieldErrors<FieldValues>
    }

    type CodeSnippetProps = {
        id: string
    }

    type EditChatBotIconProps = {
        register: UseFormRegister<FieldValues>
        errors: FieldErrors<FieldValues>
        chatBot: {
            id: string
            icon: string | null
            welcomeMessage: string | null
        } | null
    }

    type GreetingMessageProps = {
        message: string
        register: UseFormRegister<FieldValues>
        errors: FieldErrors<FieldValues>
    }

    type BotTrainingFormProps = {
        id: string
    }

    type TabsMenuProps = {
        triggers: {
            label: string
            icon?: JSX.Element
        }[]
        children: React.ReactNode
        className?: string
        button?: JSX.Element
    }

    type AccordionProps = {
        trigger: string
        content: string
    }

    type ConversationPageProps = {
        domains?:
        | {
            name: string,
            id: string,
            icon: string,
        }[]
        | undefined
    }

    type ConversationSearchProps = {
        register: UseFormRegister<FieldValues>
        domains?:
        | {
            name: string
            id: string
            icon: string
        }[]
        | undefined
    }

    type ChatCardProps = {
        title: string
        description?: string
        createdAt: Date
        id: string
        onChat(): void
        seen?: boolean
    }

    type ChatCardProps = {
        title: string
        description?: string
        createdAt: Date
        id: string
        onChat(): void
        seen?: boolean
    }

    type BubbleProps = {
        message: {
            role: 'assistant' | 'user'
            content: string
            link?: string
        }
        createdAt?: Date
    }

    type BotWindowProps = {
        errors: any
        register: UseFormRegister<ChatBotMessageProps>
        chats: { role: 'assistant' | 'user'; content: string; link?: string }[]
        onChat(): void
        onResponding: boolean
        domainName: string
        theme?: string | null
        textColor?: string | null
        help?: boolean
        realtimeMode:
        | {
            chatroom: string
            mode: boolean
        }
        | undefined
        helpdesk: {
            id: string
            question: string
            answer: string
            domainId: string | null
        }[]
        setChat: React.Dispatch<
            React.SetStateAction<
                {
                    role: 'user' | 'assistant'
                    content: string
                    link?: string | undefined
                }[]
            >
        >
    }

    type RealTimeModeProps = {
        chatRoomId: string
        setChats: React.Dispatch<
            React.SetStateAction<
                {
                    role: 'user' | 'assistant'
                    content: string
                    link?: string | undefined
                }[]
            >
        >
    }

    type CustomerSignUpFormProps = {
        params: {
            domainid: string;
            customerid: string
        }
    }

    type PortalFormProps = {
        questions: {
            id: string
            question: string
            answered: string | null
        }[]
        type: 'Appointment' | 'Payment'
        customerId: string
        domainid: string
        email: string
        bookings?:
        | {
            date: Date
            slot: string
        }[]
        | undefined
        products?:
        | {
            name: string
            image: string
            price: number
        }[]
        | undefined
        amount?: number
        stripeId?: string
    }

    type PortalStepsProps = {
        questions: {
            id: string
            question: string
            answered: string | null
        }[]
        type: 'Appointment' | 'Payment'
        register: UseFormRegister<FieldValues>
        error: FieldErrors<FieldValues>
        onNext(): void
        step: number
        date: Date | undefined
        onBooking: React.Dispatch<React.SetStateAction<Date | undefined>>
        onBack(): void
        onSlot(slot: string): void
        slot?: string
        loading: boolean
        bookings?:
        | {
            date: Date
            slot: string
        }[]
        | undefined
        products?:
        | {
            name: string
            image: string
            price: number
        }[]
        | undefined
        amount?: number
        stripeId?: string
    }

    type QuestionsFormProps = {
        questions: {
            id: string
            question: string
            answered: string | null
        }[]
        register: UseFormRegister<FieldValues>
        error: FieldErrors<FieldValues>
        onNext(): void
    }

    type BookAppointmentDateProps = {
        date: Date | undefined
        onBooking: React.Dispatch<React.SetStateAction<Date | undefined>>
        onBack(): void
        register: UseFormRegister<FieldValues>
        onSlot(slot: string): void
        currentSlot?: string
        loading: boolean
        bookings:
        | {
            date: Date
            slot: string
        }[]
        | undefined
    }

    type CustomerPaymentFormProps = {
        onNext(): void
    }

    type AllAppointmentProps = {
        bookings:
        | {
            Customer: {
                Domain: {
                    name: string
                } | null
            } | null
            id: string
            email: string
            domainId: string | null
            date: Date
            slot: string
            createdAt: Date
        }[]
        | undefined
    }

    type DataTableProps = {
        headers: string[]
        children: React.ReactNode
    }

    type IntegrationListProps = {
        connections: {
            strip: boolean
        }
    }

    type IntegrationTriggersProps = {
        name: 'stripe',
        logo: string,
        title: string,
        description: string,
        connections: {
            [key in 'stripe']: boolean
        }
    }

    type ModalBodyProps = {
        type: string,
        connection: {
            [key in 'stripe']: boolean
        }
    }
}