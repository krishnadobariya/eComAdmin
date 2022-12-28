import jsPDF from "jspdf";
import { BrandWise, MainWise } from "../../store/Action/FetchData"
import { connect } from "react-redux";
import { useEffect, useState } from "react";




const Index = ({ dispatch, res, mainres }) => {

    const [data, setDate] = useState([])
    const [mainItem, setMainitem] = useState([])


    useEffect(() => {
        dispatch(BrandWise())
        dispatch(MainWise())
    }, [])
    useEffect(() => {
        const Brand = res.data ? res.data.data ? res.data.data.data : [] : []
        setDate(Brand)
        console.log("Brand=======", Brand)

    }, [res])

    useEffect(() => {
        const data = mainres.data ? mainres.data.data ? mainres.data.data.data : [] : []
        setMainitem(data)
        console.log("data=======", data)
    }, [mainres])

    const generatepdf = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#content"), {
            callback: function (pfd) {
                doc.save('file.pdf');
            },
            x: 45,
            y: 45,
            html2canvas: {
                scale: 0.3,
                width: 2000
            },
        })

    }
    return (
        <div style={{ width: "100%" }}  className="mx-2">
 <button className="pdf my-5 mx-2" onClick={generatepdf}>PR Slip</button>
            <div id="content" className="main-div d-flex justify-content-around px-0 mx-0 gap-1">
                <div className="under-main-div col-md-5 px-0 mx-0">
                   

                    <table className="table-design">
                        <tr>
                            <th>S.No.</th>
                            <th>Brand Name</th>
                            <th>Qty.</th>
                            <th>Date</th>
                        </tr>

                        {
                            data ?
                                data.map((val, id) => {
                                    return <>
                                        <tr>
                                            <td>{id + 1}</td>
                                            <td>{val.brandName}</td>
                                            <td>{val.QTY}</td>
                                            <td>{val.date}</td>

                                        </tr>
                                    </>
                                }) : <h1>no data found</h1>
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>

                    </table>

                    <div className="footer">
                    </div>


                </div>
                <div className="under-main-div col-md-5 px-0 mx-0">
                    
                    <table className="table-design">
                        <tr>
                            <th>S.No.</th>
                            <th>Main Item Name</th>
                            <th>Qty.</th>
                            <th>Date</th>
                        </tr>

                        {
                            mainItem ?
                            mainItem.map((val, id) => {
                                    return <>
                                        <tr>
                                            <td>{id + 1}</td>
                                            <td>{val.mainItem}</td>
                                            <td>{val.QTY}</td>
                                            <td>{val.date}</td>

                                        </tr>
                                    </>
                                }) : <h1>no data found</h1>
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>

                    </table>

                    <div className="footer">
                    </div>


                </div>


            </div>

            
           


        </div>
    );
};


const mapStateToProps = (state) => ({
    res: state.BrandWise,
    mainres: state.MainWise

});

export default connect(mapStateToProps)(Index);
