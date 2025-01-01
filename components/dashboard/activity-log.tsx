// File: /components/dashboard/activity-log.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { useDashboard } from "@/hooks/use-dashboard"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ActivityLog() {
  const [timeframe, setTimeframe] = useState("30")
  const { activities } = useDashboard()

  const columns = [
    {
      accessorKey: "timestamp",
      header: "Date",
    },
    {
      accessorKey: "tool",
      header: "Tool Used",
    },
    {
      accessorKey: "creditsUsed",
      header: "Credits Used",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activity</CardTitle>
        <div className="flex items-center space-x-2">
          <Button
            variant={timeframe === "30" ? "default" : "outline"}
            onClick={() => setTimeframe("30")}
          >
            Last 30 Days
          </Button>
          <Button
            variant={timeframe === "60" ? "default" : "outline"}
            onClick={() => setTimeframe("60")}
          >
            Last 60 Days
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={activities} />
      </CardContent>
    </Card>
  )
}
