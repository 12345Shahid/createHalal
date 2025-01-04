//components/tools/blog/visual-template-designer.tsx

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
  blogType: z.enum(["personal", "business", "news", "tutorial", "review"]),
  colorScheme: z.string().min(1, "Please enter a color scheme"),
  layoutStyle: z.enum(["minimal", "classic", "modern", "bold"]),
  additionalFeatures: z.string().optional(),
})

export function VisualTemplateDesigner() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogType: "personal",
      colorScheme: "",
      layoutStyle: "minimal",
      additionalFeatures: "",
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
            name="blogType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select blog type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Blog</SelectItem>
                    <SelectItem value="business">Business Blog</SelectItem>
                    <SelectItem value="news">News Blog</SelectItem>
                    <SelectItem value="tutorial">Tutorial Blog</SelectItem>
                    <SelectItem value="review">Review Blog</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="colorScheme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color Scheme</FormLabel>
                <Input placeholder="Enter desired color scheme (e.g., blue and white)..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="layoutStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Layout Style</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select layout style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="bold">Bold</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalFeatures"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Features (Optional)</FormLabel>
                <Textarea
                  placeholder="Enter any additional features or requirements..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Designing..." : "Design Visual Template"}
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

                
