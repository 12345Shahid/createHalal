import { useContext } from 'react';
import { AdminContext } from '@/contexts/AdminContext';

export const useAdmin = () => {
  const { role, setRole } = useContext(AdminContext);

  const loginAsAdmin = async (email: string, password: string) => {
    const response = await fetch('/api/admin/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    setRole(data.role);
  };

  return { role, loginAsAdmin };
}; 