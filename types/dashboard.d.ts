// File: /types/dashboard.d.ts
export interface Activity {
  id: string
  timestamp: Date
  tool: string
  creditsUsed: number
  status: "completed" | "failed" | "processing"
  output?: string
}

export interface DashboardData {
  totalCredits: number
  referralCredits: number
  totalReferrals: number
  activities: Activity[]
}
