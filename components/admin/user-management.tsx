import React from 'react';
import { useAdmin } from '@/hooks/use-admin';

const UserManagement = () => {
  const { users, blockUser, unblockUser, deleteUserHistory, sendNotification, addCredits, deleteAdmin } = useAdmin();

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email}
            <button onClick={() => blockUser(user.id)}>Block</button>
            <button onClick={() => unblockUser(user.id)}>Unblock</button>
            <button onClick={() => deleteUserHistory(user.id)}>Delete History</button>
            <button onClick={() => sendNotification(user.id)}>Send Notification</button>
            <button onClick={() => addCredits(user.id)}>Add Credits</button>
            <button onClick={() => deleteAdmin(user.id)}>Delete Admin</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
