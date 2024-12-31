// File: /components/layout/header.tsx
import Link from 'next/link'
import Image from 'next/image'
import { MainNav } from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="CreateHalal" width={32} height={32} />
          <span className="font-bold">CreateHalal</span>
        </Link>
        <div className="flex items-center space-x-4">
          <MainNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
