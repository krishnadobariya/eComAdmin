import React from 'react'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { AddOutward } from '../../store/Action/AddData'

const Scanner = ({disptch,res}) => {
    const [data, setData] = React.useState("Not Found");

let tempData;

    return (
    
      <>

        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if(tempData == null){
              tempData = result.text;
            }
            if (result) setData(result.text);
            else setData("Not Founddddd");
          }}
        />
        {/* <p>{disptch(AddOutward(data))}</p> */}
        <p></p>
        <p>{tempData}</p>
      </>
    );
}


const mapStateToProps = (state) => ({
  res:state.AddOutward

});

export default connect(mapStateToProps)(Scanner);