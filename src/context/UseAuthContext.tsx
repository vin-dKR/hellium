"use client"

import { useState, createContext, useContext, Dispatch, SetStateAction, ReactNode } from 'react'

const InitialValues: InitialValuesProps = {
    currentStep: 1,
    setCurrentStep: () => undefined,
}

const authContext = createContext(InitialValues)


// the code is using destructuring assignment to extract the Provider component from the authContext object.
const { Provider } = authContext


// any component that is a child of AuthContextProvider can access the currentStep and setCurrentStep values through the context.
export const AuthContextProvider = ({ children }: Props) => {
    const [currentStep, setCurrentStep] = useState<number>(InitialValues.currentStep)

    const values = {
        currentStep,
        setCurrentStep
    }

    return <Provider value={values}>{children}</Provider>
}

export const useAuthContextHook = () => {
    const state = useContext(authContext)
    return state
}