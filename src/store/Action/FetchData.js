import { Baseurl } from "../../Baseurl";
import axios from "axios"
import Cookies from 'js-cookie'

// redux action

const token = Cookies.get('jwt');
console.log("token....",token)
// count order

export function CountReport() {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/report/count`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_COUNT",
            payload: response,
        };

        dispatch(return_response);
    };
}

// view all product

export function  AllProductView() {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/product/view`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_ALLPRODUCT",
            payload: response,
        };

        dispatch(return_response);
    };
}

// VIEW BYID 
export function  ProductViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/product/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_PRODUCTBYID",
            payload: response,
        };

        dispatch(return_response);
    };
}
// for Qr
export function  ProductViewByIdForQr(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/product/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_PRODUCTBYIDQR",
            payload: response,
        };

        dispatch(return_response);
    };
}


// for upate view by id

export function  ProductViewByIdUpadte(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/product/view-by-id-pro/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_PRODUCTBYIDUPDATE",
            payload: response,
        };

        dispatch(return_response);
    };
}


// delete product 

export function  DeleteProduct(id) {
    console.log("hello",id);
    return async (dispatch) => {
        console.log("hello")
        const response = await axios.delete(`${Baseurl}/product/delete/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "DEL_PRODUCT",
            payload: response,
        };

        dispatch(return_response);
    };
}






// fetch category

export function  AllCategoryView() {
   
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/category/view-name`,
            {
                headers: { "jwt": token }
            });
            console.log("......AllCategoryView",response);
        const return_response = {
            type: "GET_ALLCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}


// view subcategory
export function  AllSubCategoryView(category) {

    
     console.log(".......category...........",category)
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/sub-category/search-cat/${category}`,
            {
                headers: { "jwt": token }
            });
            console.log("......AllSubCategoryView",response);
           
        const return_response = {
            type: "GET_ALLSUBCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}


// serch type subcategory

export function  TypeView(Subcategory) {
    
    console.log(".......type",Subcategory)
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/cat-type/view-sub-cat/${Subcategory}`,
            {
                headers: { "jwt": token }
            });
            console.log("......TypeView",response);
           
        const return_response = {
            type: "GET_TYPECATEGORY",
            payload: response,  
        };

        dispatch(return_response);
    };
}


//   fetchtypedata

export function  AllTypeView() {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/cat-type/view`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_ALLTYPE",
            payload: response,
        };

        dispatch(return_response);
    };
}


// delete type


export function  Deletetype(id) {
  
    return async (dispatch) => {
        const response = await axios.delete(`${Baseurl}/cat-type/delete/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "DEL_TYPE",
            payload: response,
        };

        dispatch(return_response);
    };
}


// get viewbyid in type

export function  TypeViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/cat-type/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_TYPE",
            payload: response,
        };

        dispatch(return_response);
    };
}


// get viewbyid in type for updatre

export function  TypeViewByIdUpdate(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/cat-type/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_TYPEUPDATE",
            payload: response,
        };

        dispatch(return_response);
    };
}


// get category
export function  ViewAllCategory() {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/category/view`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_ALLCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}


// deletecategory


export function  DeleteCategory(id) {
  
    return async (dispatch) => {
        const response = await axios.delete(`${Baseurl}/category/delete/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "DEL_CATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}

// view category byid

export function  CategoryViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/category/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
        const return_response = {
            type: "GET_CATEGORYBYID",
            payload: response,  
        };

        dispatch(return_response);
    };
}





// for update-----

// view category byid

export function  CategoryViewByIdForUpadte(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/category/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("datacategorybyid",response);
        const return_response = {
            type: "GET_CATEGORYBYIDFORUPDATE",
            payload: response,  
        };

        dispatch(return_response);
    };
}

// fetch allsubcategory

export function  ViewAllSubCategory() {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/sub-category/view-sub-cat`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_ALLSUBCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}

// view byid
export function  SubCategoryViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/sub-category/view-sub-cat-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_SUBCATEGORYBYID",
            payload: response,
        };

        dispatch(return_response);
    };
}


// view byid for upadte
export function  SubCategoryViewByIdForupadte(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/sub-category/view-sub-cat-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_SUBCATEGORYBYIDUPDATE",
            payload: response,
        };

        dispatch(return_response);
    };
}

// delte subcategory

export function  DeleteSubCategory(id) {
  
    return async (dispatch) => {
        const response = await axios.delete(`${Baseurl}/sub-category/delete/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "DEL_SUBCATEGORY",
            payload: response,
        };

        dispatch(return_response);
    };
}


// department viewall


export function  ViewAllDepartment() {
    console.log("helloodgdfrhdfh")
    return async (dispatch) => {
        console.log("helooooooooooooooooo")
        const response = await axios.get(`${Baseurl}/department/view`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_ALLDEPARTMENT",
            payload: response,
        };

        dispatch(return_response);
    };
}

// view department data by id 
export function  DeleteDepartment(id) {
  
    return async (dispatch) => {
        const response = await axios.delete(`${Baseurl}/department/delete/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "DEL_DEPARTMENT",
            payload: response,
        };

        dispatch(return_response);
    };
}


// departmet view byid 
export function  DepartmentViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/department/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_DEPARTMENTBYID",
            payload: response,
        };

        dispatch(return_response);
    };
}

// departmet view byid for update
export function  DepartmentViewByIdUpdate(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/department/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_DEPARTMENTBYIDUPDATE",
            payload: response,
        };

        dispatch(return_response);
    };
}

// all outward  
export function  ViewAllOutward(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/outward/view`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "GET_ALLOUTWARD",
            payload: response,
        };

        dispatch(return_response);
    };
}
// delete outward---------------


export function  DeleteOutward(id) {
  
    return async (dispatch) => {
        const response = await axios.delete(`${Baseurl}/outward/delete/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......",response);
        const return_response = {
            type: "DEL_OUTWARD",
            payload: response,
        };

        dispatch(return_response);
    };
}
//outward view byid----------
export function  OutwardViewById(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/outward/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......viewbyid",response);
        const return_response = {
            type: "GET_OUTWARDBYID",
            payload: response,
        };

        dispatch(return_response);
    };
}

//outward view byid for update----------
export function  OutwardViewByIdUpdate(id) {
    return async (dispatch) => {
        const response = await axios.get(`${Baseurl}/outward/view-by-id/${id}`,
            {
                headers: { "jwt": token }
            });
            console.log("......viewbyid",response);
        const return_response = {
            type: "GET_OUTWARDBYIDUPDATE",
            payload: response,
        };

        dispatch(return_response);
    };
}