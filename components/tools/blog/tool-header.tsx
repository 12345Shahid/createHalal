//components/tools/blog/tool-header.tsx

interface ToolHeaderProps {
  title?: string
  description?: string
}

export function ToolHeader({ title, description }: ToolHeaderProps) {
  return (
    <header className="mb-8">
      {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </header>
  )
}

