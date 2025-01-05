//components/tools/blog/sentence-rewriter.tsx

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
  sentence: z.string().min(1, "Please enter a sentence"),
  rewriteStyle: z.enum(["simplify", "elaborate", "formal", "casual", "creative"]),
  toneAdjustment: z.enum(["neutral", "positive", "negative", "professional", "friendly"]).optional(),
})

export function SentenceRewriter() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sentence: "",
      rewriteStyle: "simplify",
      toneAdjustment: "neutral",
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
            name="sentence"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sentence to Rewrite</FormLabel>
                <Textarea
                  placeholder="Enter the sentence you want to rewrite..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rewriteStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rewrite Style</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rewrite style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simplify">Simplify</SelectItem>
                    <SelectItem value="elaborate">Elaborate</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="toneAdjustment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tone Adjustment (Optional)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone adjustment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neutral">Neutral</SelectItem>
                    <SelectItem value="positive">Positive</SelectItem>
                    <SelectItem value="negative">Negative</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Rewriting..." : "Rewrite Sentence"}
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

          
