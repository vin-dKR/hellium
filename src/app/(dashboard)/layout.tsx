import { onLoginUser } from '@/actions/auth'
import React from 'react'

const layout = async (props: Props) => {
    const authenticatedUser = await onLoginUser()
  return (
    <div>

    </div>
  )
}

export default layout