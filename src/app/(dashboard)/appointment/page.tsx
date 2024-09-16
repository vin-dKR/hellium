import { onGetAllDomainBookingsForCurrentUser } from '@/actions/appointment'
import AllAppointment from '@/components/appointment/AllAppointment'
import InfoBar from '@/components/infobar/InfoBar'
import SectionLabel from '@/components/section-label/SectionLabel'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { currentUser } from '@clerk/nextjs'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'


const Page = async () => {
    const user = await currentUser()

    if (!user) return null

    const domainBookings = await onGetAllDomainBookingsForCurrentUser(user.id)
    const today = new Date()

    if (!domainBookings)
        return (
            <div className="w-full flex justify-center">
                <p>No Appointments</p>
            </div>
        )

    const bookingsExistToday = domainBookings.bookings.filter((booking) => {
        booking.date.getDate() === today.getDate()
    })

    return (
        <>
            <InfoBar />
            <div className='grid grid-cols-1 lg: grid-cols-3 flex-1 h-0 gap-5'>
                <div className="lg:col-span-2 overflow-y-auto">
                    <AllAppointment bookings={domainBookings?.bookings} />
                </div>
                <div className="col-span-1">
                    <SectionLabel
                        label="Bookings For Today"
                        message="All your bookings for today are mentioned below."
                    />
                    {bookingsExistToday.length ? (
                        bookingsExistToday.map((booking) => (
                            <Card
                                key={booking.id}
                                className="rounded-xl overflow-hidden mt-4"
                            >
                                <CardContent className="p-0 flex">
                                    <div className="w-4/12 text-xl bg-peach py-10 flex justify-center items-center font-bold">
                                        {booking.slot}
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <div className="flex justify-between w-full p-3">
                                            <p className="text-sm">
                                                created
                                                <br />
                                                {booking.createdAt.getHours()}{' '}
                                                {booking.createdAt.getMinutes()}{' '}
                                                {booking.createdAt.getHours() > 12 ? 'PM' : 'AM'}
                                            </p>
                                            <p className="text-sm">
                                                Domain <br />
                                                {booking.Customer?.Domain?.name}
                                            </p>
                                        </div>
                                        <Separator orientation="horizontal" />
                                        <div className="w-full flex items-center p-3 gap-2">
                                            <Avatar>
                                                <AvatarFallback>{booking.email[0]}</AvatarFallback>
                                            </Avatar>
                                            <p className="text-sm">{booking.email}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="w-full flex justify-center">
                            <p>No Appointments For Today</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Page