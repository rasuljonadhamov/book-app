import * as authService from "../services/authService.js";

const register = async (req, res) => {
  try {
    console.log("Received registration request:", req.body); // Log the request body
    const user = await authService.register(
      req.body.username,
      req.body.password
    );
    res.status(201).send(user);
  } catch (error) {
    console.error("Registration error:", error); // Log the error
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log("Received login request:", req.body); // Log the request body
    const { user, token } = await authService.login(
      req.body.username,
      req.body.password
    );
    res.send({ user, token });
  } catch (error) {
    console.error("Login error:", error); // Log the error
    res.status(400).send({ error: error.message });
  }
};

export { register, login };
