import React from 'react'
import Header from '../../../component/layout/Header'
import Sidebar from '../../../component/layout/Sidebar'
import Index from '../../../component/Tables/Category/Index'

const CategoryTable = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <Sidebar/>
      <Index/>
      
    </div>
  )
}

export default CategoryTable
