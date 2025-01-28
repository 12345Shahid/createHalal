// File: /components/ui/icons.tsx
import React from 'react';

// Spinner Icon Component
export const SpinnerIcon = ({ className }: { className?: string }) => (
  <svg
    className={`animate-spin ${className || ''}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

// Google Icon Component
export const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ${className || ''}`}
    viewBox="0 0 48 48"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.69 0 6.82 1.22 9.31 3.22l7.02-7.02C36.07 2.44 30.39 0 24 0 14.73 0 6.84 4.83 2.72 11.78l8.2 6.38C13.55 12.48 18.44 9.5 24 9.5z"
    />
    <path
      fill="#34A853"
      d="M24 48c5.62 0 10.33-1.87 13.77-5.09l-6.43-5.03c-1.74 1.18-4.08 1.87-7.34 1.87-5.63 0-10.39-3.73-12.09-8.8H5.34l-7.62 5.97C5.9 43.45 14.4 48 24 48z"
    />
    <path
      fill="#4A90E2"
      d="M46.73 24.63c0-1.9-.32-3.94-.78-5.85H24v9.87h12.87c-.52 3.38-2.24 6.25-4.99 8.2l7.64 5.98C43.94 37.78 46.73 31.7 46.73 24.63z"
    />
    <path
      fill="#FBBC05"
      d="M11.91 27.07c-.44-1.3-.69-2.69-.69-4.07s.25-2.77.69-4.07L4.29 13.35C2.62 16.58 1.6 20.2 1.6 24s1.02 7.42 2.69 10.65l7.62-5.97z"
    />
  </svg>
);

// Icons Object Export
const Icons = {
  spinner: SpinnerIcon,
  google: GoogleIcon,
};

export default Icons;