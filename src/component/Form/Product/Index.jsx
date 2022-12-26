import React, { useEffect, useState } from 'react'
import { AddProduct } from '../../../store/Action/AddData'
import { AllCategoryView, AllSubCategoryView, TypeView } from '../../../store/Action/FetchData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Index = ({ dispatch, res, view, viewsub, type }) => {
  const unit = ['cm', 'mtr', "kg", "gm", "pic", "box", "liter"]
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

    const data = res.data ? res.data.data : []
    console.log("data::", data)
    if (data) {
      if (data.code == 201) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,

        });

        setTimeout(() => {
          window.location = "/viewproduct"
        }, 1000);
      }
      else if (data.code == 500) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(() => {
          window.location = "/product"
        }, 1000);
      }
      else if (data.code == 403) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(() => {
          window.location = "/product"
        }, 1000);
      }
    }
  }, [res])

  const data = view.data ? view.data.data ? view.data.data.data : [] : []
  // const viewSub = viewsub.data ? viewsub.data.data ? viewsub.data.data.data : [] : []
  // const typeview = type.data ? type.data.data ? type.data.data.data : [] : []


  return (

    <div style={{ width: "100%" }}>
      <div className='container-fluid'>
        <div className='row px-0  py-3 d-flex justify-content-center '>
          <ToastContainer />
          <div className='col-md-5'>
            <div className='add-link'><Link to="/viewproduct" >VIEW</Link></div>
            <h1 className='text-center add-title'>PRODUCT</h1>
            <form className='add-form'>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" name="Name" value={Product.Name} onChange={handleInput} autoComplete="off" />
              </div>
              <div className="form-group ">
                <label>Item Department</label>

                <select name="Category" className="form-control" id="" onChange={handleInput} value={Product.Category}  >
                  <option>Choose Item Department</option>
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
              {/* <div className="form-group ">
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
              
                <div className="form-group ">
                  <label>Type</label>
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
             */}
              <div className="form-group ">
                <label>Quantity</label>
                <input type="text" className="form-control" name="QTY" value={Product.QTY} onChange={handleInput} autoComplete="off" />
              </div>
              <div className="form-group ">
                <label>Price</label>
                <input type="text" className="form-control" name="Price" value={Product.Price} onChange={handleInput} autoComplete="off" />
              </div>
              <div className="form-group">
                <label>Unit</label>
                <select name="Unit" className="form-control" id="" onChange={handleInput} value={Product.Unit}  >
                  <option>choose Unit</option>
                  {
                    unit ?
                      unit.map((val, id) => {
                        return (
                          <option value={val} key={id}>{val}</option>
                        )
                      }) : <option >Data Not Found</option>
                  }
                </select>
              </div>

              <div className="form-group">
                <label>Remark</label>
                <textarea type="text" className="form-control" name="Remark" rows="3" value={Product.Remark} onChange={handleInput} autoComplete="off" />
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
