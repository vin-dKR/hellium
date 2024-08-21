'use server'

import { onGetSubsPlan } from '@/actions/settings'
import React from 'react'
import SectionLabel from '../section-label/SectionLabel'

const BillingSettings = async () => {
  const plan = await onGetSubsPlan()

  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
      <div className="lg:col-span-1">
        <SectionLabel
          label="abcksdjf kljdf"
          message="hey hii" />
      </div>
    </div>
  )
}

export default BillingSettings