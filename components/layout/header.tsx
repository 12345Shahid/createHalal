// File: /components/layout/header.tsx
import { ThemeToggle } from '../preferences/ThemeToggle';
import { UserMenu } from '../auth/UserMenu';
import { useAuthContext } from '@/contexts/AuthContext';

export function Header() {
  const { user } = useAuthContext();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Blog Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {user && <UserMenu />}
        </div>
      </div>
    </header>
  );
}
