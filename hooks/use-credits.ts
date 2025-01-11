// /hooks/use-credits.ts
// Custom hook for managing user credits

import { useState, useCallback } from 'react';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export function useCredits() {
  const [credits, setCredits] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkCredits = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const token = await auth.currentUser?.getIdToken();
      const response = await fetch('/api/tools/blog/auth/check-credits', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setCredits(data.credits);
      return data.credits;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check credits');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    credits,
    loading,
    error,
    checkCredits
  };
}
