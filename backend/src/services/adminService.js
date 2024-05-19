import User from "../models/User.js";

const getUsers = async () => {
  return await User.findAll();
};

const blockUser = async (userId) => {
  const user = await User.findByPk(userId);
  user.blocked = true;
  await user.save();
};

const unblockUser = async (userId) => {
  const user = await User.findByPk(userId);
  user.blocked = false;
  await user.save();
};

const deleteUser = async (userId) => {
  await User.destroy({ where: { id: userId } });
};

const makeAdmin = async (userId) => {
  const user = await User.findByPk(userId);
  user.role = "admin";
  await user.save();
};

const removeAdmin = async (userId) => {
  const user = await User.findByPk(userId);
  user.role = "user";
  await user.save();
};

export { getUsers, blockUser, unblockUser, deleteUser, makeAdmin, removeAdmin };
