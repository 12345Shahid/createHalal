import { ToolInterface } from "@/components/tools/tool-interface"
import { BlogToolLayout } from "@/components/tools/blog/blog-tool-layout"

export default function BlogToolsPage() {
  return (
    <BlogToolLayout>
      <h1 className="text-3xl font-bold mb-6">Blog Tools</h1>
      <p className="text-lg mb-8">
        Explore our range of AI-powered blog tools to enhance your content creation process.
      </p>
      <ToolInterface />
    </BlogToolLayout>
  )
}

