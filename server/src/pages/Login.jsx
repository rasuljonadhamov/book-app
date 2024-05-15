import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (error) {
      setError("Login failed: Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
        <Link
          to={"/register"}
          className="w-full block text-center mt-2 bg-gray-400  p-2 rounded"
          type="button"
        >
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
