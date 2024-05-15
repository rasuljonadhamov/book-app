const { Collection, Item } = require("../models");

exports.createCollection = async (req, res) => {
  const { name, description, topic, image } = req.body;
  try {
    const collection = await Collection.create({
      name,
      description,
      topic,
      image,
      UserId: req.user.id,
    });
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCollections = async (req, res) => {
  const collections = await Collection.findAll({ include: Item });
  res.json(collections);
};

exports.getCollectionById = async (req, res) => {
  const collection = await Collection.findByPk(req.params.id, {
    include: Item,
  });
  if (!collection) return res.sendStatus(404);
  res.json(collection);
};

// Other collection-related controllers
