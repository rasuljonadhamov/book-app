import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode(token);
  const isExpired = decodedToken.exp * 1000 < Date.now();

  if (isExpired) {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  if (decodedToken.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
