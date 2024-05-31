import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Item = sequelize.define("Item", {
  collectionId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Collections",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_string1_value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_string2_value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_string3_value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_int1_value: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  custom_int2_value: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  custom_int3_value: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Item;
