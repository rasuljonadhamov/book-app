import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    axios
      .post("/api/auth/register", { email, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/";
      })
      .catch((error) => setError("Error registering user" + error));
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          {error && <div className="alert alert-danger">{error}</div>}
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
        <Link
          to={"/login"}
          className="w-full block text-center mt-2 bg-gray-400  p-2 rounded"
          type="button"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
