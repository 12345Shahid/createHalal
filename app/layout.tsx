// File: /app/layout.tsx
import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Ultimate Productivity Hub',
  description: 'Create amazing halal content for blogs, YouTube, and more with AI assistance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}