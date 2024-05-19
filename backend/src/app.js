import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/index.js";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api", itemRoutes);
app.use("/api", commentRoutes);

db.sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });
