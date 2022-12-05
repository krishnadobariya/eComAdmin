import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllOutward, DeleteOutward, OutwardViewById, OutwardViewByIdUpdate } from "../../../store/Action/FetchData"
import { UpdateOutward } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ dispatch, res, resdel, viewById, viewUpadte, updateout }) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [outward, setOutward] = useState([]);
    const [updateOutward, setUpdateOutward] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = useState(false);



    useEffect(() => {
        dispatch(ViewAllOutward());

    }, []);


    const data = res.data ? res.data.data ? res.data.data.data : [] : []

    useEffect(() => {
        const result = data.filter(val => {
            return val.department.toLowerCase().match(search.toLowerCase());
        });
        setfilter(result);
    }, [search]);



    // delete----------------------------


    const deleteOutward = (id) => {
        dispatch(DeleteOutward(id));
        window.location.reload(false);
    }

    // ----view-------------------

    const handleviewOpen = (id) => {
        dispatch(OutwardViewById(id));
    }
    useEffect(() => {
        const data2 = viewById.data ? viewById.data.data ? viewById.data.data.data : [] : []
        setOutward(data2)
        viewById.data.status == 200 && setModalShow2(true)
    }, [viewById])


    // -----------update----------

    const handleOpen = (id) => {
        dispatch(OutwardViewByIdUpdate(id));

    }
    useEffect(() => {
        const data2 = viewUpadte.data ? viewUpadte.data.data ? viewUpadte.data.data.data : [] : []
        setUpdateOutward(data2)
        viewUpadte.data.status == 200 && setModalShow(true)
    }, [viewUpadte])



    const handleInput = (e) => {
        const { name, value } = e.target
        setUpdateOutward({ ...updateOutward, [name]: value })
    }

    const handleUpdate = (e) => {


        e.preventDefault();
        dispatch(UpdateOutward(updateOutward, updateOutward._id));
        // window.location = "/outwardtable";
    };


    useEffect(() => {
        

    }, [updateout])



    const columns = [
        {
            name: "Department",
            selector: (row) => row.department,
            sortable: true,
        },
        {
            name: "Product name",
            selector: (row) => row.product_name,
            sortable: true,

        },
        {
            name: "quaintity",
            selector: (row) => row.QTY,
            sortable: true,
        },
        {
            name: "remark",
            selector: (row) => row.remark,
            sortable: true,
        },
        {
            name: "action",
            cell: (row) => <>
                <Link to="/prslipe"> <PictureAsPdfIcon className="pdf-btn" style={{ fontSize: "35px" }} /></Link>
                <VisibilityIcon onClick={() => handleviewOpen(row._id)} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => deleteOutward(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
                <EditIcon onClick={() => handleOpen(row._id)} className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>
            </>

        }
    ]

    return (

        <>
            <div className="main-header">
                <ToastContainer />
                <div className='container-fluid'>
                    <div className='row py-3'>
                        <div className='col-md-12 px-0'>

                            <div className='add-link'><Link to="/outward" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="Outward list"
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
                        </div>

                        {
                            modalShow == true ?
                                <>
                                    {updateOutward.department == null ?
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
                                                        <label>department Name</label>
                                                        <input type="text"
                                                            class="form-control"
                                                            name="department"
                                                            value={updateOutward.department}
                                                            onChange={handleInput} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>product_name</label>
                                                        <input type="text"
                                                            class="form-control"
                                                            name="product_name"
                                                            value={updateOutward.product_name}
                                                            onChange={handleInput} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>quaintity</label>
                                                        <input type="text"
                                                            class="form-control"
                                                            name="QTY"
                                                            value={updateOutward.QTY}
                                                            onChange={handleInput} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>remark</label>
                                                        <input type="text"
                                                            class="form-control"
                                                            name="remark"
                                                            value={updateOutward.remark}
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
                                {outward.department == null ? <Modal
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
                                            <span className='px-3'>Department Name :</span><span> {outward.department}</span>
                                        </div>
                                        <hr></hr>
                                        <div className='d-flex'>
                                            <span className='px-3'>Product Name :</span><span> {outward.product_name}</span>
                                        </div>
                                        <hr></hr>
                                        <div className='d-flex'>
                                            <span className='px-3'>Qaintity :</span><span> {outward.QTY}</span>
                                        </div>
                                        <hr></hr>
                                        <div className='d-flex'>
                                            <span className='px-3'>remark :</span><span> {outward.remark}</span>
                                        </div>
                                    </Modal.Body>

                                </Modal>} </> : ""}
                    </div>
                </div>
            </div>

        </>

    )
}

const mapStateToProps = (state) => ({
    res: state.ViewAllOutward,
    resdel: state.DeleteOutward,
    viewById: state.OutwardViewById,
    viewUpadte: state.OutwardViewByIdUpdate,
    updateout: state.updateOutward

});

export default connect(mapStateToProps)(Index);
