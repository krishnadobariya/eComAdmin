import { Baseurl } from "../../Baseurl";
import axios from "axios"
import Cookies from 'js-cookie'

// REDUX ACTION

const token = Cookies.get('jwt');


// UPDATE PRODUCT
export function UpdateProduct(data, id) {

    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/product/update/${id}`, data,
            {
                headers: { "jwt": token }
            });

        const return_response = {
            type: "UPDATE_PRODUCT",
            payload: response,
        };

        dispatch(return_response);
    };
}
// UPDATE TYPE
export function UpdateType(data, id) {


    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/cat-type/update/${id}`, data,
            {
                headers: { "jwt": token }
            });
        localStorage.removeItem('category')
        const return_response = {
            type: "UPDATE_TYPE",
            payload: response,
        };

        dispatch(return_response);
    };
}

// -----UPDATE CATEGORY
export function UpdateSubCategory(data, id) {

    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/sub-category/update/${id}`, data,
            {
                headers: { "jwt": token }
            });
        const return_response = {
            type: "UPDATE_SUBCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}
// -----UPDATE CATEGORY
export function UpdateCategory(data, id) {

    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/category/update/${id}`, data,
            {
                headers: { "jwt": token }
            });
        const return_response = {
            type: "UPDATE_CATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}

// ------UPDATE DEPARTMENT

export function UpdateDepartment(data, id) {
    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/department/update/${id}`, data,
            {
                headers: { "jwt": token }
            });
        const return_response = {
            type: "UPDATE_DEPARTMENT",
            payload: response,
        };

        dispatch(return_response);
    };
}

// -----UPDATE OUTWARD

export function UpdateOutward(data, id) {

    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/outward/update/${id}`, data,
            {
                headers: { "jwt": token }
            });
            console.log("response:::",response)
        const return_response = {
            type: "UPDATE_OUTWARD",
            payload: response,
        };

        dispatch(return_response);
    };
}



// ------UPDATE LOCATION

export function UpdateLoaction(data, id) {
    return async (dispatch) => {

        const response = await axios.put(`${Baseurl}/LOCATION/update/${id}`, data,
            {
                headers: { "jwt": token }
            });
        const return_response = {
            type: "UPDATE_LOCATION",
            payload: response,
        };

        dispatch(return_response);
    };
}