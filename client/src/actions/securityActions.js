import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, LOGOUT } from "./types";
import setJWT from "../securityUtils/setJWT";
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser) => async dispatch => {
    try {
        await axios.post("/api/usuario/signup", newUser);
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });

        dispatch(login({
          "usuario": newUser.usuario,
          "password": newUser.password
        }));
    } catch (error) {
        dispatch({  
            type: GET_ERRORS,
            payload: error.response.data    
        });
    }
}

export const login = LoginRequest => async dispatch => {
    try {
      // post => Login Request
      const res = await axios.post("/api/usuario/signin", LoginRequest);
      // extract token from res.data
      const { token } = res.data;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      // set our token in header ***
      setJWT(token);

      const decoded = jwt_decode(token);

      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });

      window.location.href="/admin-dashboard";

  } catch (err) {
      debugger
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWT(false);
    dispatch({
        type: LOGOUT,
        payload: {
          user: {},
          token: false
        }
      });
}

