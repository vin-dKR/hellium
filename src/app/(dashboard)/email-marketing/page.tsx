import { onGetAllCampaigns, onGetAllCustomer } from '@/actions/mail'
import EmailMarketing from '@/components/email-marketing/EmailMarketing'
import InfoBar from '@/components/infobar/InfoBar'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    const user = await currentUser()
    if (!user) return null

    const customer = await onGetAllCustomer(user.id)
    const campaign = await onGetAllCampaigns(user.id)

    return (
        <div>
            <InfoBar />
            <EmailMarketing
                campaign={campaign?.campaign!}
                subscription={customer?.subscription!}
                domains={customer?.domains!}
            />
        </div>
    )
}

export default Page