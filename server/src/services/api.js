import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchLatestItems = () => api.get("/items/latest");
export const fetchTopCollections = () => api.get("/collections/top");
export const fetchTags = () => api.get("/tags");
export const fetchCollectionById = (id) => api.get(`/collections/${id}`);
export const fetchUserCollections = () => api.get("/user/collections");
export const fetchAdminUsers = () => api.get("/admin/users");

export const blockUser = (userId) => api.post(`/admin/users/${userId}/block`);
export const unblockUser = (userId) =>
  api.post(`/admin/users/${userId}/unblock`);

export default api;
