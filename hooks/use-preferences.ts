// /hooks/use-preferences.ts
// Custom hook for managing user preferences

import { useState, useCallback } from 'react';
import { auth } from '@/lib/tools/blog/auth/firebase-config';

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  defaultExportFormat: 'txt' | 'pdf' | 'docx';
}

export function usePreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: 'light',
    language: 'en',
    defaultExportFormat: 'txt'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const savePreferences = useCallback(async (newPreferences: Partial<UserPreferences>) => {
    try {
      setLoading(true);
      setError(null);

      const token = await auth.currentUser?.getIdToken();
      const response = await fetch('/api/tools/blog/preferences/save-settings', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPreferences)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setPreferences(prev => ({ ...prev, ...newPreferences }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save preferences');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    preferences,
    loading,
    error,
    savePreferences
  };
}
