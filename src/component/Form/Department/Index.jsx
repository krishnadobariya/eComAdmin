import React, { useEffect, useState } from 'react'
import { AddDepartmentType } from '../../../store/Action/AddData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';






const Index = ({ dispatch, res }) => {

  const [Department, SetDepartment] = useState({
    name: "",
    location: ""
  })



  const handleInput = (e) => {
    const { name, value } = e.target
    SetDepartment({ ...Department, [name]: value })

  }
  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(AddDepartmentType(Department));

  };


  useEffect(() => {

    const data = res.data ? res.data.data : []
    if (data) {
      if (data.code == 201) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,

        });
        setTimeout(() => {
          window.location = "/departmenttable"
        }, 1000);


      }
      else if (data.code == 500) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(() => {
          window.location = "/departmemt"
        }, 1000);

      }
      else if (data.code == 403) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(() => {
          window.location = "/departmemt"
        }, 1000);

      }
    }
  }, [res])
  return (
    <div style={{ width: "100%" }}>
      <div className='container-fluid py-5'>
        <div className='row px-0  py-5 d-flex justify-content-center  '>
          <ToastContainer />
          <div className='col-md-6'>
            <div className='add-link'><Link to="/departmenttable" >VIEW</Link></div>
            <h1 className='text-center add-title py-4'>ADD DEPARTMENT</h1>
            <form className='add-form'>
              <div className="form-group">
                <label>Department Name</label>
                <input type="text"
                  className="form-control"
                  name="name"
                  value={Department.name}
                  onChange={handleInput} autoComplete="off"/>
              </div>
            
              <button type="submit" className="btn add-btn" onClick={handleAdd}>ADD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  res: state.AddDepartmentType,

});

export default connect(mapStateToProps)(Index);