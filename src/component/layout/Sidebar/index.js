import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../css/Sidebar/style.css'
import {
  CDBSidebar,
  CDBSidebarHeader,
} from 'cdbreact';



function Sidebar() {
  const [toggle, setToggle] = useState(true)
  console.log(toggle)
  return (


    <>
      
      <CDBSidebar  className=".gradient-custom-2">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
           E-COM
          </a>
        </CDBSidebarHeader>

        <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item has-treeview menu-open">
                  <NavLink to="/dashboard" className="nav-link  text-white ">
                    <i className="nav-icon fas fa-tachometer-alt" />
                  <p>  Dashboard</p>
                  </NavLink>

                </li>
                <li className="nav-item has-treeview">
                  <div className="nav-link   text-white">
                    <i className="nav-icon fas fa-book" />
                    <p>
                      Forms
                      <i className="fas fa-angle-left right" />
                    </p>
                  </div>
                  <ul className="nav nav-treeview">
                    <li className="nav-item ">
                      <NavLink to="/category" className="nav-link text-white ">
                        <p>Category</p>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/subcategory" className="nav-link text-white ">
                        <p>SubCategory</p>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/categorytype" className="nav-link text-white ">
                        <p>Type</p>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/product" className="nav-link text-white ">
                        <p >Product</p>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/departmemt" className="nav-link text-white ">
                        <p>Department</p>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/outward" className="nav-link text-white ">

                        <p>Outward</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <div className="nav-link text-white">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                      Table
                      <i className="fas fa-angle-left right" />
                    </p>
                  </div>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/viewcategory" className="nav-link text-white">
                        <p>Category</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/viewsubcategory" className="nav-link text-white">
                        <p>SubCategory</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/viewtype" className="nav-link text-white">
                        <p>Type</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/viewproduct" className="nav-link text-white">
                        <p>Product</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/departmenttable" className="nav-link text-white">
                        <p>Department</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/outwardtable" className="nav-link text-white">
                        <p>Outward</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

              </ul>
            </nav>

        
      </CDBSidebar>
    </>
  )
}

export default Sidebar