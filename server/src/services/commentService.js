import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getComments = async (itemId) => {
  const response = await axios.get(`${API_URL}/items/${itemId}/comments`);
  return response.data;
};

export const addComment = async (itemId, comment) => {
  const response = await axios.post(
    `${API_URL}/items/${itemId}/comments`,
    comment
  );
  return response.data;
};

export const deleteComment = async (commentId) => {
  await axios.delete(`${API_URL}/comments/${commentId}`);
};
