import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewDepatmentMager, ViewAllDepartment } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';



const Index = ({ dispatch, res, department }) => {


    const [val,setVal] = useState(false)
    const [data, setDate] = useState([])
    const [departdata, setDepartdata] = useState("")


    useEffect(() => {
        const proName = res.data ? res.data.data ? res.data.data.data : [] : []
        setDate(proName)
        console.log("proName:::",proName)
    }, [res])

    const handleInput = (e) => {
        setDepartdata(e.target.value)
    }


    const search = (e) => {
        e.preventDefault()
        dispatch(ViewDepatmentMager(departdata))
        setVal(true)
    }
    useEffect(() => {

        dispatch(ViewAllDepartment())
    }, [])
    const depart = department.data ? department.data.data ? department.data.data.data : [] : []


    const columns = [
        {
          name:"Item Departme Name",
          selector:(row)=>row.department_name
        },
        {
            name: "Product  Name",
            selector: (row) => row.product_name,
            sortable: true,
        },
        {
            name: "Qauntity",
            selector: (row) => row.QTY,
            sortable: true
        },
        {
            name: "Date",
            selector: (row) => row.date,
            sortable: true,
        },
        

    ]

    return (

        <>
            <div style={{ width: "100%" }}>
                <div className='container-fluid'>
                    <div className='row py-3'>
                        <div className='col-md-12'>


                            <form class="form-inline my-4 d-flex justify-content-center" method='post'>
                                <div class="form-group">


                                    <select name="departmemtdata" className="form-control" id="" onChange={handleInput}   >
                                        <option>choose Department</option>
                                        {


                                            depart ?
                                                depart.map((val, id) => {
                                                    return (
                                                        <option value={val.name} className="back">{val.name}</option>
                                                    )
                                                }) : <option >Loding...</option>
                                        }
                                    </select>
                                </div>
                                <button type="submit" class="btn gradient-custom-2 text-white m-2" onClick={search}>search</button>
                                {val ?
                                <div className='add-link'><Link to={`/print/${departdata}`} >print</Link></div> :
                                []
                                }
                            </form>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="DEPARTMEMT WISE REPORT"
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
    res: state.ViewDepatmentMager,
    department: state.ViewAllDepartment,

});

export default connect(mapStateToProps)(Index);
