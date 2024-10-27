import { onGetSubsPlan } from '@/actions/settings'
import React from 'react'
import SectionLabel from '../section-label/SectionLabel'
import { Card, CardContent, CardDescription } from '../ui/card'
import { CheckCircle2, Plus } from 'lucide-react'
import { pricingCards } from '@/constants/pricing'
import Modal from '../modal/Modal'
import SubscriptionForm from '../forms/settings/SubscriptionForm'

const BillingSettings = async () => {

  const plan = await onGetSubsPlan()
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features

  if (!planFeatures) return

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
      <div className="lg:col-span-1">
        <SectionLabel
          label="Billing settings"
          message="Add payment information, upgrade and modify your plan." />
      </div>
      <div className="lg:col-span-2 flex justify-start lg:justify-center ">
        <Modal
          title="Choose a plan."
          description="Tell us about yourself! What you do? Let’s tailor your experience so it best suits you."
          trigger={
            <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
              <CardContent className="flex gap-2 items-center">
                <div className="rounded-full border-2 p-1">
                  <Plus className="text-gray-400" />
                </div>
                <CardDescription className="font-semibold">
                  Upgrade Plan
                </CardDescription>
              </CardContent>
            </Card>
          }>
          <SubscriptionForm plan={plan!} />
        </Modal>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-lg mb-2 font-semibold">Current Paln</h3>
        <p className="text-sm font-semibold mb-2">{plan}</p>
        <div className='flex flex-col gap-2'>
          {planFeatures.map((feature) => (
            <div
              key={feature}
              className='flex gap-2'
            >
              <CheckCircle2 className='text-muted-foreground' />
              <p className='text-muted-foreground'>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BillingSettings
