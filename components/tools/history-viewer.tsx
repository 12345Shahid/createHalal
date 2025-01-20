// File: /components/tools/history-viewer.tsx
// Component for viewing and managing generation history

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface HistoryItem {
  id: string
  title: string
  content: string
  timestamp: Date
}

export function HistoryViewer() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  const handleRestore = (item: HistoryItem) => {
    // TODO: Implement restore functionality
    console.log("Restoring item:", item)
  }

  const handleDelete = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id))
  }

  const handleClearAll = () => {
    setHistory([])
  }

  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>History</CardTitle>
        {history.length > 0 && (
          <Button variant="ghost" size="sm" onClick={handleClearAll}>
            Clear All
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            No history yet
          </div>
        ) : (
          <ScrollArea className="h-[300px]">
            <div className="space-y-4">
              {history.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.timestamp.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRestore(item)}
                        >
                          Restore
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm line-clamp-2">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  )
}
