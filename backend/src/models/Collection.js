import { DataTypes } from "sequelize";

const CollectionModel = (sequelize) => {
  const Collection = sequelize.define("Collection", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Collection;
};

export default CollectionModel;
