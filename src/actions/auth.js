import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT,
  REMOVE_AUTHENTICATE_USER,
} from "./actionTypes";
import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";

export function loginStart() {
  return {
    type: LOGIN_START,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(loginStart());

    const url = APIUrls.login();
    console.log("login fired", url, email, password);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then(
        (response) => response.json()
        // console.log("data", data);
      )
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          dispatch(loginSuccess(data));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function signUp(email, password, role, name) {
  return (dispatch) => {
    const url = APIUrls.signup();
    console.log("fetching url", url, email, password, role, name);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        role,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        console.log("data.data", data.data);
        console.log("data.data.user", data.data.user);
        console.log("data.success", data.success);
        if (data.success) {
          // do something
          console.log("signup successful");
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        console.log("signupfailed");
        dispatch(signupFailed(data.message));
      })
      .catch((err) => console.log("errorin fetching", err));
  };
}

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function removeAuthUser() {
  return {
    type: REMOVE_AUTHENTICATE_USER,
  };
}
