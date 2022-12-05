import { Baseurl } from "../../Baseurl";
import axios from "axios"
import Cookies from 'js-cookie'

const token = Cookies.get('jwt');

// add product

export function AddProduct(data) {
    console.log("dataaaa" , data);
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/product/insert`, data,
            {
                headers: { "jwt": token }
            });
        console.log("response",response)
        localStorage.removeItem('subcategory');
        localStorage.removeItem('category');
        // window.location="/viewproduct"
        var return_response = {
            type: "Add_PRODUCT",
            payload: response,
        };
        dispatch(return_response);
    };
}

// add category

export function AddCategory(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/category/insert`, data,
            {
                headers: { "jwt": token }
            });
        console.log(".........",response);
        // window.location="/viewcategory";
        var return_response = {
            type: "Add_CATEGORY",
            payload: response,
        };
        dispatch(return_response);
    };
}

// add category

export function AddSubCategory(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/sub-category/insert`, data,
            {
                headers: { "jwt": token }
            });
        console.log("hello",response)
        // window.location="/viewsubcategory";
        var return_response = {
            type: "Add_SUBCATEGORY",
            payload: response,
        };
        dispatch(return_response);
    };
}

// add category
export function AddCategoryType(data) {
    return async (dispatch) => {
        const response = await axios.post(`${Baseurl}/cat-type/insert`, data,
            {
                headers: { "jwt": token }
            });
        // window.location="/viewtype";
        var return_response = {
            type: "Add_CATEGORYTYPE",
            payload: response,
        };
        dispatch(return_response);
    };
}

//Add Department
export function AddDepartmentType(data) {
    return async(dispatch) => {
        const response = await axios.post(`${Baseurl}/department/insert`,data,
        {
            headers: { "jwt": token }
        });
        
        var return_response = {
            type: "ADD_DEPARTMENT",
            payload: response,
        };
        dispatch(return_response);
    }
}


//Add outward
export function AddOutward(data) {
    return async(dispatch) => {
        const response = await axios.post(`${Baseurl}/outward/insert`,data,
        {
            headers: { "jwt": token }
        });
        //  window.location="/outwardtable"
        var return_response = {
            type: "ADD_OUTWARD",
            payload: response,
        };
        dispatch(return_response);
    }
}