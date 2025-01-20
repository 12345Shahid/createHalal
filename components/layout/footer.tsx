// File: /components/layout/footer.tsx
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} Your Blog Dashboard. All rights reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
