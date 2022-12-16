// reduc-reducer

export const initialState = {
    data: {},
    loading: true
}

// COUNT API

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


// PRODUCT VIEW BY ID

export function ProductByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// PRODUCT VIEW BY ID FOR UPDATE

export function ProductByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PRODUCTBYIDUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// PRODUCT VIEW BY ID FOR  QR

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






// ALL CATEGORY-----

export function FetchCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// ALL SUBCATEGORY

export function FetchSubCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLSUBCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// ALL TYPECATEGORY VIEW BY SUBCATEGORY

export function FetchTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TYPECATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//ALL TYPEVIEW
export function FetchAllTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLTYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


//DELETE TYPE
export function DeleteTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_TYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// VIEW BY ID TYPE

export function FetchTypeByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// VIEW BY ID TYPE FOR UPDATE

export function FetchTypeByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_TYPEUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}



// DELETE CATEGORY

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

// VIEW BY ID CATEGORY
export function FetchCategoryByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORYBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// VIEW BY ID CATEGORY FOR UPADTE
export function FetchCategoryByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORYBYIDFORUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// ALL SUBCATEGORY
export function FetchAllSubCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALLSUBCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// VIEW BY ID SUBCATEGORYBYID
export function FetchSubCategoryByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_SUBCATEGORYBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//VIEW  BY ID SUBCATEGORYBYID FOR UPADTE
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

//VIEW  BY ID DEPARMENT

export function FetchDepartmentByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DEPARTMENTBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

//VIEW  BY ID DEPARMENT FOR UPDATE

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

// DELETE PRSLIP

export function DeletePrslipReducer(state = initialState, action) {
    switch (action.type) {
        case "DEL_PRSLIP":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// VIEW BY ID OUTWARD
export function FetchOutwardByIdReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_OUTWARDBYID":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// VIEW BY ID OUTWARD FRO UPADTE

export function FetchOutwardByIdUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_OUTWARDBYIDUPDATE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// VIEW DATE WISE 

export function FetchDateWiseReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATEWISE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// VIEW DEPARTMEMT MANAGER

export function FetchManagerReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_D_MAGAER":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// VIEW OUTWATRD REPORT

export function FetchOutwardReportReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_OUTWARDREPORT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// VIEW FINISH PRO

export function FetchFinishProReportReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_FINISHPRO":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}


// GET HISTORY

export function FetchHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_HISTORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}




//Add FULLOUTWARD

export function AllOutwardGetReducer(state = initialState, action) {
    switch (action.type) {
      case "PR_SLIPDATA":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }


