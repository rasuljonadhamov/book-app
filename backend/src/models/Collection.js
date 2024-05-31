import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Collection = sequelize.define("Collection", {
  // userId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: "Users",
  //     key: "id",
  //   },
  //   onDelete: "SET NULL",
  //   onUpdate: "CASCADE",
  // },
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
  custom_string1_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  custom_string1_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_string2_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  custom_string2_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_string3_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  custom_string3_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_int1_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  custom_int1_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_int2_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  custom_int2_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  custom_int3_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  custom_int3_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Collection;
