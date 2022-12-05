import React, { useEffect, useState } from 'react'
import { AddCategoryType } from '../../../store/Action/AddData'
import { AllCategoryView, AllSubCategoryView } from '../../../store/Action/FetchData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Index = ({ dispatch, res, view, viewsub }) => {

  const [CategoryType, SetCategoryType] = useState({
    name: "",
    catType_description: "",
    select_subcat: ""
  })



  useEffect(() => {
    dispatch(AllCategoryView());
  }, [])
  const handleInput = (e) => {
   
    const { name, value } = e.target
    SetCategoryType({ ...CategoryType, [name]: value })
    if (e.target.name === 'category') {
      const category = e.target.value;
       console.log(category)
     dispatch(AllSubCategoryView(category))
    
   }

  }

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("data..............", CategoryType)
    dispatch(AddCategoryType(CategoryType));
  };



  const data = view.data ? view.data.data ? view.data.data.data : [] : []


  const viewSub = viewsub.data ? viewsub.data.data ? viewsub.data.data.data : [] : []




  useEffect(() => {
    console.log(".......",res)
    const data = res.data ? res.data.data : []
    if (data) {
      if (data.code == 201){
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
          
        });
        setTimeout(()=>{
          window.location="/viewtype"
      }, 1000);
        
       
      }
      else if(data.code==500)
      {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(()=>{
          window.location="/categorytype"
      }, 1000);
 
      }
      else if(data.code==403)
      {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(()=>{
          window.location="/categorytype"
      }, 1000);
 
      }
    }
  },[res])
  return (

    <div className="main-header">
      <div className='container-fluid py-5'>
        <div className='row px-0  py-5 d-flex justify-content-center '>
          <ToastContainer/>
          <div className='col-md-9'>
            <h1 className='text-center add-title py-4'>PRODUCT CATEGORY TYPE</h1>
            <form className='add-form'>
              <div className="form-group">
                <label>CategoryType</label>
                <input type="text"
                  className="form-control"
                  name="name"
                  value={CategoryType.name}
                  onChange={handleInput} />
              </div>
              <div className="form-group">
                <label>Type Description</label>
                <input type="text"
                  className="form-control"
                  name="catType_description"
                  value={CategoryType.catType_description}
                  onChange={handleInput} />
              </div>
              <div className="form-group category-select">
                <label>Category</label>
                <select name="category" className="form-control" id="" onChange={handleInput}  >

                  <option>Choose a Category</option>
                  {
                    data.map((val, id) => {
                      return (
                        <option value={val.cat_name} key={id}>{val.cat_name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="form-group">
                <label>Select Subcategory</label>
                <select name="select_subcat" className="form-control" id="" onChange={handleInput} value={CategoryType.select_subcat}  >
                  <option>Choose a Subcategory</option>
                  {
                    viewSub ?
                    viewSub.map((val, id) => {
                      return (
                        <option value={val.subCat_name} key={id}>{val.subCat_name}</option>
                      )
                    }) : <option>no data found</option>
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
  res: state.AddCategoryType,
  view: state.AllCategoryView,
  viewsub: state.AllSubCategoryView,
});

export default connect(mapStateToProps)(Index);
