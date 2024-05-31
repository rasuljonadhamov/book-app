import Comment from "../models/Comment.js";

export const getComments = async (itemId) => {
  return await Comment.findAll({ where: { itemId } });
};

export const createComment = async (data) => {
  return await Comment.create(data);
};

export const deleteComment = async (id) => {
  await Comment.destroy({ where: { id } });
};

