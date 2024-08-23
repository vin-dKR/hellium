"use client"

import { useThemeMode } from '@/hooks/settings/useSettings'
import React from 'react'
import SectionLabel from '../section-label/SectionLabel'
import { SystemMode } from '../themes/SystemMode'
import { cn } from '@/lib/utils'
import { LightMode } from '../themes/LightMode'
import { DarkMode } from '../themes/DarkMode'

const DarkModeToggle = () => {
    const { setTheme, theme } = useThemeMode()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
                <SectionLabel
                    label="Interface Theme"
                    message="Select or customize your UI theme "
                />
            </div>
            <div className="lg:col-span-4 flex lg:flex-row flex-col items-start gap-5">
                <div
                    className={cn(
                        'rounded-[16px] overflow-hidden cursor-pointer border-4 border-transparent',
                        theme == 'system' && 'border-orange'
                    )}
                    onClick={() => setTheme('system')}
                >
                    <SystemMode />
                </div>
                <div
                    className={cn(
                        'rounded-[16px] overflow-hidden cursor-pointer border-4 border-transparent',
                        theme == 'light' && 'border-orange'
                    )}
                    onClick={() => setTheme('light')}
                >
                    <LightMode />
                </div>
                <div
                    className={cn(
                        'rounded-[16px] overflow-hidden cursor-pointer border-4 border-transparent',
                        theme == 'dark' && 'border-orange'
                    )}
                    onClick={() => setTheme('dark')}
                >
                    <DarkMode />
                </div>
            </div>
        </div>
    )
}

export default DarkModeToggle