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



const Index = ({ dispatch, res, resById, updateres, resUpadte }) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [Department, SetDepartment] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [viewId, setViewId] = useState();
    const [modalShow2, setModalShow2] = useState(false);


    useEffect(() => {
        dispatch(ViewAllDepartment());
    }, []);


    const data = res.data ? res.data.data ? res.data.data.data : [] : []
    console.log("data.......", data)
    useEffect(() => {
        const result = data.filter(val => {
            return val.name.toLowerCase().match(search.toLowerCase());
        });
        setfilter(result);
    }, [search]);


    // ---------delete---------
    const deleteDepartment = (id) => {
        dispatch(DeleteDepartment(id));
        window.location.reload(false);
    }
    // view-----------

    const handleviewOpen = (id) => {
        dispatch(DepartmentViewById(id));
    }

    useEffect(() => {
        const data2 = resById.data ? resById.data.data ? resById.data.data.data : [] : []
        SetDepartment(data2)
        resById.data.status == 200 && setModalShow2(true)

    }, [resById])

    // -----------update----------

    const handleOpen = (id) => {
        dispatch(DepartmentViewByIdUpdate(id));

    }
    useEffect(() => {
        const data2 = resUpadte.data ? resUpadte.data.data ? resUpadte.data.data.data : [] : []
        SetDepartment(data2)
        resUpadte.data.status == 200 && setModalShow(true)
    }, [resUpadte])

    const handleInput = (e) => {
        const { name, value } = e.target
        SetDepartment({ ...Department, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateDepartment(Department, Department._id));
        // window.location = "/departmenttable";
    };
    useEffect(() => {
        console.log(".......", updateres)
        const data = updateres.data ? updateres.data.data : []

        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,

                });
            }
            else if (data.code == 500) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });

            }
            else if (data.code == 403) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });

            }
        }
    }, [updateres])


    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Descripation",
            selector: (row) => row.dep_description,
            sortable: true,

        },
        {
            name: "action",
            cell: (row) => <>
                <VisibilityIcon onClick={() => { setViewId(row._id); handleviewOpen(row._id) }} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => deleteDepartment(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
                <EditIcon onClick={() => { setViewId(row._id); handleOpen(row._id) }} className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>

            </>
        }

    ]

    return (

        <>
            <div className="main-header">
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
                                        title="Department list"
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
                                                            <label>Category Name</label>
                                                            <input type="text"
                                                                class="form-control"
                                                                name="name"
                                                                value={Department.name}
                                                                onChange={handleInput} />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Discription</label>
                                                            <input type="text"
                                                                class="form-control"
                                                                name="dep_description"
                                                                value={Department.dep_description}
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
                                                <span className='px-3'>Department Name :</span><span> {Department.name}</span>
                                            </div>
                                            <hr></hr>
                                            <div className='d-flex'>
                                                <span className='px-3'>Discription :</span><span> {Department.dep_description}</span>
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
    res: state.ViewAllDepartment,
    resById: state.DepartmentViewById,
    resUpadte: state.DepartmentViewByIdUpdate,
    updateres: state.UpdateDepartment
});

export default connect(mapStateToProps)(Index);