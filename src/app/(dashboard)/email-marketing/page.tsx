import { onGetAllCampaigns, onGetAllCustomer } from '@/actions/mail'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    const user = await currentUser()
    if (!user) return null

    const customer = await onGetAllCustomer(user.id)
    const campaign = await onGetAllCampaigns(user.id)

    return (
        <div>page</div>
    )
}

export default Page