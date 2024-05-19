import {
  getUsers,
  blockUser,
  unblockUser,
  deleteUser,
  makeAdmin,
  removeAdmin,
} from "../services/adminService.js";

const getUsersHandler = async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const blockUserHandler = async (req, res) => {
  try {
    await blockUser(req.params.id);
    res.send({ message: "User blocked successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const unblockUserHandler = async (req, res) => {
  try {
    await unblockUser(req.params.id);
    res.send({ message: "User unblocked successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const makeAdminHandler = async (req, res) => {
  try {
    await makeAdmin(req.params.id);
    res.send({ message: "User granted admin access" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const removeAdminHandler = async (req, res) => {
  try {
    await removeAdmin(req.params.id);
    res.send({ message: "Admin access removed" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export {
  getUsersHandler as getUsers,
  blockUserHandler as blockUser,
  unblockUserHandler as unblockUser,
  deleteUserHandler as deleteUser,
  makeAdminHandler as makeAdmin,
  removeAdminHandler as removeAdmin,
};
