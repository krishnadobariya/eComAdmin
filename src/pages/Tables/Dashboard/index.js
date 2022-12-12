import React from 'react'
import Index from '../../../component/Dashboard'
import Sidebar from '../../../component/layout/Sidebar'

function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default Dashboard