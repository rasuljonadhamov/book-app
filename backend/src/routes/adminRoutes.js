import express from "express";
import {
  getUsers,
  blockUser,
  unblockUser,
  deleteUser,
  makeAdmin,
  removeAdmin,
} from "../controllers/adminController.js";
import { authenticateJWT, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.use(authenticateJWT);
router.use(isAdmin);

router.get("/users", getUsers);
router.put("/block/:id", blockUser);
router.put("/unblock/:id", unblockUser);
router.delete("/delete/:id", deleteUser);
router.put("/make-admin/:id", makeAdmin);
router.put("/remove-admin/:id", removeAdmin);

export default router;
