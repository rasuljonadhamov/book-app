import jwt from "jsonwebtoken";
import User from "../models/User.js";

const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).send({ error: "Access denied, no token provided" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

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
