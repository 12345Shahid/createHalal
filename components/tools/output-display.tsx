// File: /components/tools/output-display.tsx
interface OutputDisplayProps {
  content: string
  loading: boolean
}

export function OutputDisplay({ content, loading }: OutputDisplayProps) {
  if (loading) {
    return (
      <div className="border rounded-lg p-4 min-h-[200px] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="border rounded-lg p-4 min-h-[200px]">
      {content ? (
        <div className="prose max-w-none">
          {content}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          Your generated content will appear here
        </div>
      )}
    </div>
  )
}
