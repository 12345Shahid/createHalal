// File: /components/tools/history-viewer.tsx
"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"

interface HistoryItem {
  id: string
  content: string
  timestamp: Date
}

export function HistoryViewer() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">History</h3>
      <ScrollArea className="h-[200px] border rounded-lg p-4">
        {history.length > 0 ? (
          <div className="space-y-4">
            {history.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {item.timestamp.toLocaleString()}
                </div>
                <div className="text-sm">{item.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground">
            No history yet
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
