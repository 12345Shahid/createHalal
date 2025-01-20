// /components/common/ThemeToggle.tsx
// Toggle switch for light/dark theme

import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
} 