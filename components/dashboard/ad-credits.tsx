// File: /components/dashboard/ad-credits.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AdCredits() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Ad Credits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-24">
          <p className="text-muted-foreground">Coming Soon</p>
        </div>
      </CardContent>
    </Card>
  )
}
