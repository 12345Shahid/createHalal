export const fetchUsers = async () => {
  const response = await fetch('/api/admin/manageUsers');
  return response.json();
};

export const fetchStatistics = async () => {
  const response = await fetch('/api/admin/getStatistics');
  return response.json();
};

export const blockUser = async (userId: string) => {
  await fetch('/api/admin/manageUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, action: 'block' })
  });
};

export const unblockUser = async (userId: string) => {
  await fetch('/api/admin/manageUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, action: 'unblock' })
  });
};

export const fetchAdmins = async () => {
  const response = await fetch('/api/admin/manageAdmins');
  return response.json();
};

export const createAdmin = async (email: string, password: string, role: string) => {
  await fetch('/api/admin/manageAdmins', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role })
  });
};

export const deleteAdmin = async (adminId: string) => {
  await fetch('/api/admin/manageAdmins', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adminId })
  });
}; 