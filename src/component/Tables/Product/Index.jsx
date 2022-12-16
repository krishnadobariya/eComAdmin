import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import {
  AllProductView,
  DeleteProduct,
  ProductViewById,
  AllSubCategoryView,
  TypeView,
  AllCategoryView,
  ProductViewByIdUpadte,
  ProductViewByIdForQr
} from "../../../store/Action/FetchData"
import { UpdateProduct } from '../../../store/Action/UpdateData'
import DataTable from 'react-data-table-component'
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Barcode from 'react-barcode';
import jsPDF from "jspdf";


const Index = ({ dispatch, res, resById, resUpadte, view, viewsub, type, Qr, upadtepro }) => {


  const [search, setSearch] = useState("");
  const [filterdata, setfilter] = useState([]);
  const [Product, SetProduct] = useState([]);
  const [ViewProduct, SetViewProduct] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [qty, setQty] = useState(0);
  const [modalShow3, setModalShow3] = useState(false);
  const [category, setCategory] = useState([])
  const [typeData, setTypeData] = useState([])



  useEffect(() => {
    dispatch(AllProductView());
  }, []);


  const data = res.data ? res.data.data ? res.data.data.data : [] : []

  useEffect(() => {
    if (data) {
      const result = data.filter(val => {
        return val.Name.toLowerCase().match(search.toLowerCase());
      });
      setfilter(result);
    }
  }, [search]);

  // DELETE----------------

  const DelteProduct = (id) => {
    dispatch(DeleteProduct(id));
    setTimeout(() => {
      window.location = "/viewproduct"
    }, 400);
  }

  // UPDATE---------------

  const handleOpen = (id) => {
    dispatch(ProductViewByIdUpadte(id));


    setModalShow(true)
  }


  useEffect(() => {
    const viewSub = viewsub.data ? viewsub.data.data ? viewsub.data.data.data : [] : []
    setCategory(viewSub)

  }, [viewsub])

  useEffect(() => {
    const typeview = type.data ? type.data.data ? type.data.data.data : [] : []
    setTypeData(typeview)

  }, [type])

  useEffect(() => {
    const data2 = resUpadte.data ? resUpadte.data.data ? resUpadte.data.data.data : [] : []
    SetProduct(data2)
    dispatch(AllSubCategoryView(data2.Category))
    dispatch(TypeView(data2.Sub_Category))
  }, [resUpadte])


  const handleInput = (e) => {
    const { name, value } = e.target
    SetProduct({ ...Product, [name]: value })
    setQty(value)
    if (e.target.name == 'Category') {
      dispatch(AllSubCategoryView(e.target.value))
    }
    if (e.target.name == 'Sub_Category') {
      dispatch(TypeView(e.target.value))
    }

  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(UpdateProduct(Product, Product._id));
  };

  useEffect(() => {
    dispatch(AllCategoryView())

  }, [])


  useEffect(() => {
    const data = upadtepro.data ? upadtepro.data.data : []

    if (data) {
      if (data.code == 200) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,

        });
        setTimeout(() => {
          window.location = "/viewproduct"
        }, 1000);
      }
      else if (data.code == 500) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(() => {
          window.location = "/viewproduct"
        }, 1000);

      }
      else if (data.code == 403) {
        toast.error(data.message, {
          position: toast.POSITION.TOP_CENTER,
          timeOut: 1000,
        });
        setTimeout(() => {
          window.location = "/viewproduct"
        }, 1000);

      }
    }
  }, [upadtepro])


  // VIEW-------------------

  const handleviewOpen = (id) => {

    dispatch(ProductViewById(id));
    setModalShow2(true)
  }

  useEffect(() => {
    const data2 = resById.data ? resById.data.data ? resById.data.data.data : [] : []
    SetViewProduct(data2)

  }, [resById])

  // view end---------------

  const handleviewbyqr = (id) => {

    dispatch(ProductViewByIdForQr(id));
    setModalShow3(true)
  }

  useEffect(() => {
    const data2 = Qr.data ? Qr.data.data ? Qr.data.data.data : [] : []
    SetViewProduct(data2)

  }, [Qr])



  const qrcode = (
    <Barcode value={ViewProduct._id} />
  )

  const View = view.data ? view.data.data ? view.data.data.data : [] : []




  

  const onPrintBarcode = () => {
    var container = document.getElementById("qrDiv");
    var width = "100%";
    var height = "100%";
    var printWindow = window.open('', 'PrintMap',
      'width=' + width + ',height=' + height);
    printWindow.document.writeln(container.innerHTML);
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  }


  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,

    },
    {
      name: "SubCategory",
      selector: (row) => row.Sub_Category,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.Type,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => `${row.Price}.Rs`,
      sortable: true,
    },
    {
      name: "QTY",
      selector: (row) => row.QTY,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.updatedAt.slice(0, 10),
      sortable: true
    },
    {
      name: "action",
      cell: (row) => <>
        <QrCodeIcon onClick={() => handleviewbyqr(row._id)} className="view-btn" style={{ fontSize: "35px" }} >View</QrCodeIcon>
        <VisibilityIcon onClick={() => handleviewOpen(row._id)} className="view-btn" style={{ fontSize: "35px" }} >View</VisibilityIcon>
        <DeleteIcon onClick={() => DelteProduct(row._id)} className="delete-btn" style={{ fontSize: "35px" }}>Delete</DeleteIcon>
        <EditIcon onClick={() => handleOpen(row._id)} className="update-btn" style={{ fontSize: "35px" }}>Update</EditIcon>


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
              <div className='add-link'><Link to="/product" >ADD</Link></div>
              {
                data == "null" ?
                  <h1>loading....</h1>
                  :
                  <DataTable
                    title="PRODUCT LIST"
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
                        style={{border:"1px solid gray"}}
                      />
                    }
                  />
              }

            </div>
            <div>

              <>
                {Product.Name == null ?
                  <Modal
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
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      {
                        Product ?
                          <form className='add-form'>
                            <div className="form-group">
                              <label>Product Name</label>
                              <input type="text" className="form-control"
                                name="Name"
                                value={Product.Name}
                                onChange={handleInput} />
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-4">
                                <label>Category</label>
                                <select name="Category" className="form-control" id="" onChange={handleInput} value={Product.Category}  >
                                  <option>choose category</option>
                                  {
                                    View ?
                                      View.map((val, id) => {
                                        return (
                                          <option value={val.cat_name} key={id}>{val.cat_name}</option>
                                        )
                                      }) : <option >Data Not Found</option>
                                  }
                                </select>
                              </div>
                              <div className="form-group col-md-4">
                                <label>SubCategory</label>
                                <select name="Sub_Category" className="form-control" id="" onChange={handleInput} value={Product.Sub_Category}  >
                                  <option>choose subcategory</option>
                                  {
                                    category ?
                                      category.map((val, id) => {
                                        return (
                                          <option value={val.subCat_name} key={id}>{val.subCat_name}</option>
                                        )
                                      }) : <option >Data Not Found</option>
                                  }
                                </select>
                              </div>
                              <div className="form-group col-md-4">
                                <label>Type</label>
                                <select name="Type" className="form-control" id="" onChange={handleInput} value={Product.Type}  >
                                  <option>choose type</option>
                                  {
                                    typeData ?
                                      typeData.map((val, id) => {
                                        return (
                                          <option value={val.name} key={id}>{val.name}</option>
                                        )
                                      }) : <option >Data Not Found</option>
                                  }
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>Quantity</label>
                                <input type="text" className="form-control"
                                  name="QTY"
                                  value={Product.QTY}
                                  onChange={handleInput} />
                              </div>
                              <div className="form-group col-md-6">
                                <label>Price</label>
                                <input type="text" className="form-control"
                                  name="Price"
                                  value={Product.Price}
                                  onChange={handleInput} />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Unit</label>
                              <input type="text" className="form-control"
                                name="Unit"
                                value={Product.Unit}
                                onChange={handleInput} />
                            </div>
                            <div className="form-group">
                              <label>Remark</label>
                              <input type="text" className="form-control" name="Remark"
                                value={Product.Remark}
                                onChange={handleInput} />
                            </div>
                            <button type="submit" className="btn add-btn" onClick={handleUpdate}>UPDATE</button>
                          </form> : <h1>Data Not Found</h1>
                      }
                    </Modal.Body>

                  </Modal>
                }
              </>




              {modalShow2 == true ?
                <>
                  {ViewProduct.Name == null ? <Modal
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
                        Product
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className='d-flex'>
                        <span className='px-3'>product Name :</span><span> {ViewProduct.Name}</span>
                      </div>
                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>Category :</span><span> {ViewProduct.Category}</span>
                      </div>
                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>SubCategory :</span><span> {ViewProduct.Sub_Category}</span>
                      </div>
                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>Type :</span><span> {ViewProduct.Type}</span>
                      </div>
                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>Price :</span><span> {ViewProduct.Price}</span>
                      </div>
                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>Quantity :</span><span> {ViewProduct.QTY}</span>
                      </div>

                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>Unit :</span><span> {ViewProduct.Unit}</span>
                      </div>
                      <hr></hr>
                      <div className='d-flex'>
                        <span className='px-3'>Remark :</span><span> {ViewProduct.Remark}</span>
                      </div>
                    </Modal.Body>

                  </Modal>} </> : ""}




              {modalShow3 == true ?
                <>
                  {ViewProduct.Name == null ? <Modal
                    show={modalShow3}
                    onHide={() => setModalShow2(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >

                    <Modal.Body>
                      <div>Loading......</div>
                    </Modal.Body>

                  </Modal> : <Modal
                    show={modalShow3}
                    onHide={() => setModalShow3(false)}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Body>
                      <h5 className='text-center'>Barcode</h5>
                      <div className='d-flex justify-content-center' id="qrDiv" onClick={onPrintBarcode} >

                        {qrcode}
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
  res: state.AllProductView,
  resById: state.ProductViewById,
  resUpadte: state.ProductViewByIdUpadte,
  view: state.AllCategoryView,
  viewsub: state.AllSubCategoryView,
  type: state.TypeView,
  Qr: state.ProductViewByIdForQr,
  upadtepro: state.UpdateProduct


});

export default connect(mapStateToProps)(Index);
