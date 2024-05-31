import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems(req.params.collectionId);
    res.send(items);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const createItem = async (req, res) => {
  const { collectionId, name, tags, customStringValues, customIntValues } =
    req.body;

  try {
    const item = await Item.create({
      collectionId,
      name,
      tags,
      custom_string1_value: customStringValues[0],
      custom_string2_value: customStringValues[1],
      custom_string3_value: customStringValues[2],
      custom_int1_value: customIntValues[0],
      custom_int2_value: customIntValues[1],
      custom_int3_value: customIntValues[2],
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: "Failed to create item" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body);
    res.send(item);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await itemService.deleteItem(req.params.id);
    res.send({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const item = await itemService.getItem(req.params.id);
    res.send(item);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const addItemComment = async (req, res) => {
  try {
    const comment = await itemService.addItemComment(
      req.params.itemId,
      req.body
    );
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const likeItem = async (req, res) => {
  try {
    const item = await itemService.likeItem(req.params.id);
    res.send(item);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const getItemsByCollection = async (req, res) => {
  const { collectionId } = req.params;

  try {
    const items = await Item.findAll({ where: { collectionId } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
};