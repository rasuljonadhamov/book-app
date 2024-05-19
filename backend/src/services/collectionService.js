import Collection from "../models/Collection.js";

const getCollections = async () => {
  return await Collection.findAll();
};

const createCollection = async (data) => {
  return await Collection.create(data);
};

const updateCollection = async (id, data) => {
  await Collection.update(data, { where: { id } });
  return await Collection.findByPk(id);
};

const deleteCollection = async (id) => {
  await Collection.destroy({ where: { id } });
};

export { getCollections, createCollection, updateCollection, deleteCollection };
