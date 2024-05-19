import {
  getCollections,
  createCollection,
  updateCollection,
  deleteCollection,
} from "../services/collectionService.js";

const getCollectionsHandler = async (req, res) => {
  try {
    const collections = await getCollections();
    res.send(collections);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const createCollectioHandler = async (req, res) => {
  try {
    const collection = await createCollection(req.body);
    res.status(201).send(collection);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const updateCollectionHandler = async (req, res) => {
  try {
    const collection = await updateCollection(req.params.id, req.body);
    res.send(collection);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteCollectionHandler = async (req, res) => {
  try {
    await deleteCollection(req.params.id);
    res.send({ message: "Collection deleted successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export {
  getCollectionsHandler as getCollections,
  createCollectioHandler as createCollection,
  updateCollectionHandler as updateCollection,
  deleteCollectionHandler as deleteCollection,
};
