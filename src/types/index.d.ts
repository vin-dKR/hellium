import { ReactNode } from 'react';

declare global {
    type Props = {
        children: ReactNode;
    };

    type InitialValuesProps = {
        currentStep: number
        setCurrentStep: Dispatch<SetStateAction<number>>
    }
}