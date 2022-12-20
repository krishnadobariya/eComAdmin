import React, { useEffect, useState } from 'react'
import { ViewAllDepartment, AllProductView, DeleteOutward } from '../../../store/Action/FetchData'
import { AddfullOutward } from '../../../store/Action/AddData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from 'axios';
import { Baseurl } from '../../../Baseurl';
import Cookies from 'js-cookie';
import DeleteIcon from '@mui/icons-material/Delete';
import { citylist } from '../../cityname';

const token = Cookies.get('jwt');

const Index = ({ dispatch, res, view, respro }) => {
    const [qrdata, setData] = React.useState();
    const [det, setdel] = useState(false)
    const [err, seterror] = useState("")
    const [allRes, setAllRes] = useState({});
    const [uniq,setUniq] = useState([]);
    const [outward, SetOutward] = useState({
        department: "",
        state: "",
    })
    const [a, setA] = useState([])



    const getdata = (id, data) => {

        console.log("data::", id)
        const res = axios.post(`${Baseurl}/outward/insert/${id}`, data, {
            headers: { "jwt": token }
        }).then((val) => {
            console.log("calling", val)
            setAllRes(() => ({ ...val.data }))
            toast.success(val.data.message, {
                position: toast.POSITION.TOP_CENTER,

            })
            setA([...a, val.data.data])
        })
        if (allRes.code == 404) {
            toast.error(allRes.message, {
                position: toast.POSITION.TOP_CENTER,

            });

        }
    }

    useEffect(() => {
        console.log("qrdata", qrdata)
        getdata(qrdata, outward)
    }, [qrdata])

    const handleInput = (e) => {
        console.log("hello", e.target.value)
        const { name, value } = e.target
        SetOutward({ ...outward, [name]: value })

    }
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(AddfullOutward([...a, outward]))
    };

    useEffect(() => {
        const data = res.data ? res.data.data ? res.data.data.data : "" : ""

        if (data) {
            window.location = `/prslipe/${data}`
        }
    }, [res])

    useEffect(()=>{
        const data = respro.data ? respro.data.data ? respro.data.data.data : [] : []
        console.log("data:::::::::::::::",data)
        setUniq(data)
    },[respro])

    useEffect(() => {
        dispatch(ViewAllDepartment());
        dispatch(AllProductView());
    }, []);

    const deletedemo = (id, index) => {

        if (id) {
            a.splice(index, 1)
            dispatch(DeleteOutward(id))
        }
    }
    const data = view.data ? view.data.data ? view.data.data.data : [] : []



    return (
        <div style={{ width: "100%" }}>
            <div className='container-fluid py-5'>
                <div className='row px-0   d-flex justify-content-center  '>
                    <ToastContainer />
                    <div className='add-link'><Link to="/outwardtable" >VIEW</Link></div>
                    <div className='col-md-4'>

                        <h1 className='text-center add-title py-4'>ADD OUTWARD</h1>
                        <form className='add-form'>
                            <div className="form-group">

                                <div className='form-group'>
                                    <label>scan product</label>
                                    <BarcodeScannerComponent
                                        width={400}
                                        height={400}
                                        onUpdate={(err, result) => {

                                            if (result) setData(result.text)

                                        }}
                                        onError={(err) => {
                                            seterror(err)
                                        }

                                        }
                                    />
                                </div>
                                <div className="form-group ">
                                    <label>Product Name</label>
                                    <select type="text" className="form-control" name="qrdata" value={qrdata} onChange={(e)=>setData(e.target.value)} >
                                    <option>choose product</option>
                                        {
                                            uniq ?
                                            uniq.map((val, id) => {
                                                    return (
                                                        <option value={val.uniqueKeyForProduct} key={id}>{val.uniqueKeyForProduct},{val.Name}</option>
                                                    )
                                                }) : <option >Loding...</option>
                                        }
                                        </select>
                                </div>
                                <div className="">
                                    <label>Location</label>
                                    <select name="state" className=" form-control" id="" onChange={handleInput} value={outward.state}>
                                        <option>choose state</option>
                                        {
                                            citylist ?
                                                citylist.map((val, id) => {
                                                    return (
                                                        <option value={val.city} key={id}>{val.city},{val.state}</option>
                                                    )
                                                }) : <option >Loding...</option>
                                        }
                                    </select>
                                </div>
                                <div>
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
                            </div>


                            <button type="submit" className="btn add-btn" onClick={handleAdd}>PRSLIP DOWNLOAD</button>
                        </form>

                    </div>
                    <div className='col-md-6 my-5 py-5'>
                        <table>
                            <>
                                <tr>
                                    <th>Product Name</th>
                                    <th>price</th>
                                    <th>Action</th>

                                </tr>
                                {
                                    a.map((val, id) => {
                                        return <tr>
                                            <th>{val.product_name}</th>
                                            <th>{val.total_price}</th>
                                            <th > <DeleteIcon onClick={() => { setdel(val.outward_id); deletedemo(val.outward_id, id) }} className="delete-btn" style={{ fontSize: "35px" }}></DeleteIcon></th>
                                        </tr>
                                    })


                                }
                            </>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    res: state.AddfullOutward,
    view: state.ViewAllDepartment,
    respro: state.AllProductView,
    del: state.DeleteOutward

});

export default connect(mapStateToProps)(Index);