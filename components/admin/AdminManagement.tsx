import React, { useState, useEffect } from 'react';

export function AdminManagement() {
  const [admins, setAdmins] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fetch admins from API
    const fetchAdmins = async () => {
      const response = await fetch('/api/admin/manageAdmins');
      const data = await response.json();
      setAdmins(data.admins);
    };
    fetchAdmins();
  }, []);

  const createAdmin = () => {
    // Implement create admin logic
  };

  const deleteAdmin = (adminId: string) => {
    // Implement delete admin logic
  };

  return (
    <div>
      <h2>Admin Management</h2>
      <div>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={createAdmin}>Create Admin</button>
      </div>
      <ul>
        {admins.map((admin) => (
          <li key={admin.id}>
            {admin.email}
            {admin.role !== 'prime-admin' && (
              <button onClick={() => deleteAdmin(admin.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
} 