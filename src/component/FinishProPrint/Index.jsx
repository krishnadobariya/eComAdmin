import jsPDF from "jspdf";
import { ViewFinishProduct } from "../../store/Action/FetchData"
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Index = ({ dispatch, res }) => {


  const params = useParams()

  useEffect(() => {
    dispatch(ViewFinishProduct())
  }, [])

  const data = res.data ? res.data.data ? res.data.data.data : [] : []

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

      <div id="content" className="main-div">
        <div className="under-main-div">
          <table className="table-design">
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>remaindQty.</th>
            </tr>

            {
              data ?
                data.map((val, id) => {
                  return <>
                    <tr>
                      <td>{id + 1}</td>
                      <td>{val.Name}</td>
                      <td>{val.remaindQty}</td>
                    </tr>
                  </>
                }) : <h1>no data found</h1>
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
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
  res: state.ViewFinishProduct,

});

export default connect(mapStateToProps)(Index);
