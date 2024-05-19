import Item from "../models/Item";

const getItems = async (collectionId) => {
  return await Item.findAll({ where: { collectionId } });
};

const createItem = async (collectionId, data) => {
  data.collectionId = collectionId;
  return await Item.create(data);
};

const updateItem = async (id, data) => {
  await Item.update(data, { where: { id } });
  return await Item.findByPk(id);
};

const deleteItem = async (id) => {
  await Item.destroy({ where: { id } });
};

const getItem = async (id) => {
  return await Item.findByPk(id);
};

const addItemComment = async (itemId, comment) => {
  const item = await Item.findByPk(itemId);
  const newComment = await item.createComment(comment);
  return newComment;
};

const likeItem = async (id) => {
  const item = await Item.findByPk(id);
  item.likes += 1;
  await item.save();
  return item;
};

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  getItem,
  addItemComment,
  likeItem,
};
