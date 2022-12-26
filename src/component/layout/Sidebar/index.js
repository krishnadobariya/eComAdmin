import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import '../../../css/Sidebar/style.css'
import {
  CDBSidebar,
  CDBSidebarHeader,
} from 'cdbreact';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Cookies from 'js-cookie';
import BusinessIcon from '@mui/icons-material/Business';
import ReportIcon from '@mui/icons-material/Report';


function Sidebar() {
  const logout = () => {

    Cookies.remove('jwt')
    window.location = "/"

  }

  return (
    <>
      <CDBSidebar className=".gradient-custom-2">
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
            <li className="nav-item has-treeview menu-open">
              <NavLink to="/departmenttable" className="nav-link  text-white ">
                <BusinessIcon className='nav-icon' />
                <p>  Department</p>
              </NavLink>
            </li>
            <li className="nav-item has-treeview menu-open">
              <NavLink to="/Locationtable" className="nav-link  text-white ">
                <BusinessIcon className='nav-icon' />
                <p> Location</p>
              </NavLink>
            </li>
            <li className="nav-item has-treeview">
              <div className="nav-link text-white">
                <i className="nav-icon far fa-plus-square" />
                <p>
                  Inward
                  <i className="fas fa-angle-left right" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/viewcategory" className="nav-link text-white">
                    <p>Item Department</p>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink to="/viewsubcategory" className="nav-link text-white">
                    <p>SubCategory</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/viewtype" className="nav-link text-white">
                    <p>Type</p>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/viewproduct" className="nav-link text-white">
                    <p>Product</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <NavLink to="/outwardtable" className="nav-link  text-white ">
              <ArrowOutwardIcon className='nav-icon' />
              <p>Outward</p>
            </NavLink>


            <li className="nav-item has-treeview">
              <div className="nav-link text-white">
                <ReportIcon className='nav-icon' />
                <p>
                  Report
                  <i className="fas fa-angle-left right" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/datewise" className="nav-link text-white">
                    <p>Date Wise</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/departmentwise" className="nav-link text-white">
                    <p>Department</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/outward-report" className="nav-link text-white">
                    <p>Outward</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/finish-product" className="nav-link text-white">
                    <p>Finish Product</p>
                  </NavLink>
                </li>

              </ul>
            </li>
            <li className="nav-item has-treeview menu-open mt-auto">
              <NavLink to="/" className="nav-link  text-white " onClick={logout}>
                <LogoutIcon className='nav-icon' />
                <p>Log out</p>
              </NavLink >

            </li>
          </ul>
        </nav>


      </CDBSidebar>
    </>
  )
}

export default Sidebar