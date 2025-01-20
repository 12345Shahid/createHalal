// /hooks/useAuth.ts
// Hook for managing authentication state and operations

import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { auth } from '@/lib/firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUser(user ? {
        id: user.uid,
        name: user.displayName || '',
        email: user.email || '',
        avatar: user.photoURL || undefined,
        role: 'user',
        createdAt: new Date(),
        lastLogin: new Date(),
      } : null);
      setLoading(false);
    });
  }, []);

  return { user, loading };
} 