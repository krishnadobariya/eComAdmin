import React, { useEffect } from 'react'
import Index from '../../../component/Tables/ProductList/Index'
import Sidebar from '../../../component/layout/Sidebar'

const ProductList = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default ProductList
