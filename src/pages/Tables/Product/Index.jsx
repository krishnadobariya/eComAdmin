import React, { useEffect } from 'react'
import Index from '../../../component/Tables/Product/Index'
import Sidebar from '../../../component/layout/Sidebar'

const ProductTable = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default ProductTable
