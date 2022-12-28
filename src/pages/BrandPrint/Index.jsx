import React from 'react'
import Sidebar from '../../component/layout/Sidebar/index'
import Index from '../../component/BrandPrint/Index'

const BrandPrint = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default BrandPrint
