import { DataTypes } from "sequelize";

const ItemModel = (sequelize) => {
  const Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Item;
};

export default ItemModel;
