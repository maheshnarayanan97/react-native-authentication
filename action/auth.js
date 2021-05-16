import axios from "axios";
// import { setAlert } from "./alert";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./type";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://devgroceryapi.spericorn.com/api/auth/login",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Authenticated successfully", "success"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch(setAlert("Error Authenticating", "error"));
  }
};

export const signup =
  ({ phone, email, username, password, cPassword }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      phone,
      email,
      username,
      password,
      cPassword,
    });

    try {
      const res = await axios.post(
        "https://devgroceryapi.spericorn.com/api/auth/register",
        body,
        config
      );

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });

      dispatch(login(email, password));
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
      });

      dispatch(setAlert("Error Authenticating", "error"));
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setAlert("logout successful.", "success"));
  dispatch({ type: LOGOUT });
};
