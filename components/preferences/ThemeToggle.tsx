import { usePreferences } from '@/hooks/usePreferences';

export function ThemeToggle() {
  const { preferences, updatePreferences } = usePreferences();

  const toggleTheme = () => {
    const newTheme = preferences?.theme === 'light' ? 'dark' : 'light';
    updatePreferences({ theme: newTheme });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {preferences?.theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
} 