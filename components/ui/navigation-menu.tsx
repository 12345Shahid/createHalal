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
  ],
  "Writing Assistant": [
    { title: "Grammar Checker", description: "Detect and correct grammar issues", icon: "📚" },
    { title: "Sentence Rewriter", description: "Improve sentence flow", icon: "✏️" },
    { title: "Creative Idea Generator", description: "Generate creative content ideas", icon: "🎨" },
  ],
  "YouTube Tools": [
    { title: "AI Scriptwriter", description: "Write engaging YouTube scripts", icon: "📺" },
    { title: "Hook Creator", description: "Generate compelling video hooks", icon: "🎣" },
    { title: "SEO Optimizer", description: "Optimize YouTube videos for SEO", icon: "🔍" },
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
