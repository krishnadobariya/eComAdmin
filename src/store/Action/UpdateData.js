import { Baseurl } from "../../Baseurl";
import axios from "axios"
import Cookies from 'js-cookie'

// redux action

const token = Cookies.get('jwt');
console.log("token....",token)
// update product---

export function  UpdateProduct(data,id) {
   
    console.log("id",id)
    return async (dispatch) => {
      
        const response = await axios.put(`${Baseurl}/product/update/${id}`,data,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
         
        const return_response = {
            type: "UPDATE_PRODUCT",
            payload: response,
        };

        dispatch(return_response);
    };
}


export function  UpdateType(data,id) {
   

    return async (dispatch) => {
      
        const response = await axios.put(`${Baseurl}/cat-type/update/${id}`,data,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
            localStorage.removeItem('category')
        const return_response = {
            type: "UPDATE_TYPE",
            payload: response,
        };

        dispatch(return_response);
    };
}

// -----upadte category
export function  UpdateSubCategory(data,id) {
   
    console.log("id",id)
    return async (dispatch) => {
      
        const response = await axios.put(`${Baseurl}/sub-category/update/${id}`,data,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "UPDATE_SUBCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}

export function  UpdateCategory(data,id) {
   
    console.log("id",data)
    return async (dispatch) => {
      
        const response = await axios.put(`${Baseurl}/category/update/${id}`,data,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "UPDATE_CATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}

// upadte Department--------

export function  UpdateDepartment(data,id) {
    console.log("update........",data)
     return async (dispatch) => {
       
         const response = await axios.put(`${Baseurl}/department/update/${id}`,data,
             {
                 headers: { "jwt": token }
             });
             console.log("......",response);
         const return_response = {
             type: "UPDATE_DEPARTMENT",
             payload: response,
         };
 
         dispatch(return_response);
     };
 }

// upadte Outward--------

export function  UpdateOutward(data,id) {
  
    return async (dispatch) => {
      
        const response = await axios.put(`${Baseurl}/outward/update/${id}`,data,
            {
                headers: { "jwt": token }
            });
            console.log("......res",response);
        const return_response = {
            type: "UPDATE_OUTWARD",
            payload: response,
        };

        dispatch(return_response);
    };
}