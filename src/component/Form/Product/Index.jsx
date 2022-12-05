import React, { useEffect, useState } from 'react'
import { AddProduct } from '../../../store/Action/AddData'
import { AllCategoryView, AllSubCategoryView, TypeView } from '../../../store/Action/FetchData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ dispatch, res, view, viewsub, type }) => {

  const [Product, SetProduct] = useState({
    Name: "",
    Category: "",
    Sub_Category: "",
    Type: "",
    QTY: "",
    Price: "",
    Unit: "",
    Remark: "",
  })



  const handleInput = (e) => {

    const { name, value } = e.target
    SetProduct({ ...Product, [name]: value })
    if (e.target.name === 'Category') {
       const category = e.target.value;
        console.log(category)
      dispatch(AllSubCategoryView(category))
     
    }
 
    if (e.target.name === 'Sub_Category') {
      const Subcategory = e.target.value;
      dispatch(TypeView(Subcategory))
      
    }
  }
  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(AddProduct(Product));
  };

  useEffect(() => {
    dispatch(AllCategoryView())
  }, [])


  
  useEffect(() => {
    console.log(res)
    const data = res.data ? res.data.data : []
    if (data) {
      if (data.code == 201){
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
          
        });
        
        setTimeout(()=>{
          window.location="/viewproduct"
      }, 1000);
      }
      else if(data.code==500)
      {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(()=>{
          window.location="/product"
      }, 1000);
      }
      else if(data.code==403)
      {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(()=>{
          window.location="/product"
      }, 1000);
      }
    }
  },[res])

  const data = view.data ? view.data.data ? view.data.data.data : [] : []


  const viewSub = viewsub.data ? viewsub.data.data ? viewsub.data.data.data : [] : []

  

  const typeview = type.data ? type.data.data ? type.data.data.data : [] : []


  return (

    <div className="main-header">
      <div className='container-fluid'>
        <div className='row px-0  py-5 d-flex justify-content-center '>
          <ToastContainer/>
          <div className='col-md-10'>
            <h1 className='text-center add-title'>PRODUCT</h1>
            <form className='add-form'>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" name="Name" value={Product.Name} onChange={handleInput} />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Category</label>
                
                  <select name="Category" className="form-control" id="" onChange={handleInput} value={Product.Category}  >
                  <option>choose category</option>
                    {
                      data ?
                      data.map((val, id) => {
                        return (
                          <option value={val.cat_name} key={id}>{val.cat_name}</option>
                        )
                      }) : <option >Loding...</option>
                    }
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label>Sub Category</label>
                  <select name="Sub_Category" className="form-control" id="" onChange={handleInput} value={Product.Sub_Category}  >
                  <option>choose subcategory</option>
                    {
                      viewSub ?
                      viewSub.map((val, id) => {
                        return (
                          <option value={val.subCat_name} key={id}>{val.subCat_name}</option>
                        )
                      }) :  <option >Loding...</option>
                    }
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label>Sub Category</label>
                  <select name="Type" className="form-control" id="" onChange={handleInput} value={Product.Type}  >
                  <option>choose type</option>
                    {
                      typeview ?
                      typeview.map((val, id) => {
                        return (
                          <option value={val.name} key={id}>{val.name}</option>
                        )
                      }) :  <option >Loding...</option>
                    }
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>QTY</label>
                  <input type="text" className="form-control" name="QTY" value={Product.QTY} onChange={handleInput} />
                </div>
                <div className="form-group col-md-6">
                  <label>Price</label>
                  <input type="text" className="form-control" name="Price" value={Product.Price} onChange={handleInput} />
                </div>
              </div>
             
                <div className="form-group">
                  <label>Unit</label>
                  <input type="text" className="form-control" name="Unit" value={Product.Unit} onChange={handleInput} />
                </div>
              
              <div className="form-group">
                <label>Remark</label>
                <textarea type="text" className="form-control" name="Remark" rows="3" value={Product.Remark} onChange={handleInput} />
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
  res: state.AddProduct,
  view: state.AllCategoryView,
  viewsub: state.AllSubCategoryView,
  type: state.TypeView

});

export default connect(mapStateToProps)(Index);
