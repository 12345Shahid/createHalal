// File: /components/ui/container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 ${className || ''}`.trim()}>
      {children}
    </div>
  );
};

export default Container;