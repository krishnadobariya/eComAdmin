import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllDepartment, DeleteDepartment, DepartmentViewById, DepartmentViewByIdUpdate } from "../../../store/Action/FetchData"
import { UpdateDepartment } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Index = ({ dispatch, res, resById, updateres, resUpadte ,del}) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [Department, SetDepartment] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [viewId, setViewId] = useState();
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [deletId,setDelateId] = useState("")


    useEffect(() => {
        dispatch(ViewAllDepartment());
    }, []);


    const data = res.data ? res.data.data ? res.data.data.data : [] : []

    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.name.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);

    // DELETE-------------------

   
    const deletcategory = () => {
        dispatch(DeleteDepartment(deletId));

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
                    window.location = "/departmenttable"
                }, 1000);
            }
            else if (data.code == 500) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/departmenttable"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/departmenttable"
                }, 1000);
            }
        }
    }, [del])

    // VIEW------------------

    const handleviewOpen = (id) => {
        dispatch(DepartmentViewById(id));
        setModalShow2(true)
    }

    useEffect(() => {
        const data2 = resById.data ? resById.data.data ? resById.data.data.data : [] : []
        SetDepartment(data2)
    }, [resById])

    // UPDATE--------------------

    const handleOpen = (id) => {
        dispatch(DepartmentViewByIdUpdate(id));
        setModalShow(true)
    }
    useEffect(() => {
        const data2 = resUpadte.data ? resUpadte.data.data ? resUpadte.data.data.data : [] : []
        SetDepartment(data2)

    }, [resUpadte])

    const handleInput = (e) => {
        const { name, value } = e.target
        SetDepartment({ ...Department, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateDepartment(Department, Department._id));

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
                    window.location = "/departmenttable"
                }, 1000);
            }
            else if (data.code == 500) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/departmenttable"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/departmenttable"
                }, 1000);
            }
        }
    }, [updateres])


    const columns = [
        {
            name: "Item Department Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => <>
                <VisibilityIcon onClick={() => { setViewId(row._id); handleviewOpen(row._id) }} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => { setModalShow3(true);setDelateId(row._id);}} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
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
                            <div className='add-link'><Link to="/departmemt" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="DEPARTMENT LIST"
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
                                        {Department.name == null ?
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
                                                        <div class="form-group">
                                                            <label>Item Departmemt Name</label>
                                                            <input type="text"
                                                                class="form-control"
                                                                name="name"
                                                                value={Department.name}
                                                                onChange={handleInput} />
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
                                    {Department.name == null ? <Modal
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
                                                Department
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex'>
                                                <span className='px-3'> Item Department Name :</span><span> {Department.name}</span>
                                            </div>
                                           
                                        </Modal.Body>

                                    </Modal>} </> : ""}


                                    <Modal
                                show={modalShow3}
                                onHide={() => setModalShow3(false)}
                                size="sm"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >

                                <Modal.Body>
                                    <div className='text-center'>ARE YOU SURE FOR DELETE THIS DEPARTMENT ?</div>
                                    <div className='d-flex justify-content-center delete-model'>
                                        <button className='text-yes' onClick={deletcategory}>YES</button><button className='text-no' onClick={() => setModalShow3(false)}>NO</button>
                                    </div>
                                </Modal.Body>

                            </Modal>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

const mapStateToProps = (state) => ({
    res: state.ViewAllDepartment,
    resById: state.DepartmentViewById,
    resUpadte: state.DepartmentViewByIdUpdate,
    updateres: state.UpdateDepartment,
    del:state.DeleteDepartment
});

export default connect(mapStateToProps)(Index);
