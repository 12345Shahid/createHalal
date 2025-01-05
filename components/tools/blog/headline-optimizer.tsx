//components/tools/blog/headline-optimizer 

"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { OutputDisplay } from "../../output-display"
import { OutputActions } from "../output-actions"
import { useTool } from "@/hooks/use-tool"

const formSchema = z.object({
  headline: z.string().min(1, "Please enter a headline"),
  targetKeywords: z.string().optional(),
  articleSummary: z.string().optional(),
})

export function HeadlineOptimizer() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      headline: "",
      targetKeywords: "",
      articleSummary: "",
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
            name="headline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Headline</FormLabel>
                <Input placeholder="Enter your current headline..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetKeywords"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Keywords (Optional)</FormLabel>
                <Input placeholder="Enter target keywords, separated by commas..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="articleSummary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Article Summary (Optional)</FormLabel>
                <Textarea
                  placeholder="Provide a brief summary of your article..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Optimizing..." : "Optimize Headline"}
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

                
