import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getItems = async (collectionId) => {
  const response = await axios.get(
    `${API_URL}/collections/${collectionId}/items`
  );
  return response.data;
};

export const createItem = async (collectionId, item) => {
  const response = await axios.post(
    `${API_URL}/collections/${collectionId}/items`,
    item
  );
  return response.data;
};

export const deleteItem = async (itemId) => {
  await axios.delete(`${API_URL}/items/${itemId}`);
};

export const updateItem = async (itemId, updatedItem) => {
  const response = await axios.put(`${API_URL}/items/${itemId}`, updatedItem);
  return response.data;
};

export const getItem = async (itemId) => {
  const response = await axios.get(`${API_URL}/items/${itemId}`);
  return response.data;
};

export const addItemComment = async (itemId, comment) => {
  const response = await axios.post(
    `${API_URL}/items/${itemId}/comments`,
    comment
  );
  return response.data;
};

export const likeItem = async (itemId) => {
  const response = await axios.post(`${API_URL}/items/${itemId}/like`);
  return response.data;
};
