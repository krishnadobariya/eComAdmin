import React, { useEffect, useState } from 'react'
import { AddLocationType } from '../../../store/Action/AddData'
import { connect } from "react-redux";
import '../../../css/Product/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { citylist } from '../../cityname';





const Index = ({ dispatch, res }) => {

    const [Location, SetLocation] = useState({
        location: "",
    })



    const handleInput = (e) => {
        const { name, value } = e.target
        SetLocation({ ...Location, [name]: value })

    }
    const handleAdd = (e) => {
        e.preventDefault();

        dispatch(AddLocationType(Location));

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
                    window.location = "/Locationtable"
                }, 1000);


            }
            else if (data.code == 500) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/locationform"
                }, 1000);

            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/locationform"
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
                        <div className='add-link'><Link to="/Locationtable" >VIEW</Link></div>
                        <h1 className='text-center add-title py-4'>ADD LOCATION</h1>
                        <form className='add-form'>
                            <div className="form-group">
                                <div className="">
                                    <label>Location</label>
                                    <select name="location" className=" form-control" id="" onChange={handleInput} value={Location.location}>
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
    res: state.AddLocationType,

});

export default connect(mapStateToProps)(Index);