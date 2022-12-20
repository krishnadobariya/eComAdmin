import jsPDF from "jspdf";
import { ViewDepatmentMager } from "../../store/Action/FetchData"
import { connect } from "react-redux";
import {FullGetOutward} from "../../store/Action/FetchData"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Index = ({dispatch,res}) => {

 
  const params = useParams()

   useEffect(()=>{
   dispatch(ViewDepatmentMager(params.name))
   },[])

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
    <div style={{width:"100%"}}>

      <div id="content" className="main-div">
        <div className="under-main-div">
          <div className="header">
            <div className="under-div">
              
              <div>
                <label>Department :</label>
                <input name ="department" type="text" value={params.name} className="text-center"></input>
              </div>
            </div>

           
          </div>

          <table className="table-design">
            <tr>
              <th>S.No.</th>
              <th>Item Name</th>
              <th>Qty.</th>
            
            
             
            </tr>
           
            {
              data ?
              data.map((val,id)=>{
                return <>
 <tr>
              <td>{id+1}</td>
              <td>{val.product_name}</td>
              <td>{val.QTY}</td>
        
             
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
      <button className="pdf" onClick={generatepdf}>PR Slip</button>


    </div>
  );
};


const mapStateToProps = (state) => ({
  res: state.ViewDepatmentMager,

});

export default connect(mapStateToProps)(Index);
