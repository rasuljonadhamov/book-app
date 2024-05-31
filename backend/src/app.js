import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/index.js";
import sequelize from "./config/database.js";
import User from "./models/User.js";
import Collection from "./models/Collection.js";
import Item from "./models/Item.js";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api", itemRoutes);
app.use("/api", commentRoutes);

const checkAndAddColumn = async (tableName, columnName, columnDefinition) => {
  const [results, metadata] = await sequelize.query(`
    SELECT COLUMN_NAME 
    FROM INFORMATION_SCHEMA.COLUMNS 
    WHERE TABLE_SCHEMA = '${sequelize.config.database}' 
      AND TABLE_NAME = '${tableName}' 
      AND COLUMN_NAME = '${columnName}'
  `);

  if (results.length === 0) {
    await sequelize
      .getQueryInterface()
      .addColumn(tableName, columnName, columnDefinition);
    console.log(`Column '${columnName}' added to '${tableName}' table.`);
  } else {
    console.log(
      `Column '${columnName}' already exists in '${tableName}' table.`
    );
  }
};

const syncModels = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await checkAndAddColumn("Collections", "userId", {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });


    await User.sync();
    await Collection.sync();
    await Item.sync();

    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to sync the database:", error);
  }
};

syncModels();

db.sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });
