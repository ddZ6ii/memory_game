import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const create = async (gameSettings) => {
  return axios.post(`${BASE_URL}/games`, gameSettings, {
    withCredentials: true,
  });
};

export { create };
