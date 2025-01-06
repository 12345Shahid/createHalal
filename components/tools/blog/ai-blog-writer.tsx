//components/tools/blog/ai-blog-writer.tsx


"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToneSelector } from "../tone-selector"
import { WordRange } from "../word-range"
import { NegativePrompt } from "../negative-prompt"
import { OutputDisplay } from "../../output-display"
import { OutputActions } from "../output-actions"
import { useTool } from "@/hooks/use-tool"

const formSchema = z.object({
  title: z.string().min(1, "Please enter a title"),
  outline: z.string().optional(),
  tone: z.string().optional(),
  wordRange: z.object({
    min: z.number().min(0),
    max: z.number().min(0),
  }),
  negativePrompt: z.string().optional(),
})

export function AIBlogWriter() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      outline: "",
      tone: "professional",
      wordRange: { min: 500, max: 1500 },
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Title</FormLabel>
                <Input placeholder="Enter your blog title..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="outline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Outline (Optional)</FormLabel>
                <Textarea
                  placeholder="Provide a brief outline or key points for your blog..."
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
            {loading ? "Writing..." : "Write Blog Post"}
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

                                          
