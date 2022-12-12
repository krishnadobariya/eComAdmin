import React from 'react'
import Sidebar from '../../../component/layout/Sidebar'
import Index from '../../../component/Report/Outward/Index'
const OutwardReport = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default OutwardReport