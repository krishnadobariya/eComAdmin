import React from 'react'
import Sidebar from '../../component/layout/Sidebar/index'
import Index from '../../component/DatewisePrint/Index'

const DatewisePrint = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default DatewisePrint
