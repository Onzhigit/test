import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  USER_LOGOUT,
  TOGGLE_LOADING_ON,
  TOGGLE_LOADING_OFF,
} from "./types";

const initialState = {
  isAuthenticated: false,
  registrated: false,
  loading: false,
 
  error: null,
  errorMessage: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.statusText,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        error: action.payload.status,
        errorMessage: action.payload.statusText,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registrated: true,
      };
    case TOGGLE_LOADING_ON:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_LOADING_OFF:
      return {
        ...state,
        loading: false,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
