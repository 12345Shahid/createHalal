// File: /components/tools/word-range-input.tsx
"use client"

import { Label } from "../ui/label"
import { Input } from "../ui/input"

export function WordRangeInput() {
  return (
    <div className="space-y-2">
      <Label>Word Range</Label>
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          placeholder="Min"
          className="w-24"
          min={1}
        />
        <span>to</span>
        <Input
          type="number"
          placeholder="Max"
          className="w-24"
          min={1}
        />
      </div>
    </div>
  )
}
