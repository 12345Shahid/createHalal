// /components/common/UserMenu.tsx
// Dropdown menu for user actions

import { useState, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { UserAvatar } from './UserAvatar';

export function UserMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  if (!user) return null;

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <UserAvatar src={user.avatar} alt={user.name} size="sm" />
        <span>{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <div className="py-1">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>
            <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 