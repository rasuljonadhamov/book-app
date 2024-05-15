const ItemModel = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
  });

  return Item;
};

export default ItemModel;
