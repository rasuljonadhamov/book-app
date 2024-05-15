import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleBlock = (id) => {
    axios
      .post(`/api/admin/users/${id}/block`)
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, blocked: true } : user
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleUnblock = (id) => {
    axios
      .post(`/api/admin/users/${id}/unblock`)
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, blocked: false } : user
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/admin/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const handleAddAdmin = (id) => {
    axios
      .post(`/api/admin/users/${id}/admin`)
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, role: "admin" } : user
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const handleRemoveAdmin = (id) => {
    axios
      .post(`/api/admin/users/${id}/remove-admin`)
      .then(() => {
        setUsers(
          users.map((user) =>
            user.id === id ? { ...user, role: "user" } : user
          )
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Management</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Blocked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.blocked ? "Yes" : "No"}</td>
              <td>
                {user.blocked ? (
                  <button
                    onClick={() => handleUnblock(user.id)}
                    className="btn btn-secondary me-2"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    onClick={() => handleBlock(user.id)}
                    className="btn btn-warning me-2"
                  >
                    Block
                  </button>
                )}
                {user.role === "admin" ? (
                  <button
                    onClick={() => handleRemoveAdmin(user.id)}
                    className="btn btn-secondary me-2"
                  >
                    Remove Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddAdmin(user.id)}
                    className="btn btn-primary me-2"
                  >
                    Make Admin
                  </button>
                )}
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
