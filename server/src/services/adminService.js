import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const blockUser = async (userId) => {
  await axios.post(`${API_URL}/users/${userId}/block`);
};

export const unblockUser = async (userId) => {
  await axios.post(`${API_URL}/users/${userId}/unblock`);
};

export const deleteUser = async (userId) => {
  await axios.delete(`${API_URL}/users/${userId}`);
};

export const makeAdmin = async (userId) => {
  await axios.post(`${API_URL}/users/${userId}/admin`);
};

export const removeAdmin = async (userId) => {
  await axios.post(`${API_URL}/users/${userId}/remove-admin`);
};
