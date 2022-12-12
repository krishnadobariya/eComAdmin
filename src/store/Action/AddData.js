import { Baseurl } from "../../Baseurl";
import axios from "axios"
import Cookies from 'js-cookie'
import { DataArrayRounded } from "@mui/icons-material";

const token = Cookies.get('jwt');

//ADD PRODUCT

export function AddProduct(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/product/insert`, data,
            {
                headers: { "jwt": token }
            });
        localStorage.removeItem('subcategory');

        var return_response = {
            type: "Add_PRODUCT",
            payload: response,
        };
        dispatch(return_response);
    };
}

// ADD CATEGORY

export function AddCategory(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/category/insert`, data,
            {
                headers: { "jwt": token }
            });

        var return_response = {
            type: "Add_CATEGORY",
            payload: response,
        };
        dispatch(return_response);
    };
}

// ADD SUBCATEGORY

export function AddSubCategory(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/sub-category/insert`, data,
            {
                headers: { "jwt": token }
            });

        var return_response = {
            type: "Add_SUBCATEGORY",
            payload: response,
        };
        dispatch(return_response);
    };
}

// ADD CATEGORY TYPE
export function AddCategoryType(data) {
    console.log("helo",data)
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/cat-type/insert`, data,
            {
                headers: { "jwt": token }
            });

        var return_response = {
            type: "Add_CATEGORYTYPE",
            payload: response,
        };
        dispatch(return_response);
    };
}

//Add DEPARTMENT
export function AddDepartmentType(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/department/insert`, data,
            {
                headers: { "jwt": token }
            });



            console.log("resonse",response)
        var return_response = {
            type: "ADD_DEPARTMENT",
            payload: response,
        };
        dispatch(return_response);
    }
}


//Add OUTWARD
export function AddOutward(id,data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/outward/insert/${id}`,data,
            {
                headers: { "jwt": token }
            });
   
        var return_response = {
            type: "ADD_OUTWARD",
            payload: response,
        };
        dispatch(return_response);
    }
}


//Add OUTWARD
export function AddfullOutward(data) {

    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/outward/insertManyOutward`,data);
       
        var return_response = {
            type: "ADD_OUTALLWARD",
            payload: response,
        };
        dispatch(return_response);
    }
}




