import axios from "axios";

const API_URL = "http://localhost:5000/api/collections";

export const getCollections = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCollection = async (collectionData) => {
  const response = await axios.post(API_URL, collectionData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const createCollection = async (collection) => {
  const response = await axios.post(API_URL, collection);
  return response.data;
};

export const deleteCollection = async (collectionId) => {
  await axios.delete(`${API_URL}/${collectionId}`);
};

export const updateCollection = async (collectionId, updatedCollection) => {
  const response = await axios.put(
    `${API_URL}/collections/${collectionId}`,
    updatedCollection
  );
  return response.data;
};
