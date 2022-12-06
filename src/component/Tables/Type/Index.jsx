import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { AllTypeView, Deletetype, TypeViewById, AllCategoryView, AllSubCategoryView, TypeViewByIdUpdate } from "../../../store/Action/FetchData"
import { UpdateType } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Index = ({ dispatch, res, resById, resByIdUpdate, view, viewsub,upadteType}) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [CategoryType, SetCategoryType] = useState([]);
    const [viewtype, setViewtype] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [category, setCategory] = useState("");




    useEffect(() => {
        dispatch(AllTypeView());
    }, []);

    const View = view.data ? view.data.data ? view.data.data.data : [] : []
    const data = res.data ? res.data.data ? res.data.data.data : [] : []
   

    useEffect(() => {
        if(data)
        {
            const result = data.filter(val => {
                return val.name.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);

    // ---------delete---------
    const DelteType = (id) => {
        dispatch(Deletetype(id));
        window.location.reload(false);
    }

    // view-----------

    const handleviewOpen = (id) => {
        dispatch(TypeViewById(id));
        setModalShow2(true)
    }

    useEffect(() => {
        const data2 = resById.data ? resById.data.data ? resById.data.data.data : [] : []
        setViewtype(data2)
     
    }, [resById])


    // -----------update


    const handleOpen = (id) => {
        dispatch(TypeViewByIdUpdate(id));
        setModalShow(true);

    }

    useEffect(() => {

        const data2 = resByIdUpdate.data ? resByIdUpdate.data.data ? resByIdUpdate.data.data.data : [] : []
        SetCategoryType(data2)
    
    }, [resByIdUpdate])

    const handleInput = (e) => {
        const { name, value } = e.target
        SetCategoryType({ ...CategoryType, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateType(CategoryType, CategoryType._id));
    
    };
    useEffect(() => {
        console.log(".......", upadteType)
        const data = upadteType.data ? upadteType.data.data : []
    
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
    
                });
                setTimeout(()=>{
                    window.location="/viewtype"
                }, 1000);
            }
            else if (data.code == 500) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(()=>{
                    window.location="/viewtype"
                }, 1000);
            }
            else if (data.code == 403) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(()=>{
                    window.location="/viewtype"
                }, 1000);
    
            }
        }
    }, [upadteType])

    useEffect(() => {
        dispatch(AllCategoryView());
    }, [])


  
    const ViewSub = viewsub.data ? viewsub.data.data ? viewsub.data.data.data : [] : []



    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "sub category",
            selector: (row) => row.select_subcat,
            sortable: true,

        },
        {
            name: "CategoryType Description",
            selector: (row) => row.catType_description,
            sortable: true,
        },
        {
            name: "action",
            cell: (row) => <>

                <VisibilityIcon onClick={() => handleviewOpen(row._id)} className="view-btn" style={{ fontSize: "35px" }}></VisibilityIcon>
                <DeleteIcon onClick={() => DelteType(row._id)} className="delete-btn" style={{ fontSize: "35px" }}></DeleteIcon>
                <EditIcon onClick={() => handleOpen(row._id)} className="update-btn" style={{ fontSize: "35px" }}></EditIcon>

            </>

        }

    ]

    return (

        <>
            <div  style={{width:"100%"}}>
                <div className='container-fluid'>
                    <ToastContainer/>
                    <div className='row py-3'>
                        <div className='col-md-12 px-0'>
                            <div className='add-link'><Link to="/categorytype" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="Type list"
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
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <form className='add-form'>
                                        <div class="form-group">
                                            <label>CategoryType</label>
                                            <input type="text"
                                                class="form-control"
                                                name="name"
                                                value={CategoryType.name}
                                                onChange={handleInput} />
                                        </div>
                                        <div class="form-group">
                                            <label>Type Description</label>
                                            <input type="text"
                                                class="form-control"
                                                name="catType_description"
                                                value={CategoryType.catType_description}
                                                onChange={handleInput} />
                                        </div>
                                        <div class="form-group category-select">
                                            <label>Category</label>
                                            <select name="select_cat" class="form-control" id="" onChange={(e) => dispatch(AllSubCategoryView(e.target.value))}  >

                                                <option>Choose a Category</option>
                                                {
                                                    View ?
                                                        View.map((val, id) => {
                                                            return (
                                                                <option value={val.cat_name} key={id}>{val.cat_name}</option>
                                                            )
                                                        }) : null
                                                }
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Select Subcategory</label>


                                            <select name="select_subcat" class="form-control" id="" onChange={handleInput} value={CategoryType.select_subcat}  >
                                                <option>Choose a Subcategory</option>
                                                {
                                                    ViewSub ?
                                                        ViewSub.map((val, id) => {
                                                            return (
                                                                <option value={val.subCat_name} key={id}>{val.subCat_name}</option>
                                                            )
                                                        }) : <option>no data found</option>
                                                }               </select>
                                        </div>
                                        <button type="submit" class="btn add-btn" onClick={handleUpdate}>Update</button>
                                    </form>
                                </Modal.Body>

                            </Modal>
                            {/* view model */}



                            {modalShow2 == true ?
                                <>
                                    {viewtype.name == null ? <Modal
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
                                                Category type
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex'>
                                                <span className='px-3'>Type Name :</span><span> {viewtype.name}</span>
                                            </div>
                                            <hr></hr>
                                            <div className='d-flex'>
                                                <span className='px-3'>Subcategory :</span><span> {viewtype.select_subcat}</span>
                                            </div>
                                            <hr></hr>
                                            <div className='d-flex'>
                                                <span className='px-3'>Type Discription :</span><span> {viewtype.catType_description}</span>
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
    res: state.AllTypeView,
    resById: state.TypeViewById,
    resByIdUpdate: state.TypeViewByIdUpdate,
    view: state.AllCategoryView,
    viewsub: state.AllSubCategoryView,
    upadteType:state.UpdateType


});

export default connect(mapStateToProps)(Index);
