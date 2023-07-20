import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const create = async (gameInfo) => {
  return axios.post(`${BASE_URL}/users-games`, gameInfo, {
    withCredentials: true,
  });
};

export { create };
