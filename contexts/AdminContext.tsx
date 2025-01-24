import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  role: 'prime-admin' | 'admin' | 'user';
  setRole: (role: 'prime-admin' | 'admin' | 'user') => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<'prime-admin' | 'admin' | 'user'>('user');

  return (
    <AdminContext.Provider value={{ role, setRole }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext must be used within an AdminProvider');
  }
  return context;
}; 