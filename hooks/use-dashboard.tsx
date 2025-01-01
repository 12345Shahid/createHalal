// File: /hooks/use-dashboard.tsx
"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { getDashboardData } from "@/lib/dashboard"
import type { DashboardData } from "@/types/dashboard"

export function useDashboard() {
  const { user } = useAuth()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const dashboardData = await getDashboardData(user.uid)
        setData(dashboardData)
        setLoading(false)
      }
    }

    fetchData()
  }, [user])

  return {
    totalCredits: data?.totalCredits || 0,
    referralCredits: data?.referralCredits || 0,
    totalReferrals: data?.totalReferrals || 0,
    activities: data?.activities || [],
    loading,
  }
}
