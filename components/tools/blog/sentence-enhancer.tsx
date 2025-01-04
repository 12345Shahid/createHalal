//components/tools/blog/sentence-enhancer.tsx

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
  enhancementType: z.enum(["clarity", "engagement", "persuasion", "emotion", "formality"]),
})

export function SentenceEnhancer() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sentence: "",
      enhancementType: "clarity",
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
                <FormLabel>Sentence to Enhance</FormLabel>
                <Textarea
                  placeholder="Enter the sentence you want to enhance..."
                  className="min-h-[100px]"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="enhancementType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enhancement Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select enhancement type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clarity">Clarity</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="persuasion">Persuasion</SelectItem>
                    <SelectItem value="emotion">Emotion</SelectItem>
                    <SelectItem value="formality">Formality</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Enhancing..." : "Enhance Sentence"}
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

                                                
