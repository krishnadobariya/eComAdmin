import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewDateWise } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'


const Index = ({ dispatch, res }) => {


    const [data, setDate] = useState([])
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
        dispatch(ViewDateWise(dateWise));
    }


    useEffect(() => {
        const proName = res.data ? res.data.data ? res.data.data.data : [] : []
        console.log("proName",proName)
        setDate(proName)


    }, [res])



    const columns = [

        {
            name: "product  Name",
            selector: (row) => row.product_name,
            sortable: true,
        },
        {
            name: "Qauntity",
            selector: (row) => row.QTY,
            sortable: true
        },
        {
            name: "Unit",
            selector: (row) => row.Unit,
            sortable: true
        },
        {
            name: "Price",
            selector: (row) => row.Price,
            sortable: true
        },
        {
            name: "CreatedAt",
            selector: (row) => row.createdAt.slice(0, 10),
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
                                <button type="submit" class="btn gradient-custom-2 text-white mb-2" onClick={search}>search</button>
                            </form>

                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="DATE WISE PRODUCT REPORT"
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
    res: state.ViewDateWise,

});

export default connect(mapStateToProps)(Index);
