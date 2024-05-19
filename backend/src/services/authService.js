import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const register = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ username, password: hashedPassword });
};

const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) throw new Error("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    "your_jwt_secret",
    { expiresIn: "1h" }
  );
  return { user, token };
};

export { register, login };
