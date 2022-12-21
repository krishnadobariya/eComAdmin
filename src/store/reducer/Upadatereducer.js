export const initialState = {
    data: {},
    loading: true
}
// UPDATE PRODUCT-----

export function UpadteProductReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_PRODUCT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// UPDATE TYPE-----

export function UpadteTypeReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_TYPE":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// UPADTE SUBCATEGORY

export function UpadteSubcategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_SUBCATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// UPADTE CATEGORY

export function UpadtecategoryReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_CATEGORY":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// UPADTE CATEGORY

export function UpadteOutwardReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_OUTWARD":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}
// UPDATE_DEPARTMENT

export function UpadteDepartmentReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_DEPARTMENT":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}

// UPDATE LOCATION

export function UpadteLocationReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return { data: action.payload, loading: false };
        default:
            return state;
    }
}