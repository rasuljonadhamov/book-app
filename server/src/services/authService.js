import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};

// export const register = async (data) => {
//   const response = await axios.post(`${API_URL}/auth/register`, data);
//   return response.data;
// };
export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const logout = async () => {
  await axios.post(`${API_URL}/auth/logout`);
};
