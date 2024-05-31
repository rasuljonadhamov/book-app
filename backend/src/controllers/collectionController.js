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

const createCollectionHandler = async (req, res) => {
  const { userId, name, description, category, image, customFields } = req.body;

  const customFieldState = (index) => customFields[index]?.state || false;
  const customFieldName = (index) => customFields[index]?.name || null;

  try {
    const collection = await Collection.create({
      userId,
      name,
      description,
      category,
      image,
      custom_string1_state: customFieldState(0),
      custom_string1_name: customFieldName(0),
      custom_string2_state: customFieldState(1),
      custom_string2_name: customFieldName(1),
      custom_string3_state: customFieldState(2),
      custom_string3_name: customFieldName(2),
      custom_int1_state: customFieldState(3),
      custom_int1_name: customFieldName(3),
      custom_int2_state: customFieldState(4),
      custom_int2_name: customFieldName(4),
      custom_int3_state: customFieldState(5),
      custom_int3_name: customFieldName(5),
    });
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ error: "Failed to create collection" });
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
  updateCollectionHandler as updateCollection,
  deleteCollectionHandler as deleteCollection,
  createCollectionHandler as createCollection,
};
