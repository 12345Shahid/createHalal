//components/tools/blog/title-creator.tsx

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
  topic: z.string().min(1, "Please enter a topic"),
  titleStyle: z.enum(["clickbait", "informative", "question", "howTo", "listicle"]),
  targetKeywords: z.string().optional(),
  titleCount: z.number().min(1, "Please enter a number of titles").max(20, "Maximum 20 titles"),
  additionalNotes: z.string().optional(),
})

export function TitleCreator() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      titleStyle: "informative",
      targetKeywords: "",
      titleCount: 5,
      additionalNotes: "",
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
                <FormLabel>Topic</FormLabel>
                <Input placeholder="Enter your blog topic..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="titleStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title Style</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select title style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clickbait">Clickbait</SelectItem>
                    <SelectItem value="informative">Informative</SelectItem>
                    <SelectItem value="question">Question</SelectItem>
                    <SelectItem value="howTo">How-To</SelectItem>
                    <SelectItem value="listicle">Listicle</SelectItem>
                  </SelectContent>
                </Select>
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
            name="titleCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Titles</FormLabel>
                <Input type="number" min={1} max={20} {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10))} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes (Optional)</FormLabel>
                <Textarea
                  placeholder="Enter any additional notes or requirements..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Titles"}
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

    
