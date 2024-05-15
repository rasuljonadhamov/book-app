import express from "express";
import {
  register,
  login,
  getUserCollections,
} from "../controllers/userController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/collections", authenticateToken, getUserCollections);

export default router;
