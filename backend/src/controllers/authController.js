import * as authService from "../services/authService.js";

const register = async (req, res) => {
  try {
    const user = await authService.register(
      req.body.username,
      req.body.password
    );
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.login(
      req.body.username,
      req.body.password
    );
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

export { register, login };
