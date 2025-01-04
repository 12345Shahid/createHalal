//components/tools/blog/quick-blog.tsx

"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { ToneSelector } from "../tone-selector"
import { WordRange } from "../word-range"
import { NegativePrompt } from "../negative-prompt"
import { OutputDisplay } from "../../output-display"
import { OutputActions } from "../output-actions"
import { useTool } from "@/hooks/use-tool"

const formSchema = z.object({
  topic: z.string().min(1, "Please enter a topic"),
  tone: z.string().optional(),
  wordRange: z.object({
    min: z.number().min(0),
    max: z.number().min(0),
  }),
  negativePrompt: z.string().optional(),
})

export function QuickBlogGenerator() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      tone: "professional",
      wordRange: { min: 300, max: 500 },
      negativePrompt: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await generateContent(values)
    setOutput(result)
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Topic</FormLabel>
                <Textarea
                  placeholder="Enter your blog topic or main idea..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <ToneSelector />
          <WordRange />
          <NegativePrompt />
          <Button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Quick Blog"}
          </Button>
        </form>
      </Form>
      <OutputDisplay content={output} loading={loading} />
      <OutputActions
        onCopy={() => navigator.clipboard.writeText(output)}
        onSave={() => console.log("Save functionality to be implemented")}
        onEdit={() => console.log("Edit functionality to be implemented")}
      />
    </div>
  )
}

      
