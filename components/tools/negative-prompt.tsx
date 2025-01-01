// File: /components/tools/negative-prompt.tsx
"use client"

import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

export function NegativePrompt() {
  return (
    <div className="space-y-2">
      <Label>Avoid Including (Optional)</Label>
      <Textarea
        placeholder="Enter topics or phrases to avoid..."
        className="min-h-[100px]"
      />
    </div>
  )
}
