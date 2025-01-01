// File: /components/tools/input-form.tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

const formSchema = z.object({
  prompt: z.string().min(1, "Please enter a prompt"),
})

interface InputFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>
}

export function InputForm({ onSubmit }: InputFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What would you like to create?</FormLabel>
              <Textarea
                placeholder="Enter your prompt here..."
                className="min-h-[200px]"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Generate
        </Button>
      </form>
    </Form>
  )
}
