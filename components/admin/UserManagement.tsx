import React, { useState, useEffect } from 'react';

export function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API
    const fetchUsers = async () => {
      const response = await fetch('/api/admin/manageUsers');
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  const blockUser = (userId: string) => {
    // Implement block user logic
  };

  const unblockUser = (userId: string) => {
    // Implement unblock user logic
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => blockUser(user.id)}>Block</button>
            <button onClick={() => unblockUser(user.id)}>Unblock</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 