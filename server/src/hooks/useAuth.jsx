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

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    const user = await apiLogin(data);
    setUser(user);
    navigate("/");
  };

  const register = async (data) => {
    const user = await apiRegister(data);
    setUser(user);
    navigate("/");
  };

  const logout = async () => {
    await apiLogout();
    setUser(null);
    navigate("/");
  };

  return {
    user,
    login,
    register,
    logout,
  };
};
