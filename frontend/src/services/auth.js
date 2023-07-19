import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const login = async (credentials) => {
  return axios.post(`${BASE_URL}/login`, credentials, {
    withCredentials: true,
  });
};

const logout = async () => {
  return axios.get(`${BASE_URL}/logout`, {
    withCredentials: true,
  });
};

const register = async (userInfo) => {
  return axios.post(`${BASE_URL}/users`, userInfo, {
    withCredentials: true,
  });
};

export { login, logout, register };
