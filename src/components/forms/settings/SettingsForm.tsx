'use client'

import { useSettings } from '@/hooks/settings/useSettings'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import DomainUpdate from './DomainUpdate'

const SettingsForm = ({ id, name, chatBot, plan }: SettingsFormProps) => {
    const {
        register,
        onUpdateSettings,
        errors,
        onDeleteDomain,
        deleting,
        loading
    } = useSettings(id)

    return (
        <form onSubmit={onUpdateSettings} className='flex flex-col gap-8 pb-10'>
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-2xl">Domain Settings</h2>
                <Separator orientation="horizontal" />
                <DomainUpdate
                    name={name}
                    register={register}
                    errors={errors}
                />
            </div>
        </form>
    )
}

export default SettingsForm