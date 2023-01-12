import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewOutwardDateWise } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';


const Index = ({ dispatch, res }) => {


    const [data, setDate] = useState([])
    const [val, setval] = useState(false)
    const [dateWise, setDateWise] = useState({
        first_date: '',
        last_date: '',
    })


    const handleInput = (e) => {
        const { name, value } = e.target
        setDateWise({ ...dateWise, [name]: value })

    }


    const search = (e) => {
        e.preventDefault()
        dispatch(ViewOutwardDateWise(dateWise));
        setval(true)
    }


    useEffect(() => {
        const proName = res.data ? res.data.data ? res.data.data.data : [] : []
        console.log("proName", proName)
        setDate(proName)


    }, [res])



    const columns = [

       
        {
            name: "PRN",
            selector: (row) => row.uniqueKey,
            sortable: true
        },
        {
            name:"product Name",
            selector: (row) => row.product_name,
            sortable: true
        },
        {
            name: "Department",
            selector: (row) => row.department,
            sortable: true
        },
        {
            name: "Location",
            selector: (row) => row.location,
            sortable: true
        },
        {
            name:"QTY",
            selector: (row) => row.QTY,
            sortable: true
        },
        {
            name:"price",
            selector: (row) => row.price,
            sortable: true

        },
        {
            name:"current stock",
            selector:(row)=>row.current_stock,
            sortable:true
        },
        {
            name: "CreatedAt",
            selector: (row) => row.createdAt,
            sortable: true,
        }

    ]

    return (

        <>
            <div style={{ width: "100%" }}>
                <div className='container-fluid'>
                    <div className='row py-3'>
                        <div className='col-md-12'>
                            <form class="form-inline my-4 d-flex justify-content-center" method='post'>
                                <div class="form-group mb-2">
                                    <label for="staticEmail2" class="sr-only">Email</label>
                                    <input type="date"
                                        className="form-control px-2"
                                        name="first_date"
                                        value={dateWise.first_date}
                                        onChange={handleInput} />
                                </div>
                                <div class="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" class="sr-only">Password</label>
                                    <input type="date"
                                        className="form-control"
                                        name="last_date"
                                        value={dateWise.last_date}
                                        onChange={handleInput} />
                                </div>
                             
                               

                                <button type="submit" class="btn gradient-custom-2 text-white " onClick={search}>search</button>
                                {val ?
                                    <div className='add-link'><Link to={`/print/${dateWise.first_date}/${dateWise.last_date}`} >print</Link></div> :
                                    []
                                }
                            </form>

                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="DATE WISE PRODUCT OUTWARD REPORT"
                                        columns={columns}
                                        data={data ? data : "loading"}
                                        pagination
                                        fixedHeader
                                        fixedHeaderScrollHeight='650px'
                                        highlightOnHover
                                        subHeader
                                        subHeaderAlign="left"

                                    />
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

const mapStateToProps = (state) => ({
    res: state.ViewOutwardDateWise,

});

export default connect(mapStateToProps)(Index);
