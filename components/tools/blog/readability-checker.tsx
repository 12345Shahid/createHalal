//components/tools/blog/readability-checker.tsx


"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/dropdown"
import { OutputDisplay } from "../../output-display"
import { OutputActions } from "../output-actions"
import { useTool } from "@/hooks/use-tool"

const formSchema = z.object({
  content: z.string().min(1, "Please enter your content"),
  targetAudience: z.enum(["general", "academic", "technical", "children"]),
  readabilityMetric: z.enum(["fleschKincaid", "smog", "colemanLiau", "automatedReadability"]),
})

export function ReadabilityChecker() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      targetAudience: "general",
      readabilityMetric: "fleschKincaid",
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
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content to Check</FormLabel>
                <Textarea
                  placeholder="Paste your content here for readability analysis..."
                  className="min-h-[200px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetAudience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Audience</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="children">Children</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="readabilityMetric"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Readability Metric</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select readability metric" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fleschKincaid">Flesch-Kincaid</SelectItem>
                    <SelectItem value="smog">SMOG</SelectItem>
                    <SelectItem value="colemanLiau">Coleman-Liau</SelectItem>
                    <SelectItem value="automatedReadability">Automated Readability Index</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Check Readability"}
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

        
