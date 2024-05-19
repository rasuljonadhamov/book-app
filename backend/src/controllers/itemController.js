// src/controllers/itemControllers.js
export const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems(req.params.collectionId);
    res.send(items);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export const createItem = async (req, res) => {
  try {
    const item = await itemService.createItem(
      req.params.collectionId,
      req.body
    );
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send({ error: error.message });
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
