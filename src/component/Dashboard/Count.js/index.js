import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import {CountReport} from "../../../store/Action/FetchData"
import '../../../css/count/style.css'

function Count({ dispatch, res }) {


  useEffect(() => {
    dispatch(CountReport()); 
  
  }, [])
  const Data = res.data ? res.data.data ? res.data.data.data : " " : " "
  console.log("res", Data);





  return (
    <div style={{width:"100%"}}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 ">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><NavLink to="/">Table</NavLink></li>
                <li className="breadcrumb-item"><NavLink to="/" className="text-gray">Dashboard</NavLink> </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6 ">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>{Data.category_count}</h3>
                  <p>Total Catagory</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
               
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>{Data.department_count}</h3>
                  <p>Total Department</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
              
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>{Data.product_count}</h3>
                  <p>Total Product</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
           
              </div>
            </div>
            <div className="col-lg-3 col-6 ">
              <div className="small-box py-2">
                <div className="inner">
                  <h3>0</h3>
                  <p>Total Category</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
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