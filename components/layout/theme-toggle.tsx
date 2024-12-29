// components/layout/theme-toggle.tsx
// A button to toggle light/dark theme.

"use client"

import { useTheme } from "@/components/layout/theme-provider"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <SunIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  )
}
