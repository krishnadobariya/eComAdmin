import React, { useEffect, useState } from 'react'
import { AdminLogin } from '../../../store/Action/Admindata';
import { connect } from "react-redux";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {

    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ dispatch, res }) => {

    // manage state
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    const [message, setmessage] = useState()


    const handleInput = (e) => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })

    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(AdminLogin(login));
        const data2 = res.data ? res.data.data  : []
       
        setmessage(data2)
        res.data.status == 200 && setmessage(data2)
    };


    useEffect(() => {
       
        const data = res.data ? res.data.data : []
    
        if (data) {
            if (data.code == 404) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
    
                });
                setTimeout(()=>{
                    window.location="/"
                
                }, 1000);
            }
            else if (data.code == 401) {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_CENTER,
               
                });
                setTimeout(()=>{
                    window.location="/"
                
                }, 1000);
            }
            else if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,
              
                });
                
                setTimeout(()=>{
                    window.location="/dashboard"
                }, 1000);
            }
        }
    }, [res])



    


    return (
        <MDBContainer className="my-5 gradient-form">
            <ToastContainer />
            <MDBRow>

                <div  className="col-md-6 my-5 ">
                    <div className="d-flex flex-column  ms-5">

                        <div className="text-center">
                            <ShoppingBasketIcon style={{ width: '185px', height: '100px', color: "#094f79" }} className="logo mb-5" />

                        </div>

                        <MDBInput wrapperClass='mb-4'
                            id='form1'
                            type='text'
                            name="username"
                            placeholder="Enter Your Username"
                            value={login.username}
                            onChange={handleInput}
                            autoComplete="off"

                        />
                        <MDBInput wrapperClass='mb-4'
                            placeholder='Password'
                            id='form2'
                            type='password'
                            name="password"
                            value={login.password}
                            onChange={handleInput}
                            autoComplete="off"
                        />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <button onClick={handleLogin} className="btn btn-block gradient-custom-2 mb-2 text-white ">Sign In</button>
                          
                        </div>



                    </div>

                </div>

                <div  className="col-md-6 my-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div>

                </div>

            </MDBRow>

        </MDBContainer>
    )
}


const mapStateToProps = (state) => ({
    res: state.AdminLogin,
});

export default connect(mapStateToProps)(Index);

