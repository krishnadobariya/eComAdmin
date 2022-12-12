import React from 'react'
import Index from '../../../component/Form/Product/Index'
import Sidebar from '../../../component/layout/Sidebar'
const Product = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default Product
