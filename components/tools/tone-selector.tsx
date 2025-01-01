// File: /components/tools/tone-selector.tsx
"use client"

import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/dropdown"

export function ToneSelector() {
  return (
    <div className="space-y-2">
      <Label>Tone of Voice</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select tone" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="professional">Professional</SelectItem>
          <SelectItem value="friendly">Friendly</SelectItem>
          <SelectItem value="casual">Casual</SelectItem>
          <SelectItem value="formal">Formal</SelectItem>
          <SelectItem value="persuasive">Persuasive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
