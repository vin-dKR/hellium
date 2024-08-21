import { onLoginUser } from '@/actions/auth'
import React from 'react'

const layout = async (props: Props) => {
    const authenticatedUser = await onLoginUser()
    if(!authenticatedUser) return null
  return (
    <div>
      ownlayout
    </div>
  )
}

export default layout