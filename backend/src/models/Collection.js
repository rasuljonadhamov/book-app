import DataTypes from "sequelize";
import sequelize from "../config/database.js";

const Collection = sequelize.define("Collection", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customFields: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

export default Collection;
