import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import routes from "./routes/index.js";
import authRoutes from "./routes/userRoutes.js";
import { authenticateToken, isAdmin } from "./middleware/authMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);

app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully.",
    user: req.user,
  });
});

app.get("/api/admin", authenticateToken, isAdmin, (req, res) => {
  res.json({ message: "Admin route accessed successfully.", user: req.user });
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
