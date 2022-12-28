import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { ViewFinishProduct } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';


const Index = ({ dispatch, res }) => {


    const [data, setDate] = useState([])
    const [search, setSearch] = useState("");
    const [filterdata, setfilter] = useState([]);

    useEffect(() => {
        const proName = res.data ? res.data.data ? res.data.data.data : [] : []
        console.log("Proname",proName)
        setDate(proName)
    }, [res])

    useEffect(() => {
        dispatch(ViewFinishProduct())
    }, [])


    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.Name.toLowerCase().match(search.toLowerCase());
            });
            setfilter(result);
        }
    }, [search]);


    const columns = [

        {
            name: "Name",
            selector: (row) => row.Name,
            sortable: true,
        },
        {
            name: "RemaindQty",
            selector: (row) => row.remaindQty,
            sortable: true
        }

    ]

    return (

        <>
            <div style={{ width: "100%" }}>
                <div className='container-fluid'>
                    <div className='row py-3'>
                    <div className='add-link'><Link to="/finishproprint" >print</Link></div> 
                        <div className='col-md-12'>


                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="FINISH PRODUCT DATA"
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
                    </div>
                </div>
            </div>

        </>

    )
}

const mapStateToProps = (state) => ({
    res: state.ViewFinishProduct

});

export default connect(mapStateToProps)(Index);
