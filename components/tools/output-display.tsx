// File: /components/tools/output-display.tsx
// Component for displaying tool output with loading state

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface OutputDisplayProps {
  content: string
  loading: boolean
}

export function OutputDisplay({ content, loading }: OutputDisplayProps) {
  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <Skeleton className="h-[200px] w-full" />
        </CardContent>
      </Card>
    )
  }

  if (!content) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          Output will appear here
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6 whitespace-pre-wrap">{content}</CardContent>
    </Card>
  )
}
