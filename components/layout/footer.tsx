// components/layout/footer.tsx
// Footer component for the website, including navigation and social links.

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-green-600 dark:text-green-400">
              CreateHalal
            </h2>
            <p className="mt-2 text-sm">
              Empowering ethical content creation with AI. Halal, powerful, and user-friendly.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <nav className="space-x-6">
              <Link href="/about">
                <a className="hover:text-green-600 dark:hover:text-green-400">About</a>
              </Link>
              <Link href="/blogs">
                <a className="hover:text-green-600 dark:hover:text-green-400">Blogs</a>
              </Link>
              <Link href="/contact">
                <a className="hover:text-green-600 dark:hover:text-green-400">Contact</a>
              </Link>
              <Link href="/privacy-policy">
                <a className="hover:text-green-600 dark:hover:text-green-400">Privacy Policy</a>
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 dark:hover:text-green-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} CreateHalal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
