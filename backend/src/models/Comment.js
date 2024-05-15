import { DataTypes } from "sequelize";

const CommentModel = (sequelize) => {
  const Comment = sequelize.define("Comment", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Comment;
};

export default CommentModel;
