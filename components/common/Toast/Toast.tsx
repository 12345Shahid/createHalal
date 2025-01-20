// /components/common/Toast/Toast.tsx
// Individual toast notification component

import { useEffect } from 'react';
import { ToastType } from './ToastManager';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <div className={`${typeStyles[type]} text-white p-4 rounded-lg shadow-lg`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={onClose} className="ml-4 hover:opacity-75">×</button>
      </div>
    </div>
  );
} 