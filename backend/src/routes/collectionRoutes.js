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

export default router;
