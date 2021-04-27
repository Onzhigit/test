import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  USER_LOGOUT,
  TOGGLE_LOADING_ON,
  TOGGLE_LOADING_OFF,
} from "../redux/types";
import { registrationAPI } from "../api/auth-api";

const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

const registrationFail = (data) => ({
  type: REGISTRATION_FAIL,
  payload: data,
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});
const userLogout = () => ({
  type: USER_LOGOUT,
});

const toggleLoadingOn = () => ({
  type: TOGGLE_LOADING_ON,
});

const toggleLoadingOff = () => ({
  type: TOGGLE_LOADING_OFF,
});

export const loginAction = (iin, password) => async (dispatch) => {
  dispatch(toggleLoadingOn());
  localStorage.setItem("iin", iin);
  localStorage.setItem("password", password);
  setTimeout(() => {
    dispatch(toggleLoadingOff());
  }, 1500);
  dispatch(loginSuccess());
};

export const logoutAction = () => (dispatch) => {
  dispatch(userLogout());
};

export const registrationAction = (values) => async (dispatch) => {
  await registrationAPI(values);

  dispatch(registrationSuccess());
};
