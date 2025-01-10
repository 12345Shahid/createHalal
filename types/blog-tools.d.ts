=""export interface BlogTool {
  id: string
  name: string
  description: string
  category: string
}

export interface BlogToolInput {
  prompt: string
  tone?: string
  wordRange?: {
    min: number
    max: number
  }
  negativePrompt?: string
}

export interface BlogToolOutput {
  content: string
  metadata: {
    wordCount: number
    readingTime: number
  }
}

