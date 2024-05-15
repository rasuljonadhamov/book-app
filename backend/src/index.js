import express from "express";
import cors from "cors";
import sequelize from "./config/database";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
