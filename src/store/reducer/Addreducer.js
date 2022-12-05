export const initialState = {
    data: {},
    loading: true,
  };
  
  // ADD PRODUCT
export function AddProductReducer(state = initialState, action) {
    switch (action.type) {
      case "Add_PRODUCT":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
}

// ADD CATEGORY
export function AddCategoryReducer(state = initialState, action) {
    switch (action.type) {
      case "Add_CATEGORY":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
}

// ADD SUBCATEGORY
export function AddSubCategoryReducer(state = initialState, action) {
    switch (action.type) {
      case "Add_SUBCATEGORY":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
}

// Add typecategory
export function AddCategoryTypeReducer(state = initialState, action) {
    switch (action.type) {
      case "Add_CATEGORYTYPE":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
}

//Add Department

export function AddDepartmentTypeReducer(state = initialState, action){
  switch (action.type){
    case "ADD_DEPARTMENT":
      return {data: action.payload, loading: false};
    default:
      return state;
  }
}

//Add OUTWARD

export function AddOutwardReducer(state = initialState, action){
  switch (action.type){
    case "ADD_OUTWARD":
      return {data: action.payload, loading: false};
    default:
      return state;
  }
}