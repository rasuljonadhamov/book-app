
import express from "express";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/commentController.js";
import { authenticateJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticateJWT);

router.post("/comments", createComment);
router.delete("/comments/:id", deleteComment);
router.get("/comments", getComments);

export default router;
