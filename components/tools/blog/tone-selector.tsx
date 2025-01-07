//components/tools/blog/tone-selector.tsx

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/dropdown"
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"

const tones = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "humorous", label: "Humorous" },
  { value: "formal", label: "Formal" },
  { value: "inspirational", label: "Inspirational" },
]

export function ToneSelector() {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name="tone"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tone</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select a tone" />
            </SelectTrigger>
            <SelectContent>
              {tones.map((tone) => (
                <SelectItem key={tone.value} value={tone.value}>
                  {tone.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

        
