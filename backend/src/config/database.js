import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "collection_management",
  "root",
  "rasuljon!@#",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
