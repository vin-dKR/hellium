import { PortalBanner } from '@/components/portal/PortalBanner'
import React from 'react'


const Layout = ({ children }: Props) => {
  return (
    <div>
      <PortalBanner />
      <div className="container flex justify-center flex-1 h-0 mt-12">{children}</div>
    </div>
  )
}

export default Layout