import React from 'react'
import Index from '../../../component/Form/Outward/Index'
import Header from '../../../component/layout/Header'
import Sidebar from '../../../component/layout/Sidebar'
const  Outward= () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
   <Sidebar/>
      <Index/>
    </div>
  )
}

export default Outward