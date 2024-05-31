import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    const user = await apiLogin(data);
    setUser(user);
    navigate("/");
  };

  const register = async (username, password) => {
    const newUser = await apiRegister(username, password);
    setUser(newUser);
    navigate("/");
  };

  const logout = async () => {
    await apiLogout();
    setUser(null);
    navigate("/login");
  };

  return {
    user,
    login,
    register,
    logout,
  };
};

export const useAuth = () => {
  return useContext(AuthContext);
};
