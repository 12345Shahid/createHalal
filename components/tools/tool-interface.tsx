// File: /components/tools/tool-interface.tsx
"use client"

// /components/tools/tool-interface.tsx
// Base tool interface component that provides the layout and structure for all tools

import { useState } from "react"
import { InputForm } from "./input-form"
import { OutputDisplay } from "./output-display"
import { ToneSelector } from "./tone-selector"
import { WordRangeInput } from "./word-range-input"
import { NegativePrompt } from "./negative-prompt"
import { SaveOptions } from "./save-options"
import { HistoryViewer } from "./history-viewer"
import { useTool } from "@/hooks/use-tool"

export function ToolInterface() {
  const [output, setOutput] = useState("")
  const { loading, generateContent } = useTool()

  const handleSubmit = async (formData: any) => {
    const result = await generateContent(formData)
    setOutput(result)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <InputForm onSubmit={handleSubmit} />
          <ToneSelector />
          <WordRangeInput />
          <NegativePrompt />
          <SaveOptions />
        </div>
        <div>
          <OutputDisplay content={output} loading={loading} />
          <HistoryViewer />
        </div>
      </div>
    </div>
  )
}
