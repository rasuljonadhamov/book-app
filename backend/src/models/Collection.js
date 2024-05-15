const CollectionModel = (sequelize, DataTypes) => {
  const Collection = sequelize.define("Collection", {
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

  return Collection;
};

export default CollectionModel;
