// src/models/index.js
import sequelize from "../config/database.js";
import User from "./User.js";
import Collection from "./Collection.js";
import Item from "./Item.js";
import Comment from "./Comment.js";

// Define relationships
User.hasMany(Collection, { foreignKey: "userId" });
Collection.belongsTo(User, { foreignKey: "userId" });

Collection.hasMany(Item, { foreignKey: "collectionId" });
Item.belongsTo(Collection, { foreignKey: "collectionId" });

Item.hasMany(Comment, { foreignKey: "itemId" });
Comment.belongsTo(Item, { foreignKey: "itemId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

const db = {
  sequelize,
  User,
  Collection,
  Item,
  Comment,
};

export default db;
