// File: /components/tools/save-options.tsx
"use client"

import { Button } from "../ui/button"
import { Download, Save } from "lucide-react"

export function SaveOptions() {
  const handleSave = () => {
    // Implementation for saving
  }

  const handleDownload = () => {
    // Implementation for downloading
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" onClick={handleSave}>
        <Save className="w-4 h-4 mr-2" />
        Save
      </Button>
      <Button variant="outline" onClick={handleDownload}>
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  )
}
