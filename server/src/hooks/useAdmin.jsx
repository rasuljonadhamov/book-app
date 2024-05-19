import { useState, useContext, createContext, useEffect } from "react";
import {
  getUsers,
  blockUser as apiBlockUser,
  unblockUser as apiUnblockUser,
  deleteUser as apiDeleteUser,
  makeAdmin as apiMakeAdmin,
  removeAdmin as apiRemoveAdmin,
} from "../services/adminService";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const admin = useProvideAdmin();
  return (
    <AdminContext.Provider value={admin}>{children}</AdminContext.Provider>
  );
};

export const useAdmin = () => {
  return useContext(AdminContext);
};

const useProvideAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const blockUser = async (userId) => {
    await apiBlockUser(userId);
    fetchUsers();
  };

  const unblockUser = async (userId) => {
    await apiUnblockUser(userId);
    fetchUsers();
  };

  const deleteUser = async (userId) => {
    await apiDeleteUser(userId);
    fetchUsers();
  };

  const makeAdmin = async (userId) => {
    await apiMakeAdmin(userId);
    fetchUsers();
  };

  const removeAdmin = async (userId) => {
    await apiRemoveAdmin(userId);
    fetchUsers();
  };

  return {
    users,
    blockUser,
    unblockUser,
    deleteUser,
    makeAdmin,
    removeAdmin,
  };
};
