// reduc-reducer

export const initialState = {
    data: {},
    loading: true
}

// count 

export function CountReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_COUNT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// ALL PRODUCT

export function AllProductReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLPRODUCT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// view by id

export function ProductByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// view by id FOR UPDATE

export function ProductByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTBYIDUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// view by id for QR

export function ProductByIdQRReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTBYIDQR":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// DELETE PRODUCTY

export function DeleteProductReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_PRODUCT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}






// category-----

export function FetchCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// view subcategory

export function FetchSubCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLSUBCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// FETCH TYPECATEGORY 

export function FetchTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TYPECATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// TYPEVIEW
export function FetchAllTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLTYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// delete type
export function DeleteTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_TYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// fetch type viewbyid 

export function FetchTypeByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// fetch type viewbyid 

export function FetchTypeByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TYPEUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}



// fetch type viewbyid 

export function FetchAllcategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// delete category

export function DeleteCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_CATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// FETCH CATEGORY
export function FetchAllCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// FETCH CATEGORYBYID
export function FetchCategoryByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORYBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// FETCh CATEGORYBYID for upadte
export function FetchCategoryByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORYBYIDFORUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// FETCH CATEGORYBYID
export function FetchAllSubCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLSUBCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// BY ID SUBCATEGORYBYID
export function FetchSubCategoryByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_SUBCATEGORYBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// BY ID SUBCATEGORYBYID FOR UPADTE
export function FetchSubCategoryByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_SUBCATEGORYBYIDUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// DELETE SUBCATEGORYBYID
export function DeleteSubCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_SUBCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// FETCH DEPARTMENT

export function FetchAllDepartmentReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLDEPARTMENT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// DELETE DEPARMENT

export function DeleteDepartmentReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_DEPARTMENT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// BT ID DEPARMENT

export function FetchDepartmentByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DEPARTMENTBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// BT ID DEPARMENT FOR UPDATE

export function FetchDepartmentByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DEPARTMENTBYIDUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
//  VIEW ALL OUTWARD

export function FetchAllOutwardReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLOUTWARD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// DELETE OUTWARD

export function DeleteOutwardReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_OUTWARD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

export function FetchOutwardByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_OUTWARDBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// for upadte view by id

export function FetchOutwardByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_OUTWARDBYIDUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

