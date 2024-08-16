import { ReactNode } from 'react';

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
}