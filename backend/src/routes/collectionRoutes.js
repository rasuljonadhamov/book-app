import express from "express";
import {
  getCollections,
  updateCollection,
  createCollection,
  deleteCollection,
} from "../controllers/collectionController.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getCollections);
router.post("/", authenticateJWT, createCollection);
router.put("/:id", authenticateJWT, updateCollection);
router.delete("/:id", authenticateJWT, deleteCollection);

router.get("/", async (req, res) => {
  try {
    const collections = await Collection.findAll({
      include: [User, Item],
    });
    res.json(collections);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch collections" });
  }
});

router.post("/", authenticateJWT, async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCollection = await Collection.create({
      name,
      description,
      userId: req.user.id, 
    });
    res.status(201).json(newCollection);
  } catch (error) {
    res.status(400).send({ error: "Failed to create collection" });
  }
});

export default router;
