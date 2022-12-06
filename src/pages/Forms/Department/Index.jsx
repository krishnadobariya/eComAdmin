import React from 'react'
import Index from '../../../component/Form/Department/Index'
import Header from '../../../component/layout/Header'
import Sidebar from '../../../component/layout/Sidebar'
const  Department= () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
   <Sidebar/>
      <Index/>
    </div>
  )
}

export default Department