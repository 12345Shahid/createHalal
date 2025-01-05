//components/tools/blog/blog-structure-generator.tsx

"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/dropdown"
import { OutputDisplay } from "../../output-display"
import { OutputActions } from "../output-actions"
import { useTool } from "@/hooks/use-tool"

const formSchema = z.object({
  title: z.string().min(1, "Please enter a title"),
  blogType: z.enum(["howTo", "listicle", "review", "opinion", "news", "comparison"]),
  targetAudience: z.string().optional(),
  keyPoints: z.string().optional(),
})

export function BlogStructureGenerator() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      blogType: "howTo",
      targetAudience: "",
      keyPoints: "",
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
            name="blogType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blog type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="howTo">How-To Guide</SelectItem>
                    <SelectItem value="listicle">Listicle</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="opinion">Opinion Piece</SelectItem>
                    <SelectItem value="news">News Article</SelectItem>
                    <SelectItem value="comparison">Comparison</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetAudience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Audience (Optional)</FormLabel>
                <Input placeholder="Describe your target audience..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="keyPoints"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Key Points (Optional)</FormLabel>
                <Textarea
                  placeholder="Enter key points you want to cover in your blog..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Blog Structure"}
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

        
