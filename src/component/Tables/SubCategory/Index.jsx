import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllSubCategory, DeleteSubCategory, SubCategoryViewById, AllCategoryView ,SubCategoryViewByIdForupadte} from "../../../store/Action/FetchData"
import { UpdateSubCategory } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Index = ({ dispatch, res, resbyid, view ,resForupdate,updatesub}) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [SubCategory, SetSubCategory] = useState([])
    const [viewSubcategory, setViewSubcategoty] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = useState(false);


    useEffect(() => {
        dispatch(ViewAllSubCategory());
    }, []);


    const data = res.data ? res.data.data ? res.data.data.data : [] : []
    console.log("data.......", data)
    useEffect(() => {
        if(data)
        {
            const result = data.filter(val => {
                return val.subCat_name.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);


    // ---------delete---------
    const DelteSubCategory = (id) => {
        dispatch(DeleteSubCategory(id));
        window.location.reload(false);
    }

    // -----------update

    const handleOpen = (id) => {
        dispatch(SubCategoryViewByIdForupadte(id));
        dispatch(AllCategoryView());
        setModalShow(true)
    }

    useEffect(() => {
        const data2 = resForupdate.data ? resForupdate.data.data ? resForupdate.data.data.data : [] : []
        SetSubCategory(data2)
    }, [resForupdate])


    const View = view.data ? view.data.data ? view.data.data.data : [] : []


    const handleInput = (e) => {
        const { name, value } = e.target
        SetSubCategory({ ...SubCategory, [name]: value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(UpdateSubCategory(SubCategory, SubCategory._id));
       
    };

    useEffect(() => {
        console.log(".......", updatesub)
        const data = updatesub.data ? updatesub.data.data : []
    
        if (data) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
    
                });
                setTimeout(()=>{
                    window.location="/viewsubcategory"
                }, 1000);
            }
            else if (data.code == 500) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(()=>{
                    window.location="/viewsubcategory"
                }, 1000);
    
            }
            else if (data.code == 403) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
                    timeOut: 1000,
                });
                setTimeout(()=>{
                    window.location="/viewsubcategory"
                }, 1000);
    
            }
        }
    }, [updatesub])
    



    // view-----------

    const handleviewOpen = (id) => {
        dispatch(SubCategoryViewById(id));
        setModalShow2(true);
    }
    useEffect(() => {
        const data2 = resbyid.data ? resbyid.data.data ? resbyid.data.data.data : [] : []
        setViewSubcategoty(data2)
      
    }, [resbyid])



    const columns = [
        {
            name: "SubCategory Name",
            selector: (row) => row.subCat_name,
            sortable: true,
        },
        {
            name: "category",
            selector: (row) => row.select_cat
        },
        {
            name: "SubCategory Descripation",
            selector: (row) => row.subCat_description,
            sortable: true,

        },
        {
            name: "action",
            cell: (row) => <>
                <VisibilityIcon onClick={() =>  handleviewOpen(row._id) } className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => DelteSubCategory(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
                <EditIcon onClick={() =>handleOpen(row._id) } className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>
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
                        <div className='add-link'><Link to="/subcategory" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="Subcategory list"
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
                                        {SubCategory.subCat_name == null ?
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
                                                centered
                                            >
                                                <Modal.Body>
                                                    <form className='add-form'>
                                                        <div class="form-group">
                                                            <label>Product Subcategory </label>
                                                            <input type="text"
                                                                class="form-control"
                                                                name="subCat_name"
                                                                value={SubCategory.subCat_name}
                                                                onChange={handleInput} />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Subcategory Description</label>
                                                            <input type="text"
                                                                class="form-control"
                                                                name="subCat_description"
                                                                value={SubCategory.subCat_description}
                                                                onChange={handleInput} />
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Category</label>
                                                            <select name="select_cat" class="form-control" id="" onChange={handleInput} value={SubCategory.select_cat}  >
                                                                <option>Choose a Category</option>
                                                                {
                                                                    View ?
                                                                        View.map((val, id) => {
                                                                            return (
                                                                                <option value={val.cat_name} key={id}>{val.cat_name}</option>
                                                                            )
                                                                        }) : <option >data not ound</option>
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
                            {/* view */}




                            {modalShow2 == true ?
                                <>
                                    {viewSubcategory.subCat_name == null ? <Modal
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
                                                Sub Category
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex'>
                                                <span className='px-3'>Subcategory Name :</span><span> {viewSubcategory.subCat_name}</span>
                                            </div>
                                            <hr></hr>
                                            <div className='d-flex'>
                                                <span className='px-3'>category :</span><span> {viewSubcategory.select_cat}</span>
                                            </div>
                                            <hr></hr>
                                            <div className='d-flex'>
                                                <span className='px-3'>Discription :</span><span> {viewSubcategory.subCat_description}</span>
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
    res: state.ViewAllSubCategory,
    resbyid: state.SubCategoryViewById,
    view: state.AllCategoryView,
    resForupdate:state.SubCategoryViewByIdForupadte,
    updatesub:state.UpdateSubCategory
});

export default connect(mapStateToProps)(Index);
