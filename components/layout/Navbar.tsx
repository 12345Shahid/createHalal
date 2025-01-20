// /components/layout/Navbar.tsx
// Top navigation bar component

import { UserAvatar } from '../common/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { ThemeToggle } from '../common/ThemeToggle';

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Blog Platform</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {user && <UserAvatar src={user.avatar} alt={user.name} size="sm" />}
        </div>
      </div>
    </nav>
  );
} 