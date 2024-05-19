import express from "express";
import * as itemControllers from "../controllers/itemController.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:collectionId/items", itemControllers.getItems);
router.post(
  "/:collectionId/items",
  authenticateJWT,
  itemControllers.createItem
);
router.put("/items/:id", authenticateJWT, itemControllers.updateItem);
router.delete("/items/:id", authenticateJWT, itemControllers.deleteItem);
router.get("/items/:id", itemControllers.getItem);
router.post(
  "/items/:itemId/comments",
  authenticateJWT,
  itemControllers.addItemComment
);
router.put("/items/:id/like", authenticateJWT, itemControllers.likeItem);

export default router;
