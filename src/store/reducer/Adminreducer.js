export const initialState = {
    data: {},
    loading: true,
  };
  
  // login
  export function Admin_LoginReducer(state = initialState, action) {
    switch (action.type) {
      case "ADMIN_LOGIN":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }