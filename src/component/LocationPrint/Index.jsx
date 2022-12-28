import jsPDF from "jspdf";
// import { ViewDepatmentMager } from "../../store/Action/FetchData"
import { connect } from "react-redux";
import { locationWise } from "../../store/Action/FetchData"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Index = ({ dispatch, res }) => {


  const params = useParams()

  useEffect(() => {
    console.log("hellooo")
    dispatch(locationWise(params.name))
  }, [])

    const data = res.data ? res.data.data ? res.data.data.data : [] : []
    console.log("data===",data)


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
   <button className="pdf my-5 mx-2 " onClick={generatepdf}>PR Slip</button>
      <div id="content" className="main-div">
        <div className="under-main-div">
          <div className="header">
            <div className="under-div">

              <div>
                <label>location :</label>
                <input name="department" type="text" value={params.name} className="text-center"></input>
              </div>
            </div>


          </div>

          <table className="table-design">
            <tr>
            <th>S.No.</th>
            <th>department.</th>
            <th>brand.</th>
              <th>mainItem</th>
              <th>Item Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Date</th>
             



            </tr>

            {
              data ?
                data.map((val, id) => {
                  return <>
                    <tr>
                    <td>{id + 1}</td>
                    <td>{val.department}</td>
                    <td>{val.brand}</td>
                      <td>{val.mainItem}</td>
                      <td>{val.product_name}</td>
                      <td>{val.QTY}</td>
                      <td>{val.price}</td>
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
  res: state.locationWise,

});

export default connect(mapStateToProps)(Index);
