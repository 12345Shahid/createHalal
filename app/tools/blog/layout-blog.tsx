import { ReactNode } from "react"

export default function BlogToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        {/* Add navigation for blog tools here */}
      </nav>
      <main>{children}</main>
    </div>
  )
}

