import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginSuccess,
  loginRequest,
  loginError,
  logoutSuccess,
  logoutRequest,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserRequest,
  getCurrentUserError,
} from "./auth-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post("/users/login", credentials);
    dispatch(loginSuccess(data));
    token.set(data.token);
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const { data } = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default {
  token,
  register,
  login,
  logout,
  getCurrentUser,
};
