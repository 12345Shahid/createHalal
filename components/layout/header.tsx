// components/layout/header.tsx
// This is the header component for the CreateHalal application.

import Link from "next/link"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700 dark:text-green-400">
          CreateHalal
        </Link>

        {/* Navigation Menu */}
        <nav className="flex space-x-6">
          <Link href="/tools" className="hover:text-green-700 dark:hover:text-green-400">
            Tools
          </Link>
          <Link href="/blogs" className="hover:text-green-700 dark:hover:text-green-400">
            Blogs
          </Link>
          <Link href="/pricing" className="hover:text-green-700 dark:hover:text-green-400">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-green-700 dark:hover:text-green-400">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  )
}
