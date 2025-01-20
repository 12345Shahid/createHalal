// File: /components/tools/word-range-input.tsx
// Component for specifying the target word count range

import { FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

export function WordRangeInput() {
  const form = useFormContext()

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="wordRange.min"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Minimum Words</FormLabel>
            <Input
              type="number"
              placeholder="Enter minimum word count"
              min={0}
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="wordRange.max"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Maximum Words</FormLabel>
            <Input
              type="number"
              placeholder="Enter maximum word count"
              min={0}
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          </FormItem>
        )}
      />
    </div>
  )
}
