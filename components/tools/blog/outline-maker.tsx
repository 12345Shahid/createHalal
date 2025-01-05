//components/tools/blog/outline-maker.tsx

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
  title: z.string().min(1, "Please enter a blog title"),
  description: z.string().optional(),
  outlineDepth: z.enum(["1", "2", "3"]),
  keyPoints: z.string().optional(),
})

export function OutlineMaker() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      outlineDepth: "2",
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief Description (Optional)</FormLabel>
                <Textarea
                  placeholder="Provide a brief description of your blog post..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="outlineDepth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Outline Depth</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select outline depth" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Level</SelectItem>
                    <SelectItem value="2">2 Levels</SelectItem>
                    <SelectItem value="3">3 Levels</SelectItem>
                  </SelectContent>
                </Select>
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
                  placeholder="Enter key points to include in the outline..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Outline"}
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

      
