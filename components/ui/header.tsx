import React from 'react';
import NavigationMenu from '@/components/ui/navigation-menu';
import ThemeToggle from '@/components/ui/theme-toggle';

const Header = () => {
  return (
    <header>
      <NavigationMenu />
      <ThemeToggle />
    </header>
  );
};

export default Header;
