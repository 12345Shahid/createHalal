// File: /components/tools/input-form.tsx
// Tool input form component for collecting user input

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  content: z.string().min(1, "Please enter some content"),
})

interface InputFormProps {
  onSubmit: (data: z.infer<typeof formSchema>) => void
}

export function InputForm({ onSubmit }: InputFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <Textarea
                placeholder="Enter your content here..."
                className="min-h-[200px]"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Process</Button>
      </form>
    </Form>
  )
}
