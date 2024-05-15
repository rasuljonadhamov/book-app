import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users").then((response) => setUsers(response.data));
  }, []);

  const handleUserAction = (userId, action) => {
    axios.post(`/api/admin/users/${userId}/${action}`).then(() => {
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, status: action } : user
        )
      );
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Page</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.status}
            <button
              onClick={() => handleUserAction(user.id, "block")}
              className="ml-2 p-1 bg-red-500 text-white rounded"
            >
              Block
            </button>
            <button
              onClick={() => handleUserAction(user.id, "unblock")}
              className="ml-2 p-1 bg-green-500 text-white rounded"
            >
              Unblock
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
