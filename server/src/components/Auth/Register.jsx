import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container flex flex-col items-center justify-center">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-56">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="p-2 rounded-lg border"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 rounded-lg border"
        />
        <button
          className="bg-blue-700 text-white border-none rounded-md py-2"
          type="submit"
        >
          Register
        </button>
        <Link to="/login">Do you have an account?</Link>
      </form>
    </div>
  );
};

export default Register;
