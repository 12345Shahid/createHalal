//components/tools/blog/blog-tool-layout.tsx


import { ReactNode } from "react"
import { ToolHeader } from "./tool-header"

interface BlogToolLayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export function BlogToolLayout({ children, title, description }: BlogToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <ToolHeader title={title} description={description} />
      <main className="mt-8">{children}</main>
    </div>
  )
}

