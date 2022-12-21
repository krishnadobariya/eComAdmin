import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewAllOutward, DeletePrslip, OutwardViewById, ViewAllDepartment, AllProductView } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Index = ({ dispatch, res, resdel, viewById }) => {


    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);
    const [outward, setOutward] = useState([]);
    const [modalShow2, setModalShow2] = useState(false);
    const [product, setProduct] = useState([])



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
    console.log("data====", data);





    // DELETE-------------------------


    const deleteOutward = (id) => {
        dispatch(DeletePrslip(id));
        setTimeout(() => {
            window.location = "/outwardtable"
        }, 700);
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








    const columns = [
        {
            name: "Id",
            selector: (row) => row._id,
            sortable: true,

        },
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
                <DeleteIcon onClick={() => deleteOutward(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>

            </>

        }
    ]

    return (

        <>
            <div style={{ width: "100%" }}>
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
                                            <span className='px-3'>PRN:</span><span> {outward.uniqueKey}</span>
                                        </div>
                                        <hr></hr>
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
});

export default connect(mapStateToProps)(Index);
