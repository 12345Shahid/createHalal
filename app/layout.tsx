// File: /app/layout.tsx
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CreateHalal - AI Content Creation Tools',
  description: 'Create amazing halal content for blogs, YouTube, and more with AI assistance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
  )
}

// File: /app/page.tsx
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Create Amazing Halal Content with AI
            </h1>
            <p className="text-xl mb-8">
              Discover an all-in-one platform built to help you create amazing content,
              boost your marketing, and streamline your programming tasks – all while
              staying true to Halal values.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/api/placeholder/800/600"
              alt="Hero illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      {/* Additional sections will go here */}
    </div>
  )
}
