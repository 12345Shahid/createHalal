import { useAuthContext } from '@/contexts/AuthContext';
import { usePreferences } from '@/hooks/usePreferences';
import Link from 'next/link';

export function Sidebar() {
  const { user } = useAuthContext();
  const { preferences } = usePreferences();

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '📊' },
    { label: 'Preferences', href: '/preferences', icon: '⚙️' },
    { label: 'Profile', href: '/profile', icon: '👤' },
  ];

  return (
    <aside className={`
      w-64 h-screen bg-white dark:bg-gray-800 
      ${preferences?.toolbarPosition === 'side' ? 'block' : 'hidden md:block'}
    `}>
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 