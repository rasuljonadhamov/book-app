// import express from "express";
// import * as commentController from "../controllers/commentController.js";
// import * as authenticateJWT from "../middleware/authMiddleware.js";
// const router = express.Router();

// router.get("/:itemId/comments", commentController.getComments);
// router.post("/comments", authenticateJWT, commentController.createComment);
// router.delete(
//   "/comments/:id",
//   authenticateJWT,
//   commentController.deleteComment
// );

// export default router;
// src/routes/commentRoutes.js

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
