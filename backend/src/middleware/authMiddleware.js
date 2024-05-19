import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.header("Authorization");

  console.log("Authorization Header:", authHeader);

  if (!authHeader) {
    return res.status(401).send({ error: "Access denied, no token provided" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.replace("Bearer ", "")
    : null;

  console.log("Token:", token);

  if (!token) {
    return res
      .status(401)
      .send({ error: "Access denied, invalid token format" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    next();
  } catch (ex) {
    console.error("Token verification failed:", ex);
    res.status(400).send({ error: "Invalid token" });
  }
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.user.id);

  if (user && user.role === "admin") {
    next();
  } else {
    res.status(403).send({ error: "Access denied" });
  }
};
