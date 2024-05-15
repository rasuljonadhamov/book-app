import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "collection_management",
  "username",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
