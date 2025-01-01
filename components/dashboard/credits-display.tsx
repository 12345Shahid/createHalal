// File: /components/dashboard/credits-display.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDashboard } from "@/hooks/use-dashboard"

export function CreditsDisplay() {
  const { totalCredits } = useDashboard()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Total Credits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{totalCredits}</div>
        <p className="text-xs text-muted-foreground mt-1">
          Available for content generation
        </p>
      </CardContent>
    </Card>
  )
}
