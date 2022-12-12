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


var a = []
const citylist = [

    { "city": "Ahmedabad", "state": "Gujarat" },
    { "city": "Amreli", "state": "Gujarat" },
    { "city": "Anand", "state": "Gujarat" },
    { "city": "Ankleshwar", "state": "Gujarat" },
    { "city": "Bharuch", "state": "Gujarat" },
    { "city": "Bhavnagar", "state": "Gujarat" },
    { "city": "Bhuj", "state": "Gujarat" },
    { "city": "Cambay", "state": "Gujarat" },
    { "city": "Dahod", "state": "Gujarat" },
    { "city": "Deesa", "state": "Gujarat" },
    { "city": "Dharampur", "state": " India" },
    { "city": "Dholka", "state": "Gujarat" },
    { "city": "Gandhinagar", "state": "Gujarat" },
    { "city": "Godhra", "state": "Gujarat" },
    { "city": "Himatnagar", "state": "Gujarat" },
    { "city": "Idar", "state": "Gujarat" },
    { "city": "Jamnagar", "state": "Gujarat" },
    { "city": "Junagadh", "state": "Gujarat" },
    { "city": "Kadi", "state": "Gujarat" },
    { "city": "Kalavad", "state": "Gujarat" },
    { "city": "Kalol", "state": "Gujarat" },
    { "city": "Kapadvanj", "state": "Gujarat" },
    { "city": "Karjan", "state": "Gujarat" },
    { "city": "Keshod", "state": "Gujarat" },
    { "city": "Khambhalia", "state": "Gujarat" },
    { "city": "Khambhat", "state": "Gujarat" },
    { "city": "Kheda", "state": "Gujarat" },
    { "city": "Khedbrahma", "state": "Gujarat" },
    { "city": "Kheralu", "state": "Gujarat" },
    { "city": "Kodinar", "state": "Gujarat" },
    { "city": "Lathi", "state": "Gujarat" },
    { "city": "Limbdi", "state": "Gujarat" },
    { "city": "Lunawada", "state": "Gujarat" },
    { "city": "Mahesana", "state": "Gujarat" },
    { "city": "Mahuva", "state": "Gujarat" },
    { "city": "Manavadar", "state": "Gujarat" },
    { "city": "Mandvi", "state": "Gujarat" },
    { "city": "Mangrol", "state": "Gujarat" },
    { "city": "Mansa", "state": "Gujarat" },
    { "city": "Mehmedabad", "state": "Gujarat" },
    { "city": "Modasa", "state": "Gujarat" },
    { "city": "Morvi", "state": "Gujarat" },
    { "city": "Nadiad", "state": "Gujarat" },
    { "city": "Navsari", "state": "Gujarat" },
    { "city": "Padra", "state": "Gujarat" },
    { "city": "Palanpur", "state": "Gujarat" },
    { "city": "Palitana", "state": "Gujarat" },
    { "city": "Pardi", "state": "Gujarat" },
    { "city": "Patan", "state": "Gujarat" },
    { "city": "Petlad", "state": "Gujarat" },
    { "city": "Porbandar", "state": "Gujarat" },
    { "city": "Radhanpur", "state": "Gujarat" },
    { "city": "Rajkot", "state": "Gujarat" },
    { "city": "Rajpipla", "state": "Gujarat" },
    { "city": "Rajula", "state": "Gujarat" },
    { "city": "Ranavav", "state": "Gujarat" },
    { "city": "Rapar", "state": "Gujarat" },
    { "city": "Salaya", "state": "Gujarat" },
    { "city": "Sanand", "state": "Gujarat" },
    { "city": "Savarkundla", "state": "Gujarat" },
    { "city": "Sidhpur", "state": "Gujarat" },
    { "city": "Sihor", "state": "Gujarat" },
    { "city": "Songadh", "state": "Gujarat" },
    { "city": "Surat", "state": "Gujarat" },
    { "city": "Talaja", "state": "Gujarat" },
    { "city": "Thangadh", "state": "Gujarat" },
    { "city": "Tharad", "state": "Gujarat" },
    { "city": "Umbergaon", "state": "Gujarat" },
    { "city": "Umreth", "state": "Gujarat" },
    { "city": "Una", "state": "Gujarat" },
    { "city": "Unjha", "state": "Gujarat" },
    { "city": "Upleta", "state": "Gujarat" },
    { "city": "Vadnagar", "state": "Gujarat" },
    { "city": "Vadodara", "state": "Gujarat" },
    { "city": "Valsad", "state": "Gujarat" },
    { "city": "Vapi", "state": "Gujarat" },
    { "city": "Vapi", "state": "Gujarat" },
    { "city": "Veraval", "state": "Gujarat" },
    { "city": "Vijapur", "state": "Gujarat" },
    { "city": "Viramgam", "state": "Gujarat" },
    { "city": "Visnagar", "state": "Gujarat" },
    { "city": "Vyara", "state": "Gujarat" },
    { "city": "Wadhwan", "state": "Gujarat" },
    { "city": "Wankaner", "state": "Gujarat" },
    { "city": "Adalaj", "state": "Gujrat" },
    { "city": "Adityana", "state": "Gujrat" },
    { "city": "Alang", "state": "Gujrat" },
    { "city": "Ambaji", "state": "Gujrat" },
    { "city": "Ambaliyasan", "state": "Gujrat" },
    { "city": "Andada", "state": "Gujrat" },
    { "city": "Anjar", "state": "Gujrat" },
    { "city": "Anklav", "state": "Gujrat" },
    { "city": "Antaliya", "state": "Gujrat" },
    { "city": "Arambhada", "state": "Gujrat" },
    { "city": "Atul", "state": "Gujrat" },
]


const token = Cookies.get('jwt');

const Index = ({ dispatch, res, view, respro }) => {
    const [qrdata, setData] = React.useState();
    const [det, setdel] = useState(false)
    const [err, seterror] = useState("")
    const [allRes, setAllRes] = useState({});
    const [outward, SetOutward] = useState({
        department: "",
        state: "",
    })
  const [a,setA] = useState([])

    

    const getdata = (id, data) => {

        console.log("data::", id)
        const res = axios.post(`${Baseurl}/outward/insert/${id}`, data, {
            headers: { "jwt": token }
        }).then((val) => {
            setAllRes(()=>({...val.data}))
            toast.success(val.data.message, {
                position: toast.POSITION.TOP_CENTER,

            })
            setA([...a,val.data.data])
        })
        if (allRes.code == 404) {
            toast.error(allRes.message, {
                position: toast.POSITION.TOP_CENTER,

            });

        }
    }

    useEffect(() => {
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
                                    <BarcodeScannerComponent
                                        width={400}
                                        height={400}
                                        onUpdate={(err, result) => {

                                            if (result) setData(result.text )

                                        }}
                                        onError={(err) => {
                                            seterror(err)
                                        }

                                        }
                                    />
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