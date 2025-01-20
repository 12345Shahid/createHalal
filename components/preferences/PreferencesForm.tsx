import { useState } from 'react';
import { usePreferences } from '@/hooks/usePreferences';
import { UserPreferences } from '@/types/preferences';
import type { FormEvent, ChangeEvent } from 'react';

export function PreferencesForm(): JSX.Element {
  const { preferences, loading, error, updatePreferences } = usePreferences();
  const [formData, setFormData] = useState<Partial<UserPreferences>>(preferences || {});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updatePreferences(formData);
  };

  const handleChange = (key: keyof UserPreferences, value: any) => {
    setFormData((prev: Partial<UserPreferences>) => ({ ...prev, [key]: value }));
  };

  if (loading) return <PreferencesSkeleton />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Theme</label>
        <select
          value={formData.theme}
          onChange={(e) => handleChange('theme', e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      {/* Add other preference fields */}
      <button type="submit" disabled={loading}>
        Save Preferences
      </button>
    </form>
  );
} 