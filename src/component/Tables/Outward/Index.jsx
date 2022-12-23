import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllOutward, DeletePrslip, OutwardViewById, ViewAllDepartment, AllProductView } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { ToastContainer, toast } from 'react-toastify';

const Index = ({ dispatch, res, resdel, viewById }) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [outward, setOutward] = useState([]);
    const [modalShow2, setModalShow2] = useState(false);
    const [product, setProduct] = useState([]);
    const [modalShow3, setModalShow3] = useState(false);
    const [deletId, setDelateId] = useState("")



    useEffect(() => {
        dispatch(ViewAllOutward());
        dispatch(ViewAllDepartment());
        dispatch(AllProductView());
    }, []);

    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.department.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);



    const data = res.data ? res.data.data ? res.data.data.data : [] : []

    // DELETE-------------------------


    const deletcategory = () => {
        dispatch(DeletePrslip(deletId));

    }

    // VIEW---------------

    const handleviewOpen = (id) => {
        dispatch(OutwardViewById(id));
        setModalShow2(true)
    }
    useEffect(() => {
        const data2 = viewById.data ? viewById.data.data ? viewById.data.data.data : [] : []
        setOutward(data2)
        console.log("data2:::", data2)
        const productdata = viewById.data ? viewById.data.data ? viewById.data.data.data ? viewById.data.data.data.product : [] : [] : []
        setProduct(productdata)

    }, [viewById])

    useEffect(() => {
        const data = resdel.data ? resdel.data.data : []
    
        if (data) {
          if (data.code == 200) {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
    
            });
            setTimeout(() => {
              window.location = "/outwardtable"
            }, 1000);
          }
          else if (data.code == 500) {
            toast.error(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
            setTimeout(() => {
              window.location = "/outwardtable"
            }, 1000);
    
          }
          else if (data.code == 403) {
            toast.error(data.message, {
              position: toast.POSITION.TOP_CENTER,
              timeOut: 1000,
            });
            setTimeout(() => {
              window.location = "/outwardtable"
            }, 1000);
    
          }
        }
      }, [resdel])
    






    const columns = [
     
        {
            name: "Location",
            selector: (row) => row.location,
            sortable: true,

        },
        {
            name: "Item department Name",
            selector: (row) => row.department,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row) => row.date,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) => <>
              <Link to={`/prslipe/${row._id}`} ><PictureAsPdfIcon className="update-btn" style={{ fontSize: "35px" }}/></Link>
                <VisibilityIcon onClick={() => handleviewOpen(row._id)} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
                <DeleteIcon onClick={() => { setModalShow3(true); setDelateId(row._id); }}  className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>

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

                            <div className='add-link'><Link to="/outward" >ADD</Link></div>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="OUTWARD LIST "
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
                        </div>




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
                                            <span className='px-3'>Item department:</span><span> {outward.department}</span>
                                        </div>
                                        <hr></hr>
                                        <div className='d-flex'>
                                            <span className='px-3'>location :</span><span> {outward.location}</span>
                                        </div>
                                        <hr></hr>
                                        <table>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Current Stock</th>
                                                <th>QTY</th>

                                            </tr>
                                            {
                                                product ?
                                                    product.map((val) => {
                                                        return <>
                                                            <tr>
                                                                <td>{val.product_name}</td>
                                                                <td>{val.price}</td>
                                                                <td>{val.current_stock}</td>
                                                                <td>{val.QTY}</td>

                                                            </tr>
                                                        </>
                                                    })
                                                    : null
                                            }
                                        </table>
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
                                    <div className='text-center'>ARE YOU SURE FOR DELETE THIS OUTWARD ?</div>
                                    <div className='d-flex justify-content-center delete-model'>
                                        <button className='text-yes' onClick={deletcategory}>YES</button><button className='text-no' onClick={() => setModalShow3(false)}>NO</button>
                                    </div>
                                </Modal.Body>

                            </Modal>
                    </div>
                </div>
            </div>

        </>

    )
}

const mapStateToProps = (state) => ({
    res: state.ViewAllOutward,
    resdel: state.DeletePrslip,
    viewById: state.OutwardViewById,
    viewUpadte: state.OutwardViewByIdUpdate,
});

export default connect(mapStateToProps)(Index);
