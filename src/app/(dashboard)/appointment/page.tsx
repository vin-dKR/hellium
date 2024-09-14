import { onGetAllDomainBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointment from '@/components/appointment/AllAppointment'
import InfoBar from '@/components/infobar/InfoBar'
import { currentUser } from '@clerk/nextjs'
import React from 'react'


const Page = async () => {
    const user = await currentUser()

    if (!user) return null

    const domainBookings = await onGetAllDomainBookingsForCurrentUser(user.id)
    const date = new Date()

    return (
        <>
            <InfoBar />
            <div className='grid grid-cols-1 lg: grid-cols-3 flex-1 h-0 gap-5'>
                <div className="lg:col-span-2 overflow-y-auto">
                    <AllAppointment bookings={domainBookings?.bookings} />
                </div>
            </div>
        </>
    )
}

export default Page