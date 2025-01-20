// File: /components/tools/negative-prompt.tsx
// Component for specifying what to avoid in the generated content

import { FormField, FormItem, FormLabel, FormDescription } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useFormContext } from "react-hook-form"

export function NegativePrompt() {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name="negativePrompt"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Negative Prompt</FormLabel>
          <FormDescription>
            Specify what you want to avoid in the generated content
          </FormDescription>
          <Textarea
            placeholder="Enter things to avoid..."
            className="min-h-[100px]"
            {...field}
          />
        </FormItem>
      )}
    />
  )
}
