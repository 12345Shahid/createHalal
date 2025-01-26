'use client'

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Tool categories with placeholders for full lists
const tools = {
  "Blog Tools": [
    { title: "Blog Workflow", description: "End-to-end blogging process", icon: "📝" },
    { title: "Blog Topic Ideas", description: "Get creative blog topic ideas instantly", icon: "💡" },
    { title: "Blog Outline", description: "Generate structured blog outlines", icon: "📝" },
    { title: "Blog Content", description: "Write engaging blog posts", icon: "✍️" },
    { title: "Image Brief for Blog", description: "Create image prompts for blogs", icon: "🖼️" },
    { title: "Quick Blog Generator", description: "Generate blogs quickly with image prompts", icon: "⚡" },
{ title: "SEO Helper", description: "Enhance your blog's SEO performance", icon: "🔍" },
{ title: "Grammar Checker", description: "Detect and correct grammar issues", icon: "📚" },
{ title: "Visual Content Creator", description: "Create stunning visuals for your blogs", icon: "🎨" },
{ title: "Trending Topic Finder", description: "Discover trending topics for your niche", icon: "📈" },
{ title: "Keyword Planner", description: "Plan effective keywords for your content", icon: "🔑" },
{ title: "Headline Optimizer", description: "Craft impactful and engaging headlines", icon: "📰" },
{ title: "AI Blog Writer", description: "Write complete blogs using AI assistance", icon: "✍️" },
{ title: "Content Optimizer", description: "Optimize your content for better engagement", icon: "🚀" },
{ title: "Plagiarism Checker", description: "Ensure your content is 100% original", icon: "🔒" },
{ title: "Sentence Enhancer", description: "Improve clarity and flow of your sentences", icon: "✏️" },
{ title: "Reader-Friendly Outline Maker", description: "Create outlines that resonate with readers", icon: "📝" },
{ title: "Focus Tracker", description: "Keep track of focus points in your content", icon: "🎯" },
{ title: "Research Collector", description: "Collect and organize research materials", icon: "📂" },
{ title: "Idea Finder", description: "Discover fresh and unique content ideas", icon: "💡" },
{ title: "Blog Structure Generator", description: "Generate effective blog structures", icon: "🏗️" },
{ title: "Engagement Analyzer", description: "Analyze your blog's engagement metrics", icon: "📊" },
{ title: "Visual Template Designer", description: "Design visual templates for blogs", icon: "🖼️" },
{ title: "Proofreading Assistant", description: "Proofread your blog for grammar and style", icon: "📖" },
{ title: "Content Workflow Manager", description: "Manage your entire content workflow", icon: "📋" },
{ title: "Readability Checker", description: "Check and improve blog readability", icon: "📘" },
{ title: "Sentence Rewriter", description: "Rewrite sentences to improve impact", icon: "🔄" },
{ title: "Advanced SEO Advisor", description: "Get advanced SEO recommendations", icon: "🌐" },
{ title: "Research Summarizer", description: "Summarize lengthy research materials", icon: "📜" },
{ title: "Blog Idea Repository", description: "Access a repository of blog ideas", icon: "🗂️" },
{ title: "Tone Optimizer", description: "Adjust your blog's tone for better impact", icon: "🎵" },
{ title: "Content Gap Finder", description: "Identify gaps in your content strategy", icon: "🕵️" },
{ title: "Title Creator", description: "Generate captivating blog titles", icon: "🏷️" },
{ title: "Video to Blog Converter", description: "Convert video content into blogs", icon: "🎥" },
{ title: "Audio to Blog Converter", description: "Transform audio into readable blog content", icon: "🎙️" },
{ title: "Document to Blog Converter", description: "Turn documents into engaging blogs", icon: "📄" },
{ title: "AI Programming Wizard", description: "Harness the power of AI for programming tasks", icon: "🤖" },
{ title: "GPT-4 Turbo Insights", description: "Leverage GPT-4 Turbo for advanced content creation", icon: "⚡" },
{ title: "GPT-4 Creative Suite", description: "Explore creative possibilities with GPT-4", icon: "🎨" }
  ],
  "Writing Assistant": [
    { title: "Grammar Checker", description: "Detect and correct grammar issues", icon: "📚" },
    { title: "Sentence Rewriter", description: "Improve sentence flow", icon: "✏️" },
    { title: "Creative Idea Generator", description: "Generate creative content ideas", icon: "🎨" },
    { title: "Context Improvement Tool", description: "Enhance the context of your writing", icon: "🔍" },
{ title: "Word Simplifier", description: "Simplify complex words in your text", icon: "📝" },
{ title: "Idea Suggestion Tool", description: "Generate creative ideas for your writing", icon: "💡" },
{ title: "Tone Adjuster", description: "Adjust the tone of your content effectively", icon: "🎵" },
{ title: "Style Consistency Checker", description: "Ensure a consistent writing style throughout", icon: "📖" },
{ title: "Advanced Grammar Fixer", description: "Fix advanced grammar issues with ease", icon: "📚" },
{ title: "SEO Keyword Inserter", description: "Insert SEO keywords seamlessly into your content", icon: "🔑" },
{ title: "Document Polisher", description: "Polish your document for a professional finish", icon: "✨" },
{ title: "Plagiarism Rewriter", description: "Reword plagiarized content to make it original", icon: "♻️" },
{ title: "Creative Prompt Generator", description: "Generate creative prompts to inspire your writing", icon: "🎨" },
{ title: "Audience Voice Matcher", description: "Match your content's tone with your target audience", icon: "🗣️" },
{ title: "Content Expander", description: "Expand concise content into detailed pieces", icon: "🔍" },
{ title: "Paragraph Simplifier", description: "Simplify complex paragraphs for better readability", icon: "✏️" },
{ title: "Informal-to-Formal Converter", description: "Convert informal text into formal language", icon: "🎓" },
{ title: "Emotion Enhancer", description: "Add emotional appeal to your writing", icon: "❤️" },
{ title: "Fact Checker", description: "Verify facts within your content", icon: "✔️" },
{ title: "Dialogue Generator", description: "Create realistic dialogues for stories", icon: "💬" },
{ title: "Document Formatter", description: "Format your document for clarity and organization", icon: "📄" },
{ title: "Introduction Writer", description: "Craft compelling introductions for your writing", icon: "✍️" },
{ title: "Content Summarizer", description: "Summarize lengthy content into concise snippets", icon: "📑" },
{ title: "Tone and Style Adjuster", description: "Fine-tune the tone and style of your content", icon: "🖌️" },
{ title: "Essay Structurer", description: "Structure essays effectively and logically", icon: "📝" },
{ title: "Feedback Generator", description: "Generate constructive feedback on your content", icon: "📣" },
{ title: "Transition Sentence Maker", description: "Create smooth transitions between paragraphs", icon: "🔗" },
{ title: "Conclusion Writer", description: "Write impactful and concise conclusions", icon: "🏁" },
{ title: "Character Profile Creator", description: "Develop detailed character profiles for stories", icon: "👤" },
{ title: "Scene Description Writer", description: "Write vivid and engaging scene descriptions", icon: "🌅" },
  ],
  "YouTube Tools": [
    { title: "AI Scriptwriter", description: "Write engaging YouTube scripts", icon: "📺" },
    { title: "Hook Creator", description: "Generate compelling video hooks", icon: "🎣" },
    { title: "SEO Optimizer", description: "Optimize YouTube videos for SEO", icon: "🔍" },
    { title: "Video SEO Optimizer", description: "Optimize your videos for better search rankings", icon: "🔍" },
{ title: "Description Generator", description: "Create engaging descriptions for your videos", icon: "📝" },
{ title: "Video Idea Finder", description: "Discover creative ideas for your YouTube videos", icon: "💡" },
{ title: "Script Outline Maker", description: "Generate outlines for your video scripts", icon: "📋" },
{ title: "Title and Tag Suggestion Tool", description: "Get suggestions for impactful titles and tags", icon: "🏷️" },
{ title: "Engagement Script Writer", description: "Write scripts to increase audience engagement", icon: "🎤" },
{ title: "Call-to-Action Generator", description: "Generate persuasive calls-to-action for videos", icon: "📢" },
{ title: "Hashtag Finder", description: "Find trending hashtags for your video content", icon: "🔗" },
{ title: "Video Idea Refiner", description: "Refine your video ideas for maximum impact", icon: "✨" },
{ title: "Script Template Provider", description: "Access templates for various types of video scripts", icon: "📑" },
{ title: "Timestamp Generator", description: "Create timestamps for key moments in your videos", icon: "⏱️" },
{ title: "Ad Script Writer", description: "Write engaging scripts for your video ads", icon: "🎯" },
{ title: "Viral Title Creator", description: "Generate titles designed to go viral", icon: "🔥" },
{ title: "Interaction Phrase Generator", description: "Craft phrases to encourage viewer interaction", icon: "🗣️" },
{ title: "Research Summarizer", description: "Summarize your video research effectively", icon: "📜" },
{ title: "Tone Adjuster", description: "Adjust the tone of your scripts for better delivery", icon: "🎵" },
{ title: "Voiceover Text Creator", description: "Generate voiceover scripts for your videos", icon: "🎙️" },
{ title: "Analysis Script Writer", description: "Create scripts for detailed video analyses", icon: "📊" },
  ],
}

export function MainNav() {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null)

  const handleCategoryToggle = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category))
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Tools Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-6 p-4">
              {Object.entries(tools).map(([category, tools]) => (
                <li key={category} className="row-span-3">
                  <div
                    onClick={() => handleCategoryToggle(category)}
                    className="flex cursor-pointer items-center justify-between mb-2 mt-4 text-lg font-medium hover:text-primary"
                  >
                    {category}
                    <span
                      className={`ml-2 transform rounded-full bg-primary/10 px-2 py-1 text-sm ${
                        expandedCategory === category ? "rotate-180" : "rotate-0"
                      } transition-transform`}
                    >
                      {expandedCategory === category ? "▲" : "▼"}
                    </span>
                  </div>
                  <AnimatePresence>
                    {expandedCategory === category && (
                      <motion.ul
                        className="pl-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {tools.map((tool) => (
                          <ListItem
                            key={tool.title}
                            title={`${tool.icon} ${tool.title}`}
                            href={`/tools/${tool.title.toLowerCase().replace(/ /g, '-')}`}
                          >
                            {tool.description}
                          </ListItem>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Other options */}
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/signup" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sign Up
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/tools/programming" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Programming Tools
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/tools/g4f-models" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Powerful AI Models
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Reusable ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
