import jsPDF from "jspdf";
import "./pdf.css"
import { connect } from "react-redux";
import {FullGetOutward} from "../../store/Action/FetchData"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Prslip = ({dispatch,res}) => {

 
  const params = useParams()

   useEffect(()=>{
   dispatch(FullGetOutward(params.id))
   },[])

    const data = res.data ? res.data.data ? res.data.data.data : [] : []    
    const listall = res.data ? res.data.data ? res.data.data.data ? res.data.data.data.list : []: [] : []

    
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
    <div style={{width:"100%"}}>
 <button className="pdf" onClick={generatepdf}>PR Slip</button>
      <div id="content" className="main-div">
        <div className="under-main-div">
          <div className="header">
            <div className="under-div">
              <div>
                <label>PRS No. :</label>
                <input type="number" value={data.uniqueKey} className="text-center text-danger text-bold"></input>
              </div>
              <div className="d-flex">
                <label>Location :</label>
                <input name ="state" type="text" value={data.location} className="text-center"></input>
              </div>
              <div>
                <label>Department :</label>
                <input name ="department" type="text" value={data.department} className="text-center"></input>
              </div>
            </div>

            <div className="under-div">
              <div>
                <label>Date :</label>
                <input type="text" value={data.createdAt ? data.createdAt.slice(0,10) : null} className="text-center"></input>
              </div>
             
            </div>
          </div>

          <table className="table-design">
            <tr>
              <th>S.No.</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Req.Qty.</th>
               <th>UOM</th>
              <th>Current Stock</th>
              <th>RemarkS</th>
             
            </tr>
           
            {
              listall ?
              listall.map((val,id)=>{
                return <>
 <tr>
              <td>{id+1}</td>
              <td>{val.product_name}</td>
              <td></td>
              <td>{val.QTY}</td>
              <td>{val.UOM}</td>
              <td>{val.current_stock}</td>
              <td>{val.remark}</td>
             
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
             

            </tr>
            <tr>
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
             

            </tr>

          </table>

          <div className="footer">
            
            <div className="right-side">
              <label>Goods Recieved checked by Name:</label>
              <br />
              <input></input>
            </div>
          </div>

         
        </div>
       
      </div>
     


    </div>
  );
};


const mapStateToProps = (state) => ({
  res: state.FullGetOutward,

});

export default connect(mapStateToProps)(Prslip);
