import React, { useEffect, useState } from 'react'
import { AddCategory } from '../../../store/Action/AddData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Index = ({ dispatch, res }) => {

  const [Category, SetCategory] = useState({
    cat_name: "",
    cat_description: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    SetCategory({ ...Category, [name]: value })

  }
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("data..............", Category)
    dispatch(AddCategory(Category));

  };

  useEffect(() => {
    const data = res.data ? res.data.data : []
    console.log("res..", data)
    if (data) {
      if (data.code == 201){
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
          
        });
        setTimeout(()=>{
          window.location="/viewcategory"
      }, 1000);
        
       
      }
      else if(data.code==500)
      {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(()=>{
          window.location="/category"
      }, 1000);
      }
      else if(data.code==403)
      {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(()=>{
          window.location="/category"
      }, 1000);
 
      }
    }
   


  }, [res])

  function pageRender() {
    window.location="/dashboard"
}
function backToHome() {
    window.location="/"
}


  return (
    <div  style={{width:"100%"}}>
      <div className='container-fluid py-5'>
        <div className='row px-0  py-5 d-flex justify-content-center  '>
          <ToastContainer />
          <div className='col-md-9'>
          <div className='add-link'><Link to="/viewcategory" >VIEW</Link></div>
            <h1 className='text-center add-title py-4'>PRODUCT CATEGORY</h1>
            <form className='add-form'>
              <div className="form-group">
                <label>Category Name</label>
                <input type="text"
                  className="form-control"
                  name="cat_name"
                  value={Category.cat_name}
                  onChange={handleInput} />
              </div>
              <div className="form-group">
                <label>Discription</label>
                <input type="text"
                  className="form-control"
                  name="cat_description"
                  value={Category.cat_description}
                  onChange={handleInput} />
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
  res: state.AddCategory,
});

export default connect(mapStateToProps)(Index);
