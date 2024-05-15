const CommentModel = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
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

  return Comment;
};

export default CommentModel;
