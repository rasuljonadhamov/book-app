const express = require("express");
const {
  createCollection,
  getCollections,
  getCollectionById,
} = require("../controllers/collectionController");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

router.post("/", authenticateToken, createCollection);
router.get("/", getCollections);
router.get("/:id", getCollectionById);

module.exports = router;
