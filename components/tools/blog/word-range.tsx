//components/tools/blog/word-range.tsx

import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"

export function WordRange() {
  const { control } = useFormContext()

  return (
    <div className="flex space-x-4">
      <FormField
        control={control}
        name="wordRange.min"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Minimum Words</FormLabel>
            <Input type="number" min={0} {...field} />
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="wordRange.max"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Maximum Words</FormLabel>
            <Input type="number" min={0} {...field} />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

