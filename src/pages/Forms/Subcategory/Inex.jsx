import React from 'react'
import Index from '../../../component/Form/Subcategory/Index'
import Sidebar from '../../../component/layout/Sidebar'

const SubCategory = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <Sidebar />
      <Index />
    </div>
  )
}

export default SubCategory
