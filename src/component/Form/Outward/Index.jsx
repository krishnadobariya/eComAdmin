import React, { useEffect, useState } from 'react'
import { ViewAllDepartment ,AllProductView} from '../../../store/Action/FetchData'
import { AddOutward } from '../../../store/Action/AddData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const Index = ({ dispatch, res, view ,respro}) => {

    const [outward, SetOutward] = useState({
        department: "",
        product_name: "",
        QTY: "",
        remark: "",
    })


    const handleInput = (e) => {
        const { name, value } = e.target
        SetOutward({ ...outward, [name]: value })

    }
    const handleAdd = (e) => {
        e.preventDefault();
        console.log("data..............", outward)
        dispatch(AddOutward(outward));
    };

   
    useEffect(() => {
        dispatch(ViewAllDepartment());
        dispatch(AllProductView());


    }, []);


    const data = view.data ? view.data.data ? view.data.data.data : [] : []
   

    const proName = respro.data ? respro.data.data ? respro.data.data.data : [] : []


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
                window.location="/outwardtable"
            }, 1000);
           
          }
          else if(data.code==500)
          {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
            setTimeout(()=>{
                window.location="/outward"
            }, 1000);
     
          }
          else if(data.code==403)
          {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
            setTimeout(()=>{
                window.location="/outward"
            }, 1000);
     
          }
          else if(data.code==404)
          {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
     
          }
        }
      },[res])
    return (
        <div  style={{width:"100%"}}>
            <div className='container-fluid py-5'>
                <div className='row px-0  py-5 d-flex justify-content-center  '>
                    <ToastContainer/>
                    <div className='col-md-9'>
                    <div className='add-link'><Link to="/outwardtable" >VIEW</Link></div>
                        <h1 className='text-center add-title py-4'>ADD OUTWARD</h1>
                        <form className='add-form'>
                            <div className="form-group">
                                <label>Department Name</label>
                                <select name="department" className="form-control" id="" onChange={handleInput} value={outward.department}  >
                                    <option>choose Department</option>
                                    {
                                        data ?
                                        data.map((val, id) => {
                                                return (
                                                    <option value={val.name} key={id}>{val.name}</option>
                                                )
                                            }) : <option >Loding...</option>
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Product Name</label>
                                
                                     <select name="product_name" className="form-control" id="" onChange={handleInput} value={outward.product_name} >
                                    <option>choose Outward</option>
                                    {
                                        proName ?
                                        proName.map((val, id) => {
                                                return (
                                                    <option value={val.Name} key={id}>{val.Name}</option>
                                                )
                                            }) : <option >Loding...</option>
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Quaintity</label>
                                <input type="text"
                                    className="form-control"
                                    name="QTY"
                                    value={outward.QTY}
                                    onChange={handleInput} />
                            </div>
                            <div className="form-group">
                                <label>Remark</label>
                                <input type="text"
                                    className="form-control"
                                    name="remark"
                                    value={outward.remark}
                                    onChange={handleInput} />
                            </div>
                            <button type="submit" className="btn add-btn" onClick={handleAdd}>ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    res: state.AddOutward,
    view: state.ViewAllDepartment,
    respro:state.AllProductView

});

export default connect(mapStateToProps)(Index);