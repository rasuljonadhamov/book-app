import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="login-container flex flex-col  items-center justify-center">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-56">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-lg border  "
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-lg border  "
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white border-none rounded-md py-2"
        >
          Login
        </button>
        <Link to={"/register"}>Do not you have an account ? </Link>
      </form>
    </div>
  );
};

export default Login;
