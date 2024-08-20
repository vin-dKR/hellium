'use client'

import { onGetSubsPlan } from '@/actions/settings'
import React from 'react'

const BillingSettings = async () => {
    const plan = await onGetSubsPlan()
  return (
    <div>BillingSettings</div>
  )
}

export default BillingSettings