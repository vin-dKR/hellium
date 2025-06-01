import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from '../ui/drawer'

const AppDrawer = ({ children, description, onOpen, title }: AppDrawerProps) => {
    return (
        <Drawer>
            <DrawerTrigger>{onOpen}</DrawerTrigger>
            <DrawerContent>
                <div className="container flex flex-col items-center gap-2 pb-10">
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerDescription>{description}</DrawerDescription>
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default AppDrawer
