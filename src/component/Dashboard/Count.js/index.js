import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { CountReport } from "../../../store/Action/FetchData"
import '../../../css/count/style.css'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIcon from '@mui/icons-material/Category';

function Count({ dispatch, res }) {


  useEffect(() => {
    dispatch(CountReport());

  }, [])

  const Data = res.data ? res.data.data ? res.data.data.data : " " : " "

  return (
    <div style={{ width: "100%" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 ">
            <div className="col-sm-6">
              <h1 className="m-0  inner">DASHBOARD</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><NavLink to="/viewproduct">Product</NavLink></li>
                <li className="breadcrumb-item"><NavLink to="/dashboard" className="text-gray">Dashboard</NavLink> </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-6 ">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>{Data.category_count}</h3>
                  <p>Total Catagory</p>
                </div>
                <div className="icon">
                  <CategoryIcon  className='mt-2'/>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>{Data.department_count}</h3>
                  <p>Total Department</p>
                </div>
                <div className="icon">
              <BusinessIcon className='mt-2'/>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>{Data.product_count}</h3>
                  <p>Total Product</p>
                </div>
                <div className="icon">
                <ProductionQuantityLimitsIcon className='mt-2'/>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}


const mapStateToProps = (state) => ({
  res: state.CountReport,

});

export default connect(mapStateToProps)(Count);