import { useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebase/client';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <img 
          src={user?.photoURL || '/default-avatar.png'} 
          alt="User avatar" 
          className="w-8 h-8 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 