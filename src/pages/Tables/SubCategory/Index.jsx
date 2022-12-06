import React from 'react'
import Header from '../../../component/layout/Header'
import Sidebar from '../../../component/layout/Sidebar'
import Index from '../../../component/Tables/SubCategory/Index'
const SubCategoryTable = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <Sidebar />
            <Index />
        </div>
    )
}

export default SubCategoryTable
