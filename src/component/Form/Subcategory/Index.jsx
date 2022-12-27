import React, { useEffect, useState } from 'react'
import { AddSubCategory, } from '../../../store/Action/AddData'
import { AllCategoryView } from '../../../store/Action/FetchData'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Index = ({ dispatch, res,addres }) => {

  const [SubCategory, SetSubCategory] = useState({
    subCat_name: "",
    subCat_description: "",
    select_cat: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    SetSubCategory({ ...SubCategory, [name]: value })

  }
  const handleAdd = (e) => {
    e.preventDefault();
  
    dispatch(AddSubCategory(SubCategory));
  };


  useEffect(() => {
    dispatch(AllCategoryView())
  }, [])
  const data = res.data ? res.data.data ? res.data.data.data : [] : []



  useEffect(() => {
   
    const data = addres.data ? addres.data.data : []
    if (data) {
      if (data.code == 201){
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
          
        });
        setTimeout(()=>{
          window.location="/viewsubcategory"
      }, 1000);
      }
      else if(data.code==500)
      {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
  
        setTimeout(()=>{
          window.location="/subcategory"
      }, 1000);
      }
      else if(data.code==403)
      {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
  
        setTimeout(()=>{
          window.location="/subcategory"
      }, 1000);
      }
    }
  },[addres])


  return (

    <div  style={{width:"100%"}}>
      <div className='container-fluid py-5'>
        <div className='row px-0  py-5 d-flex justify-content-center '>
        <ToastContainer />
          <div className='col-md-6'>
          <div className='add-link'><Link to="/viewsubcategory" >VIEW</Link></div>
            <h1 className='text-center add-title py-4'>MAIN PRODUCT</h1>
            <form className='add-form'>
              <div class="form-group">
                <label>Main Product </label>
                <input type="text"
                  className="form-control"
                  name="subCat_name"
                  value={SubCategory.subCat_name}
                  onChange={handleInput} />
              </div>
           
              <div className="form-group">
              <label>Item Department</label>
                <select name="select_cat" className="form-control" id="" onChange={handleInput} value={SubCategory.select_cat}  >
                  <option>Choose Item Department</option>
                  {
                    data ?
                    data.map((val, id) => {
                      return (
                        <option value={val.cat_name} key={id}>{val.cat_name}</option>
                      )
                    }) : <option >no data found</option>
                  }
                </select>
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
  res: state.AllCategoryView,
  addres:state.AddSubCategory
});

export default connect(mapStateToProps)(Index);
