import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const TabsMenu = ({ triggers, children, className, btn }: TabsMenuProps) => {
    return (
        <>
            <Tabs
                defaultValue={triggers[0].label}
                className="w-full"
            >
                <TabsList className={cn('pr-1', className)}>
                    {triggers.map((trigger, key) => (
                        <TabsTrigger
                            key={key}
                            value={trigger.label}
                            className="capitalize flex gap-1 font-semibold p-2 md:px-3"
                        >
                            {trigger.icon && trigger.icon}
                            {trigger.label}
                        </TabsTrigger>
                    ))}
                    {btn}
                </TabsList>
                {children}
            </Tabs>
        </>
    )
}

export default TabsMenu
