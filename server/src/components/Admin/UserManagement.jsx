import { useAdmin } from "../../hooks/useAdmin";

const UserManagement = () => {
  const { users, blockUser, unblockUser, deleteUser, makeAdmin, removeAdmin } =
    useAdmin();

  return (
    <div className="user-management">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <p>{user.email}</p>
          <button onClick={() => blockUser(user.id)}>Block</button>
          <button onClick={() => unblockUser(user.id)}>Unblock</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          {user.isAdmin ? (
            <button onClick={() => removeAdmin(user.id)}>Remove Admin</button>
          ) : (
            <button onClick={() => makeAdmin(user.id)}>Make Admin</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserManagement;
