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
}