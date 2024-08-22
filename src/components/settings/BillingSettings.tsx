import { onGetSubsPlan } from '@/actions/settings'
import React from 'react'
import SectionLabel from '../section-label/SectionLabel'
import { Card, CardContent, CardDescription } from '../ui/card'
import { Plus } from 'lucide-react'

const BillingSettings = async () => {
  const plan = await onGetSubsPlan()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
      <div className="lg:col-span-1">
        <SectionLabel
          label="Billing settings"
          message="Add payment information, upgrade and modify your plan." />
      </div>
      <div className="lg:col-span-2 flex justify-start lg:justify-center ">
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
      </div>
    </div>
  )
}

export default BillingSettings