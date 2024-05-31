import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const register = async (username, password) => {
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ username, password: hashedPassword });

  const token = jwt.sign({ id: newUser.id }, "your_jwt_secret", {
    expiresIn: "1h",
  });

  return { user: newUser, token };
};

const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
    expiresIn: "1h",
  });

  return { user, token };
};

export { register, login };
