import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllCategory, DeleteCategory, CategoryViewById, CategoryViewByIdForUpadte } from "../../../store/Action/FetchData"
import { UpdateCategory } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ dispatch, res, resById, resUpdateById, update, del }) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [Category, SetCategory] = useState([]);
    const [viewCategory, SetViewCategory] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [deletId, setDelateId] = useState("")

    useEffect(() => {
        dispatch(ViewAllCategory());
    }, []);
    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.cat_name.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);
    const data = res.data ? res.data.data ? res.data.data.data : [] : []


    // DELETE-------------

    const deletcategory = () => {
        dispatch(DeleteCategory(deletId));

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
                    window.location = "/viewcategory"
                }, 1000);
            }
            else if (data.code == 500) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/viewcategory"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/viewcategory"
                }, 800);
            }
        }
    }, [del])
    // UPDATE--------------------

    const handleOpen = (id) => {
        dispatch(CategoryViewByIdForUpadte(id));
        setModalShow(true)
    }

    useEffect(() => {
        const data2 = resUpdateById.data ? resUpdateById.data.data ? resUpdateById.data.data.data : [] : []
        SetCategory(data2)

    }, [resUpdateById])


    const handleInput = (e) => {
        const { name, value } = e.target
        SetCategory({ ...Category, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateCategory(Category, Category._id));

    };

    useEffect(() => {
        const data = update.data ? update.data.data : []
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,

                });
                setTimeout(() => {
                    window.location = "/viewcategory"
                }, 1000);
            }
            else if (data.code == 500) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/viewcategory"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(() => {
                    window.location = "/viewcategory"
                }, 800);
            }
        }
    }, [update])

    // VIEW------------

    const handleviewOpen = (id) => {
        dispatch(CategoryViewById(id));
        setModalShow2(true)

    }

    useEffect(() => {
        const data2 = resById.data ? resById.data.data ? resById.data.data.data : [] : []
        SetViewCategory(data2)
    }, [resById])


    const columns = [
        {
            name: "Item Department",
            selector: (row) => row.cat_name,
            sortable: true,
        },
        {
            name: "Item Department Description",
            selector: (row) => row.cat_description,
            sortable: true,

        },
        {
            name: "Action",
            cell: (row) => <>
                <VisibilityIcon onClick={() => handleviewOpen(row._id)} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => { setModalShow3(true); setDelateId(row._id); }} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
                <EditIcon onClick={() => handleOpen(row._id)} className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>

            </>

        }

    ]

    return (

        <>
            <div style={{ width: "100%" }}>
                <div className='container-fluid'>
                    <div className='row py-3'>
                        <ToastContainer />
                        <div className='col-md-12 px-0'>
                            <div className='add-link'><Link to="/category" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="Item Department List"
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

                            <Modal
                                show={modalShow}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Body>
                                    <form className='add-form'>
                                        <div class="form-group">
                                            <label>Item Department</label>
                                            <input type="text"
                                                class="form-control"
                                                name="cat_name"
                                                value={Category.cat_name}
                                                onChange={handleInput} />
                                        </div>
                                        <div class="form-group">
                                            <label>Discription</label>
                                            <input type="text"
                                                class="form-control"
                                                name="cat_description"
                                                value={Category.cat_description}
                                                onChange={handleInput} />
                                        </div>
                                        <button type="submit" class="btn add-btn" onClick={handleUpdate}>Update</button>
                                    </form>
                                </Modal.Body>
                            </Modal>

                            <Modal
                                show={modalShow2}
                                onHide={() => setModalShow2(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        Category
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='d-flex'>
                                        <span className='px-3'>Item Department:</span><span> {viewCategory.cat_name}</span>
                                    </div>
                                    <hr></hr>
                                    <div className='d-flex'>
                                        <span className='px-3'>Discription:</span><span> {viewCategory.cat_description}</span>
                                    </div>
                                </Modal.Body>

                            </Modal>

                            <Modal
                                show={modalShow3}
                                onHide={() => setModalShow3(false)}
                                size="sm"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >

                                <Modal.Body>
                                    <div className='text-center'>ARE YOU SURE FOR DELETE THIS LOCATION ?</div>
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
    res: state.ViewAllCategory,
    resById: state.CategoryViewById,
    resUpdateById: state.CategoryViewByIdForUpadte,
    update: state.UpdateCategory,
    del: state.DeleteCategory

});

export default connect(mapStateToProps)(Index);
