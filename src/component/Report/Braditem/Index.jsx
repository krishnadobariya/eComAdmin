import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { BrandWise,MainWise } from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';


const Index = ({ dispatch, res ,mainres}) => {


    const [data, setDate] = useState([])
    const [filterdata,setfilterdata] = useState([])
    const [search,setSearch]= useState([])
    const [filterdata2,setfilterdata2] = useState([])
    const [search2,setSearch2]= useState([])
    const [mainItem,setMainitem] = useState([])

    useEffect(()=>{
        dispatch(BrandWise())
        dispatch(MainWise())
    },[])

    

    // band item 

    useEffect(()=>{
        const Brand = res.data ? res.data.data ? res.data.data.data : [] : []
        setDate(Brand)
       
    },[res])

    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.brandName.toLowerCase().match(search.toLowerCase());
            });
            setfilterdata(result);
        }
    }, [search]);
    const columns = [

        {
            name: "Brand Name",
            selector: (row) => row.brandName,
            sortable: true,
        },
        {
            name: "QTY",
            selector: (row) => row.QTY,
            sortable: true
        },
        {
            name: "Date",
            selector: (row) => row.date,
            sortable: true
        }

    ]
    // main itenm

    useEffect(()=>{
        const data = mainres.data ? mainres.data.data ? mainres.data.data.data : [] : []
        setMainitem(data)
        console.log("data=======",data)
    },[mainres])

    useEffect(() => {
        if (mainItem) {
            const result = mainItem.filter(val => {
                return val.mainItem.toLowerCase().match(search2.toLowerCase());
            });
            setfilterdata2(result);
        }
    }, [search2])
    const columns2 = [

        {
            name: "Main Item",
            selector: (row) => row.mainItem,
            sortable: true,
        },
        {
            name: "QTY",
            selector: (row) => row.QTY,
            sortable: true
        },
        {
            name: "Date",
            selector: (row) => row.date,
            sortable: true
        }

    ]
    return (

        <>
            <div style={{ width: "100%" }}>
                <div className='container-fluid'>
                    <div className='row py-3'>
                    <div className='add-link'><Link to="/brandprint" >print</Link></div> 
                        <div className='col-md-6'>
                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="BRAND WISE DATA"
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
                        <div className='col-md-6'>


                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="MAIN IEM WISE DATA"
                                        columns={columns2}
                                        data={filterdata2 == "" ? mainItem : filterdata2}
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
                                                value={search2}
                                                onChange={(event) => setSearch2(event.target.value)}
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
    res: state.BrandWise,
    mainres:state.MainWise

});

export default connect(mapStateToProps)(Index);
