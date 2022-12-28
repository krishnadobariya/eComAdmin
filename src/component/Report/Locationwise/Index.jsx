import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { locationWise ,ViewAllLocation} from "../../../store/Action/FetchData"
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';


const Index = ({ dispatch, res,location }) => {


    const [data, setDate] = useState([])
    const [filterdata,setfilterdata] = useState([])
    const [search,setSearch]= useState([])
    const [locationdata,setlocation]= useState([])
    const [state,setState] = useState("")
    const [val,setVal] = useState(false)
   

    useEffect(()=>{
       
        dispatch(ViewAllLocation());
    },[])
   
    useEffect(()=>{
        const data = location.data ? location.data.data ? location.data.data.data : [] : []
        setlocation(data)
    },[location])
    

    // band item 

    useEffect(()=>{
        const data = res.data ? res.data.data ? res.data.data.data : [] : []
        setDate(data)
        console.log("data===",data)
       
    },[res])

    useEffect(() => {
        if (data) {
            const result = data.filter(val => {
                return val.brandName.toLowerCase().match(search.toLowerCase());
            });
            setfilterdata(result);
        }
    }, [search]);

    const searchLocation =(e)=>{
        e.preventDefault()
        dispatch(locationWise(state))
        setVal(true)
    }


    const columns = [
        {
            name: "Department",
            selector: (row) => row.department,
            sortable: true
        },
        {
            name: "Product Name",
            selector: (row) => row.product_name,
            sortable: true,
        },
        {
        name:"Main Item",
        selector: (row) => row.mainItem,
        sortable: true,
        },
        {
            name: "Brand",
            selector: (row) => row.brand,
            sortable: true
        },
        {
            name: "QTY",
            selector: (row) => row.QTY,
            sortable: true
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: "Date",
            selector: (row) => row.date,
            sortable: true
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

                                <select name="state" className=" form-control" id="" onChange={(e)=>setState(e.target.value)} value={state} >
                                        <option>choose state</option>
                                        {
                                            locationdata ?
                                            locationdata.map((val, id) => {
                                                    return (
                                                        <option value={val.location} key={id}>{val.location}</option>
                                                    )
                                                }) : <option >Loding...</option>
                                        }
                                    </select>
                                </div>
                                <button type="submit" class="btn gradient-custom-2 text-white m-2" onClick={searchLocation}>search</button>
                                {val ?
                                <div className='add-link'><Link to={`/location/${state}`} >print</Link></div> :
                                []
                                }
                             
                            </form>

                            {
                                data == "null" ?
                                    <h1>loading....</h1>
                                    :
                                    <DataTable
                                        title="LOCATION WISE DATA"
                                        columns={columns}
                                        data={filterdata == "" ? data : filterdata}
                                        pagination
                                        fixedHeader
                                        fixedHeaderScrollHeight='650px'
                                        highlightOnHover
                                        subHeader
                                        subHeaderAlign="left"
                                        // subHeaderComponent={
                                        //     <input
                                        //         type="text"
                                        //         placeholder='search'
                                        //         className='w-25 form-control'
                                        //         value={search}
                                        //         onChange={(event) => setSearch(event.target.value)}
                                        //         style={{border:"1px solid gray"}}
                                        //     />
                                        // }

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
    res: state.locationWise,
    location:state.ViewAllLocation,

});

export default connect(mapStateToProps)(Index);
