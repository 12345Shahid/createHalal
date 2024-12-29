// layout.tsx
// This is the root layout file for the application. It wraps all pages with a consistent layout, including providers and metadata.

import { ReactNode } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ThemeProvider from "@/components/layout/theme-provider"
import "@/app/globals.css"

export const metadata = {
  title: "CreateHalal - AI Tools for Halal Content Creation",
  description: "A platform to create halal content, streamline workflows, and grow your business ethically."
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
