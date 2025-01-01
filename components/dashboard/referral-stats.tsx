// File: /components/dashboard/referral-stats.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDashboard } from "@/hooks/use-dashboard"

export function ReferralStats() {
  const { referralCredits, totalReferrals } = useDashboard()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Referral Credits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{referralCredits}</div>
        <p className="text-xs text-muted-foreground mt-1">
          From {totalReferrals} successful referrals
        </p>
      </CardContent>
    </Card>
  )
}
