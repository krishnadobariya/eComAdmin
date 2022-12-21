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

// Add TYPECATEGORY
export function AddCategoryTypeReducer(state = initialState, action) {
  switch (action.type) {
    case "Add_CATEGORYTYPE":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//Add DEPARTMENT

export function AddDepartmentTypeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_DEPARTMENT":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//Add OUTWARD

export function AddOutwardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_OUTWARD":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//Add OUTWARD

export function AddAllOutwardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_OUTALLWARD":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// add loaction

export function AddLocationTypeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_LOCATION":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
