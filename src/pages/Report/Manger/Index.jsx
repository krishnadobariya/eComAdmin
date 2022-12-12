import React from 'react'
import Sidebar from '../../../component/layout/Sidebar'
import Index from '../../../component/Report/Manager/Index'
const Manager = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default Manager