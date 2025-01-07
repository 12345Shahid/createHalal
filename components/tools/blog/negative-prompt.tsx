//components/tools/blog/negative-prompt.tsx

import { Textarea } from "@/components/ui/textarea"
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"

export function NegativePrompt() {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name="negativePrompt"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Negative Prompt (Optional)</FormLabel>
          <Textarea
            placeholder="Enter topics or keywords to exclude..."
            className="resize-none"
            {...field}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

