import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllLocation, DeleteLocation, LocationViewById, LocationViewByIdUpdate } from "../../../store/Action/FetchData"
import { UpdateLoaction } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {citylist} from '../../cityname'



const Index = ({ dispatch, res, resById, updateres, resUpadte ,del}) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [Loaction, SetLoaction] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [viewId, setViewId] = useState();
    const [modalShow2, setModalShow2] = useState(false);


    useEffect(() => {
        dispatch(ViewAllLocation());
    }, []);


    const data = res.data ? res.data.data ? res.data.data.data : [] : []
    console.log("daata:::",data)

    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.location.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);

    // DELETE-------------------

    const deletelocation = (id) => {
        dispatch(DeleteLocation(id));
     
    }

    useEffect(() => {

        const data = del.data ? del.data.data : []

        if (data) {
            if (data.code == 200) {
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
                    window.location = "/Locationtable"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/Locationtable"
                }, 1000);
            }
        }
    }, [del])
    // VIEW------------------

    const handleviewOpen = (id) => {
        dispatch(LocationViewById(id));
        setModalShow2(true)
    }

    useEffect(() => {
        const data2 = resById.data ? resById.data.data ?resById.data.data.data :[] : []
        SetLoaction(data2)
        console.log(".............",Loaction)
    }, [resById])
    

    // UPDATE--------------------

    const handleOpen = (id) => {
        dispatch(LocationViewByIdUpdate(id));
        setModalShow(true)
    }
    useEffect(() => {
        const data2 = resUpadte.data ? resUpadte.data.data ? resUpadte.data.data.data : [] : []
        SetLoaction(data2)

    }, [resUpadte])

    const handleInput = (e) => {
        const { name, value } = e.target
        SetLoaction({ ...Loaction, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateLoaction(Loaction, Loaction._id));

    };
    useEffect(() => {

        const data = updateres.data ? updateres.data.data : []

        if (data) {
            if (data.code == 200) {
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
                    window.location = "/Locationtable"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/Locationtable"
                }, 1000);
            }
        }
    }, [updateres])


   

    const columns = [
        {
            name: "LOCATION",
            selector: (row) => row.location,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => <>
                <VisibilityIcon onClick={() => { setViewId(row._id); handleviewOpen(row._id) }} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => deletelocation(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
                <EditIcon onClick={() => { setViewId(row._id); handleOpen(row._id) }} className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>

            </>
        }

    ]

    return (

        <>
            <div style={{ width: "100%" }}>
                <div className='container-fluid'>
                    <ToastContainer />
                    <div className='row py-3'>

                        <div className='col-md-12 px-0'>
                            <div className='add-link'><Link to="/locationform" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="LOCATION LIST"
                                        columns={columns}
                                        data={filterdata == "" ? data : filterdata}
                                        pagination
                                        fixedHeader
                                        fixedHeaderScrollHeight='650px'
                                        highlightOnHover
                                        subHeader
                                        subHeaderAlign="left"
                                        subHeaderComponent={
                                            <input
                                                type="text"
                                                placeholder='search'
                                                className='w-25 form-control'
                                                value={search}
                                                onChange={(event) => setSearch(event.target.value)}
                                                style={{ border: "1px solid gray" }}
                                            />
                                        }
                                    />
                            }
                        </div>
                        <div>
                            {
                                modalShow == true ?
                                    <>
                                        {Loaction.location == null ?
                                            <Modal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                                size="lg"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                            >

                                                <Modal.Body>
                                                    <div>Loading......</div>
                                                </Modal.Body>

                                            </Modal> : <Modal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                                size="lg"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered>
                                                <Modal.Body>
                                                    <form className='add-form'>
                                                    
                                                        <div className="">
                                                            <label>Location</label>
                                                            <select name="location" className=" form-control" id="" onChange={handleInput} value={Loaction.location}>
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
                                                        <button type="submit" class="btn add-btn" onClick={handleUpdate}>Update</button>
                                                    </form>
                                                </Modal.Body>
                                            </Modal>
                                        }
                                    </>
                                    : null
                            }


                            {modalShow2 == true ?
                                <>
                                    {Loaction.location == null ? <Modal
                                        show={modalShow2}
                                        onHide={() => setModalShow2(false)}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >

                                        <Modal.Body>
                                            <div>Loading......</div>
                                        </Modal.Body>

                                    </Modal> : <Modal
                                        show={modalShow2}
                                        onHide={() => setModalShow2(false)}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Location
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex'>
                                                <span className='px-3'> Location :</span><span> {Loaction.location}</span>
                                            </div>
                                           
                                        </Modal.Body>

                                    </Modal>} </> : ""}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

const mapStateToProps = (state) => ({
    res: state.ViewAllLocation,
    resById: state.LocationViewById,
    resUpadte: state.LocationViewByIdUpdate,
    updateres: state.UpdateLoaction,
    del:state.DeleteLocation
  
});

export default connect(mapStateToProps)(Index);
