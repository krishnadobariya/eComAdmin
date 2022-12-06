import React from 'react'
import Index from '../../../component/Form/Category/Index'
import Header from '../../../component/layout/Header'
import Sidebar from '../../../component/layout/Sidebar'
const Category = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <Sidebar/>
      <Index/>
    </div>
  )
}

export default Category
