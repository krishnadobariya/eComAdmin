import React from 'react'
import Index from '../../../component/Form/Categorytype/Index'
import Header from '../../../component/layout/Header'
import Sidebar from '../../../component/layout/Sidebar'
const CategoryType = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <Sidebar/>
      <Index />
    </div>
  )
}

export default CategoryType
