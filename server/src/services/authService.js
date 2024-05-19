import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/auth/register`, data);
  return response.data;
};

export const logout = async () => {
  await axios.post(`${API_URL}/auth/logout`);
};
