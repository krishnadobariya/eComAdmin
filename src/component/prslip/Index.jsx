import jsPDF from "jspdf";
import "./pdf.css"
const Prslip = () => {


  const generatepdf = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pfd) {
        doc.save('file.pdf');
      },
      x: 45,
      y: 45,
      html2canvas: {
        scale: 0.3, //this was my solution, you have to adjust to your size
        width: 2000 //for some reason width does nothing
      },
    })

  }
  return (
    <>

      <div id="content" style={{ width: "100vw" }} className="main-div">
        <div className="under-main-div">
          <div className="header">
            <div className="under-div">
              <div>
                <label>PRS No. :</label>
                <input></input>
              </div>
              <div>
                <label>Location :</label>
                <input></input>
              </div>
              <div>
                <label>Department :</label>
                <input></input>
              </div>
            </div>

            <div className="under-div">
              <div >
                <label>PRS No. :</label>
                <input></input>
              </div>
              <div>
                <label>Date :</label>
                <input></input>
              </div>
              <div>
                <label>material Required Date :</label>
                <input></input>
              </div>
            </div>
          </div>

          <table className="table-design">
            <tr>
              <th>S.No.</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>UOM</th>
              <th>Req.Qty.</th>
              <th>Unit Price Eastimate</th>
              <th>Current Stock</th>
              <th>RemarkS</th>
              <th>know Suppliears</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Cap</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>2 Box</td>
              <td></td>
              <td>1.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>fan</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>6 PKT</td>
              <td></td>
              <td>2.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Send Paper</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>15 PKT</td>
              <td></td>
              <td>3.</td>

            </tr>
            <tr>
              <td>4</td>
              <td>Send Paper</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>15 PKT</td>
              <td></td>
              <td>4.</td>

            </tr>
            <tr>
              <td>5</td>
              <td>Send Paper</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>15 PKT</td>
              <td></td>
              <td>5.</td>

            </tr>
            <tr>
              <td>6</td>
              <td>Send Paper</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>15 PKT</td>
              <td></td>
              <td></td>

            </tr>
            <tr>
              <td>7</td>
              <td>Send Paper</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>15 PKT</td>
              <td></td>
              <td></td>

            </tr>
            <tr>
              <td>8</td>
              <td>Send Paper</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>15 PKT</td>
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
              <td></td>

            </tr>

          </table>

          <div className="footer">
            <div className="left-side">
              <div >
                <label>Office Use :</label>
                <input></input>
              </div>
              <div >
                <label>P.O. No :</label>
                <input></input>
              </div>
              <div >
                <label>Supplier Name :</label>
                <input></input>
              </div>
              <div >
                <label>Expected Delivery Name :</label>
                <input></input>
              </div>
              <div >
                <label>Ordered by:</label>
                <input></input>
              </div>
            </div>
            <div className="right-side">
              <label>Goods Recieved checked by Name:</label>
              <br />
              <input></input>
            </div>
          </div>

          <div className="second-div">
            <table className="second-div-tabel">
              <tr>
                <th>Prepared by:</th>
                <th>Dept. Head</th>
                <th>Authorized Signatory</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
       
      </div>
      <button className="pdf" onClick={generatepdf}>PR Slip</button>


    </>
  );
};

export default Prslip;