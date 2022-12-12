import { Baseurl } from "../../Baseurl";
import Cookies from "js-cookie"
import axios from "axios"

// Login
export function AdminLogin(data) {
  try {
    return async (dispatch) => {

      const response = await axios.post(`${Baseurl}/admin/login`, data);
  
      if (response.data.status === "true" && response.data.message === "LOGIN SUCCESSFULLY !" && response.data.code === 200) {
        Cookies.set('jwt', response.data.data)
      }
      var return_response = {
        type: "ADMIN_LOGIN",
        payload: response,
      };
      dispatch(return_response);
    };
  } catch (error) {
    console.log("erroe",error)
  }
}