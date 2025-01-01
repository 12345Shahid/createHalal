// File: /app/(dashboard)/dashboard/page.tsx
"use client"

import { Container } from "@/components/ui/container"
import { CreditsDisplay } from "@/components/dashboard/credits-display"
import { ReferralStats } from "@/components/dashboard/referral-stats"
import { AdCredits } from "@/components/dashboard/ad-credits"
import { ActivityLog } from "@/components/dashboard/activity-log"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useAuth } from "@/hooks/use-auth"
import { redirect } from "next/navigation"

export default function DashboardPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    redirect("/login")
  }

  return (
    <Container>
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <CreditsDisplay />
        <ReferralStats />
        <AdCredits />
      </div>
      <ActivityLog />
    </Container>
  )
}
