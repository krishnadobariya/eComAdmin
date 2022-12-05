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

const Index = ({ dispatch, res, resById, resUpdateById,update }) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [Category, SetCategory] = useState([]);
    const [viewCategory, SetViewCategory] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = useState(false);



    useEffect(() => {
        dispatch(ViewAllCategory());
    }, []);
   

    const data = res.data ? res.data.data ? res.data.data.data : [] : []
    console.log("data.......", data)


    // ---------delete---------
    const DelteCategory = (id) => {
        dispatch(DeleteCategory(id));
        window.location.reload(false);
    }

    // -----------update

    const handleOpen = (id) => {
        dispatch(CategoryViewByIdForUpadte(id));
     
    }

    useEffect(() => {
        console.log("dataaaaaaaa",resUpdateById)
        const data2 = resUpdateById.data ? resUpdateById.data.data ? resUpdateById.data.data.data : [] : []
        SetCategory(data2)
        resUpdateById.data.status == 200 && setModalShow(true)
    }, [resUpdateById])


    const handleInput = (e) => {
        const { name, value } = e.target
        SetCategory({ ...Category, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateCategory(Category, Category._id));
        // window.location = "/viewcategory";
    };


    useEffect(() => {
        console.log(".......",update)
        const data = update.data ? update.data.data : []
   
        if (data) {
          if (data.code == 200){
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
              
            });
          }
          else if(data.code==500)
          {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
     
          }
          else if(data.code==403)
          {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
     
          }
        }
      },[update])
    // -----------view

    const handleviewOpen = (id) => {
        dispatch(CategoryViewById(id));

    }

    useEffect(() => {
        const data2 = resById.data ? resById.data.data ? resById.data.data.data : [] : []
        SetViewCategory(data2)
        resById.data.status == 200 && setModalShow2(true)
    }, [resById])


    const columns = [
        {
            name: "Category Name",
            selector: (row) => row.cat_name,
            sortable: true,
        },
        {
            name: "Category Descripation",
            selector: (row) => row.cat_description,
            sortable: true,

        },
        {
            name: "action",
            cell: (row) => <>
                <VisibilityIcon onClick={() => handleviewOpen(row._id)} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => DelteCategory(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
                <EditIcon onClick={() => handleOpen(row._id)} className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>

            </>

        }

    ]

    return (

        <>
            <div className="main-header">
                <div className='container-fluid'>
                    <div className='row py-3'>
                    <ToastContainer/>
                        <div className='col-md-12 px-0'>
                            <div className='add-link'><Link to="/category" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="Category list"
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
                                        {Category.cat_name == null ?
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
                                        }
                                    </>
                                    : null
                            }


                            {modalShow2 == true ?
                                <>
                                    {viewCategory.cat_name == null ? <Modal
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
                                                Category
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex'>
                                                <span className='px-3'>Category Name :</span><span> {viewCategory.cat_name}</span>
                                            </div>
                                            <hr></hr>
                                            <div className='d-flex'>
                                                <span className='px-3'>Discription :</span><span> {viewCategory.cat_description}</span>
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
    res: state.ViewAllCategory,
    resById: state.CategoryViewById,
    resUpdateById: state.CategoryViewByIdForUpadte,
    update:state.UpdateCategory
});

export default connect(mapStateToProps)(Index);
