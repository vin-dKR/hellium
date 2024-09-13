import { onGetAllDomainBookingsForCurrentUser } from '@/actions/appointment'
import { currentUser } from '@clerk/nextjs'
import React from 'react'


const Page = async () => {
    const user = await currentUser()

    if (!user) return null

    const booking = await onGetAllDomainBookingsForCurrentUser(user.id)
    return (
        <div>page</div>
    )
}

export default Page