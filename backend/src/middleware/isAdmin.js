import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).send({ error: "Access denied" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send({ error: "Internal server error" });
  }
};
