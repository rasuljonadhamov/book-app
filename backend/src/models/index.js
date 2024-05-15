import Sequelize from "sequelize";
import sequelize from "../config/database.js";

import UserModel from "./User.js";
import CollectionModel from "./Collection.js";
import ItemModel from "./Item.js";
import CommentModel from "./Comment.js";

const User = UserModel(sequelize, Sequelize.DataTypes);
const Collection = CollectionModel(sequelize, Sequelize.DataTypes);
const Item = ItemModel(sequelize, Sequelize.DataTypes);
const Comment = CommentModel(sequelize, Sequelize.DataTypes);

User.hasMany(Collection);
Collection.belongsTo(User);
Collection.hasMany(Item);
Item.belongsTo(Collection);
Item.hasMany(Comment);
Comment.belongsTo(Item);

const db = {
  sequelize,
  User,
  Collection,
  Item,
  Comment,
};

export default db;
