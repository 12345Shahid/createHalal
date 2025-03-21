below is the short description of the project This is the description telling that what this repository wants to after completing 

# CreateHalal - AI Content Creation Platform

## Overview
CreateHalal is an AI-powered content creation platform built on Islamic principles, offering tools for blog writing, content creation, and YouTube content development. The platform operates on a unique credit-based system earned through referrals and ad interactions.

## Core Features

### Content Creation Tools
- **Blog Tools**: 35 specialized tools including Quick Blog Generator, SEO Helper, Grammar Checker
- **Writing Assistant Tools**: 30 tools focusing on grammar, style, and content enhancement
- **YouTube Tools**: 20 tools for video content creation and optimization
- **Upcoming Features**: Image/social media tools, programming tools, video/audio tools, e-commerce tools

### User Interface
- Consistent color scheme based on Diprella's palette (white + green)
- Responsive navigation menu with expandable categories
- Dark/light mode toggle (available post-login)

### Authentication & Access
- Firebase-based authentication
- Public access to tool listings
- Tool usage requires login
- Cookie settings and privacy policy implementation

### Dashboard Features
- Credit balance display
- Referral tracking
- Ad-based earnings (future feature)
- 2-month activity history
- Export functionality (CSV, PDF, PPT)

### Credit System
- Earn credits through referrals
- One credit per referral signup
- Mirror credits from referred users' earnings
- One credit = one content generation

### File Management
- Folder/file organization system
- Search functionality with filters
- Multiple export formats
- Bulk download options

### Additional Features
- Multi-language support
- Help center with searchable documentation
- Blog section (Islamic, Halal Tips categories)
- Firebase Cloud Messaging for notifications
- Integrated chatbot interface

## Technical Implementation

### Frontend
- Next.js framework
- Tailwind CSS for styling
- Shadcn/ui components
- Framer Motion for animations

### Backend
- Flask-based API architecture
- G4F integration for AI operations
- Firebase services integration
- Content filtering for Halal compliance

### API Structure
- Modular API design per tool
- Optional parameters for customization
- 7000-word generation limit
- Input/output Halal compliance filtering

### Security & Compliance
- Islamic content guidelines
- User data protection
- Halal-compliant monetization
- Terms & conditions enforcement

## Public Pages
- Homepage
- Blog section
- Pricing information
- Contact form
- About Us
- Help center

## User-Restricted Features
- Tool usage
- Dashboard access
- File management
- Credit system

## Integration Requirements
- Firebase Authentication
- Firebase Cloud Messaging
- Google Forms (Contact)
- Custom file export system


below is the comprehensive description of the project. any people I mean any developer or AI can read this and can understand what I want to build.


Okay you need to design the homepage. I won't give you much directions about that just  make a standard  home page and do the best practices and it should be enough to compete with the other websites from similar companies in the market.  This is the link of the image for the hero section https://ibb.co.com/9HCSyy4. And yes you can also add any suitable content as you wish and try to add all the halal content or don't add anything. It will be easier for me if you can add content. the topic of my website  is an AI tool like copy.ai or gravity write. The color palette of the website should be same as the color palette of Diprella so combine the white and the other color (maybe that color )was green. I mean combine those two colors like them. And yes keep the same color palette across the whole website for consistency.
Name of my website is createHalal 

Brief Description: Welcome to Create Halal!

Discover an all-in-one platform built to help you create amazing content, boost your marketing, and streamline your programming tasks – all while staying true to Halal values.

Whether you're writing YouTube scripts, crafting blog posts, generating images, or exploring more tools, we've got you covered. Earn rewards through ads and referrals as you create, learn, and grow.

Join us today and experience innovation that aligns with your beliefs!. 
And that's the link of the logo image https://ibb.co.com/q7YRj3N

One additional information is Create a powerful tools( The name can be something else but give something great with common vocabulary)  section I mean a section for showcasing the features available. Available features or the available tools are the three categories blog tools writing assistant tools, YouTube tools , programming tools, GPT 4.0 and GPT 4.0 turbo
 
And below these create a coming soon or upcoming section in that section only include these Image and social media tools,  video and audio tools, e-commerce and document tools. All the words in category names should be at uppercase. Like Blog Tools. These are for showing people that these are coming very soon and they should sign up to get access when they come. So the upper one is showing the existing features and the section below which is the coming soon or upcoming section will show the upcoming features and yes the color palette of the homepage should be absolutely same with the color palette of a website called Diprella and keep the same color palette across the whole website for consistency.




Menu 

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


Okay this is the menu design( which means you need to edit the navigation menu.tsx file) I wanted now don't try to change the design Don't even touch it. As you can see in this example there are only a few tools under each category but there are a lot of tools under each category in case I am going to give you the list of all the tools under each category and you are going to write the full code in case the comments will help you to place the other tools I mean you it will help you to identify the location where you need to place the other tools. And the design should be as it is. And yes I wanted the menu in the top right corner of the header and I guess this code ensures that. in case if you need to do something to ensure the position of the menu in the homepage then you can do that but if you think that this code is okay then keep it as it is. This code should ensure that The menu is at the right position. In case the header contains the text createHalal and some other options like sign up, login ,contact. I hope you understand what am I talking about. Now list of all the tools for each category is written below:


Blog Tools 
[ Names of the tools under this Blog tools category are listed below ]

1. Quick Blog Generator (With Image Prompts)


2. Blog Idea Generator


3. Blog Outline Maker


4. SEO Helper


5. Grammar Checker


6. Visual Content Creator


7. Trending Topic Finder
8. Keyword Planner
9. Headline Optimizer


10. AI Blog Writer


11. Content Optimizer


12. Plagiarism Checker


13. Topic Suggestion Tool


14. Sentence Enhancer


15. Reader-Friendly Outline Maker


16. Focus Tracker


17. Research Collector


18. Idea Finder


19. Blog Structure Generator


20. Engagement Analyzer


21. Visual Template Designer


22. Proofreading Assistant


23. Content Workflow Manager


24. Readability Checker


25. Sentence Rewriter


26. Advanced SEO Advisor


27. Research Summarizer


28. Blog Idea Repository


29. Tone Optimizer


30. Content Gap Finder


31. Title Creator


32. Video to Blog Converter


33. Audio to Blog Converter


34. Document to Blog Converter


35. Image Prompt Generator for Blogs


Writing Assistant Tools 
[ Names of the tools under this writing assistant tools category are listed below ]

1. Grammar Checker


2. Sentence Rewriter


3. Creative Idea Generator


4. Context Improvement Tool


5. Word Simplifier


6. Idea Suggestion Tool


7. Tone Adjuster


8. Style Consistency Checker


9. Advanced Grammar Fixer


10. SEO Keyword Inserter


11. Document Polisher


12. Plagiarism Rewriter


13. Creative Prompt Generator


14. Audience Voice Matcher


15. Content Expander


16. Paragraph Simplifier


17. Informal-to-Formal Converter


18. Emotion Enhancer


19. Fact Checker


20. Dialogue Generator


21. Document Formatter


22. Introduction Writer


23. Content Summarizer


24. Tone and Style Adjuster


25. Essay Structurer


26. Feedback Generator


27. Transition Sentence Maker


28. Conclusion Writer


29. Character Profile Creator


30. Scene Description Writer
YouTube tools 
[ Names of the tools under this YouTube tools category are listed below ]

1. AI Scriptwriter


2. Hook Creator


3. Video SEO Optimizer


4. Description Generator


5. Video Idea Finder


6. Script Outline Maker


7. Title and Tag Suggestion Tool


8. Engagement Script Writer


9. Call-to-Action Generator


10. Hashtag Finder


11. Video Idea Refiner


12. Script Template Provider


13. Timestamp Generator


14. Ad Script Writer


15. Viral Title Creator


16. Interaction Phrase Generator


17. Research Summarizer


18. Tone Adjuster


19. Voiceover Text Creator


20. Analysis Script Writer



Styling Adjustments (Optional):

If needed, adjust the CSS styles to align the menu more precisely with your header design.

You can modify the navigationMenuTriggerStyle() function or the classes used in the NavigationMenu component. Only do any kind of modification in the design for matching the color palette or don't do anything. in short if I say finally then this is the decision.


For each tool, create a new page under the /tools/ directory with a matching route.

Example: For "Quick Blog Generator", create anew page under the /tools/ directory with a matching route.

Example: For "Quick Blog Generator", create a file at /tools/quick-blog-generator.tsx and design the tool interface there.
Now I don't want to give you much directions about the tool interface design but make standard designs and do the best practices for competing with other similar tools available in the market. But you should obviously maintain two things firstly the input fields  will vary. For example for the quick blog generator tool there will be input fields like negative box ( where the user will describe what he don't want to include in the generated content ) ,word range (like 1500 to 2500), ( tone like excited,  professional ). in case for the other tools under the category they won't have the same input fields even the output feels may also vary. And the tools in different category they will also have different input fields.  as I want maximum user satisfaction so add all the
possible input fields so that the users can customize the content as the wishes and you can also make output fields as you wish. but yes as all the tools will give the output in the text format so there should be enough options for manual editing in all the tool interfaces and you can keep it same for all the two interfaces and the second thing is that keep some design similarities in all the tool interfaces as they are in the same website. In case people should be able to access the tool interface after logging in. And yes there is some matter of something else. I guess it is called URL routing. Like the menu should be visible to everyone even if they are not signed up. It will include all the pages of the website but the blogs and the pricings and the contact Will be visible to everyone. in case people will be able to see the tools option also. I mean this menu will also include the tools option. In case I gave you the code and the code contains the design for that. When a visitor will click on a tool category(Blog Tools ) then he will see all the specific tools under that category. for example if someone clicks on the blog tools category then you will see all the specific tools (like quick lock generator ) under blog tools category but if he clicks on any specific tool then he will be automatically redirected to the login page. in case he will login or sign up ( in the login page there will be an option to register also. visitor will be able to register if he don't have an account ) and then he will be redirected to that tool interface where he wanted to go and he will start using that specific tool but if someone clicks on blogs or pricing page or contact page then he will be able to see everything( without logging in) in the page ( without logging in). so the blogs and the pricings and the contact page is completely public and the tools option(  tool categories and specific tool names under those categories is also public)  but if someone wants to use any specific tool then he will need to login or sign up. Now for matching with the requirements you can change the codes but don't change the style or the animation or the components which are given for beauty.


Dashboard 

You can see there's a picture of an example of dashboard. In the example it has 4 sections.  the first section is Reviews. , the second section is Avg. Rating and the third section is investment analysis. And below these three sections there is another section called Total Visitors. But I don't want these. in my case the first section should be for showing the total credits my user has for generating content from the website. The second section should reveal or should show how many credits he got by referring the website to other peoples and the third section should show how many credits he got by watching ads ( actually the first one is the summation of these two I mean the summation of second and third section). In case I don't have any integration functionality with any ad system with my website ( at present ) so in that section,  keep it like "coming soon". Finally the section below these three sections which is now called the total visitors It should be changed and it should be showing the recent activity ( activities of last 2 month. I mean a list of the content he generated in last 2 month using different tools from the website. ) of the user . It is like a history. And you can see in the image that the menu is at the left side but don't keep it there because in my website the menu should be always in the right side. Keep the color palette same as the homepage in case the color palette should be same across the whole website and the standard color palette is the color palette of homepage in this project.  Okay now the 4th section( which is below the 1st 3 sections and should represent the history and some other functionalities). as I want it to be replaced so the design to replace it 




[ The homepage will be always the same. But after logging in The user should see the option to choose dark mode or light mode . In case after logging in I guess he will be in the dashboard so it will be very good if the option is in the dashboard. After he switches to the dark mode it will be dark theme for the whole website and light mode will be light for the whole site. In case the picture I gave to replace the fourth section which is below three sections is a standard. The difference is that in that picture the color combination is drak and blue but the color combination should be same as Diprella. ( You can take the color palette from the Diprella website as a sample ) ]



Help center 
In this image you can see that( image of help center page ) there are categories of documentations on the website and there is a search bar for searching documentations across the categories. So just keep the design as it is but change the color palette for consistency and our standard color palette is the color palette of homepage. So you must use that in all the pages. add appropriate categories and documents as you are creating the website so you know what to write.



Pricings 
Yet we don't follow traditional pricing system. In our case you will share our website and get credits. You can use those credits to generate content. the process is explained below with a real life example. 


 suppose there are two users user1 and user2. Now the user1 shared our website using his unique link to the user2. In case user1 will get the link at  his dashboard and it will be unique for every user. Now user1 will automatically get one credit because one user signed up or I should say registered using his link. Now if user2 earns any credit by sharing our website or by watching ads then the user1 will get the same amount of credit automatically. For example suppose user2 shared our website to five people and got five credits then user1 will get five credits automatically without doing anything because the user2 came from the reference of the user1 or I should say the referral link of user1. One credit is enough for generating one content from any of the tool or I should say it is for one token. Using one credit user can have one blog or one video or one audio. in simple terms he can have one output from any tool ( under any category) as the user wish. 

As it is very simple to share our website using your unique link so you can get unlimited credits and generate unlimited content daily. 

Our final goal is to create a community of Halal content creators, to help you for getting some Halal information and to help you build something Halal. So keep supporting us by sharing our website as much as you can.


Blogs 

In this image you can see the Blogs page of the website .So just keep the design as it is but change the color palette for consistency and our standard color palette is the color palette of homepage. So you must use that in all the pages. The design have many blogs in different categories. We have two categories Islamic, Halal Tips.create the page, and include the blogs in  the categories appropriately I gave you the category name as well as contents below.



1. Islamic Category: "Results of Sabr"
Image link https://ibb.co.com/cb2CtcH



The Virtues and Outcomes of Sabr (Patience)

In Islam, Sabr—patience—is a virtue of immense significance. It represents endurance, perseverance, and steadfastness in the face of life's trials. The Qur'an and Hadiths emphasize the importance of Sabr, promising rewards for those who practice it.


The Qur'an states: "Indeed, the patient will be given their reward without account." (Qur'an 39:10) This verse highlights the boundless rewards awaiting those who exercise patience.

Practicing Sabr leads to personal growth and spiritual elevation. It enables individuals to navigate challenges with resilience, maintaining faith in Allah's wisdom. Through patience, one develops inner strength, emotional intelligence, and a deeper connection with the Creator.

Moreover, Sabr cultivates empathy and compassion. By enduring hardships, individuals become more understanding and supportive of others facing difficulties. This fosters a sense of community and mutual assistance, core principles in Islam.


In essence, the results of Sabr are multifaceted: spiritual rewards, personal development, and societal harmony. Embracing patience transforms challenges into opportunities for growth, aligning believers with the divine path ordained by Allah.

2. Halal Tips Category: "How to Write a Halal Blog"

Image link https://ibb.co.com/PtJNxvz



Guidelines for Crafting a Halal-Compliant Blog

Creating a blog that adheres to Islamic principles involves mindful content creation and ethical considerations. Here are key steps to ensure your blog aligns with Halal standards:

1. Content Integrity: Ensure all information shared is truthful and beneficial. Avoid spreading falsehoods or engaging in gossip.


2. Respectful Language: Use language that is respectful and free from profanity. Uphold the dignity of all individuals and communities.

3.  Avoiding Harmful Content: Refrain from sharing content that promotes violence, indecency, or any form of harm.


4. Citing Sources: Attribute information to credible sources. This practice reflects honesty and builds trust with your audience.


5. Ethical Monetization: If monetizing your blog, ensure that advertisements and partnerships comply with Halal standards, avoiding products or services that are Haram.


6. Inclusivity and Respect: Foster an inclusive environment by respecting diverse perspectives and cultures, in line with Islamic teachings of tolerance.



By following these guidelines, you can create a blog that is not only engaging but also aligns with Islamic ethical standards, contributing positively to the online community.

Profile 

In this image you can see the profile page of the website .So just keep the design  and attributes or  fields (like name, email) as it is but change the color palette for consistency and our standard color palette is the color palette of homepage. So you must use that in all the pages. And there is no menu in the image but add the menu in all the pages including this. In case find someone will register or I should say sign up then some of the fields will be automatically filled up because he gave those information in the sign up page but the other informations will be optional and he can complete the profile by coming here or I should say by coming to this page.



Change Language

I don't have any image for this section but Make a standard change language option in the website and it should be in the middle when people will click on that from the menu then they will see all the language options and they will select their preferred language for interacting with the website.

About Us 

In this image you can see the About us page of the website .So just keep the design as it is but change the color palette for consistency and our standard color palette is the color palette of homepage. So you must use that in all the pages. And there is no menu in the image but add the menu in all the pages including this. In case you don't need to create any demo content You can replace the image in this design with the image of the hero section and you can replace the text in this design with the text I gave you as the brief description of my website


Contact 

Design a standard contact page and do the best practices for competing with the other companies in the market. But yes this should be the contact form ( try to check that if this Google form is working or not before placing it inside the contact page) 


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAc9FXhsVKwbIQlxIxRXCbXlObfpQgvWELHRV9wWVokmbNIg/viewform?embedded=true" width="640" height="721" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


Notifications 

Build a standard notification page and do the best practices. In case the color palette of the page should be matched with the color palette of the whole website for consistency. And yes use firebase cloud messaging for that. Here is the SDKs code



 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsVuVtY-ZgNfqTZ2Wfe4aGKdmN-kQqZjE",
  authDomain: "hasan-8466d.firebaseapp.com",
  projectId: "hasan-8466d",
  storageBucket: "hasan-8466d.firebasestorage.app",
  messagingSenderId: "1037187451735",
  appId: "1:1037187451735:web:b4b1f403667bb6c9ebcc12",
  measurementId: "G-Z9PXNQ2FH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Customize this  as needed


Authentication 
Build a standard authentication page and do the best practices. In case the color palette of the page should be matched with the color palette of the whole website for consistency. In case use firebase authentication service and yes I am using the free version of firebase. 

Also enable cookie settings. And also add some terms and conditions and privacy policy page. People will agree with them while signing up. Write the content inside the towns and conditions and privacy policy page which should obviously aligns with my website. In case I want to give you much directions about that just create standard pages and do the best practices.



Also enable cookie settings. And also add some terms and conditions and privacy policy page. People will agree with them while signing up. Write the content inside the towns and conditions and privacy policy page which should obviously aligns with my website. In case I want to give you much directions about that just create standard pages and do the best practices.



Chatbot interface 

There is a sample of chatbot interface in the images that I gave you but I don't mean that it should be just like this. well you can change the design if you think is right but I just gave you a sample and you can design the interface like this. But you can modify it as needed. And the chatbot  interface will be same for all the tools no matter what it generates. Now if you find anything in the image which is not in my website description then you can just remove that or if you think that you can add this inside the project then you can do that but do it perfectly if you do that. I mean if you add something ( some new feature) then you should add it perfectly.
But there are only two things for you to maintain . firstly the input fields will vary. for example for the quick blog generator tool there will be input fields like negative box where ( the user will describe what he don't want to include in the generated content) , word range (like 1500 to 2500) , tone (like excited , professional).  in case for the other tools under this category won't have the same input fields even the output fields may also vary. as I want maximum user satisfaction so add all the possible input fields so that the users can customize the content as the wishes and you can also make output fields as you wish but yes as all the tools will give the output in the text format so there should be enough option for manual editing in all the tool interfaces for editing or customizing after generation of the content and you can keep it same for all the tool interfaces and the second thing is that keep some design similarities in all the two interfaces as they are in the same website.

Okay so these are the front end functionalities or pages now let's take a look at the back and functionalities 


1. In the description of the dashboard I told something like there will be three sections in the upper side and one section will represent that how many credits or points the user got by sharing the website. Now try to understand suppose there are two users user1 and user2. Now the user1 shared our website using his unique link to the user2. In case user1 will get the link at somewhere in his dashboard and it will be unique for every user. Now user1 will automatically get one credit because one user signed up or I should say registered using his link. Now if user2 earns any credit by sharing our website or by watching ads then the user1 will get the same amount of credit automatically. For example suppose user2 shared our website to five people and got five credits then user1 will get five credits automatically without doing anything because the user2 came from the reference of the user1 or I should say the referral link of user1. One credit is enough for generating one content from any of the tool or I should say it is for one token. Using one credit user can have one blog or one video or one audio. in simple terms he can have one output from any too( under any category) as the user wish. So I need a mechanism for that and tell me if you need any external API or anything external for this. But it will be better if you can build it by writing code by yourself.


2. API example for all the text based categories ( like blog tool , research tools SEO tools. Facebook and other social media tools which are text-based or I should say which give text as the output) This is an API for the quick blog generator tool from the blog tools category. Now you should build APIs for all the other tools which are under all the other text based categories. In case you can see in this example there is filtering for the input and output to make sure that the content generated by this tool is halal by the rules of Islam. In the same way you should maintain this filtering process at all the APIs for all the text-based tools. And you can also see there is a format in the output because the output gives both text for the blog and image prompt which is also text but it is for generating images. And it provides this in a format. So when you build any tool You should try to keep the output as formatted as possible according to the tool because the format for all the tools are not same. But I don't mean to do something complex if you think that simple output format is right then you can also do that. 


Also if you find any error or bug even in my API example then fix that and you can also edit this if you think is right but don't do something unnecessary. Every API should be specialized for each tool. For example this API is for only generating blogs or I should say this is built only for the quick blog generator. In  case, the API for the hashtag generator tool should only generate halal hashtags nothing else. And every tool will have separated API and every tool must have at least one API . if you can't cover every tool with only one API then any tool can have several APIs if needed but don't add anything unnecessary and every tool should have at least one API. And if you want to combine several tools with one API or I should say if you want to do any exception in this case than tell me for confirmation. And yes I forgot to mention one more thing In this API example code you can see that there are some input fields like tone, word_range, negative_box. in case add all the possible parameters in every API. In case parameters won't be same for all the tools even each tool needs different input fields so it needs different parameters. For user satisfaction you should add all the possible input fields at the front end and to coordinate with the front end you should also add all the needed parameters at the back end. And yes if user don't give input for any parameter even if he don't give input for all the parameters then AI will write as it thinks is right or I should say it will use its default functionality for  each parameter( which is not filled by the user)  and yes there should be no required parameter because all the parameters should be optional. In this API example it has the needed parameters and the parameters are optional. Well keep these principles for all the APIs continuously.
if you want to do any exception in this case than tell me for confirmation. And there is another thing you can see that in the API example the output has a limitation of 7000 words so if you need to add any more limitations in any other tool then you can do that but make sure that The tool has the ability to generate the content with the limit. For example In case if you understand that this G4F model can't generate 7000 words at once then do some customizations and use the same model but it should give a blog of maximum 7000 words. If it can't generate so much content at once then you can make necessary changes to split the process and it will provide the full blog in several steps. So if It is not capable to do that then it should not fail I mean it should not generate content less than 7000 words. rather it can split the generation process and can generate the content in several steps. But it should be The inner functionality of the tool and the user should get the final output at once. If you think you can't make a mechanism like that and the G4F model can't generate 7000 words at once then you should reduce the  limit 7000 as needed.



Here's a simplified and streamlined example of a backend API for your Halal Blog Writer Tool, suitable for handing over to AI as an example. It incorporates basic keyword-based filtering to ensure compliance without relying on external APIs.


---

Backend API for Halal Blog Writer Tool

Code:


from flask import Flask, request, jsonify
from g4f.client import Client

app = Flask(__name__)

# Initialize the G4F Client
client = Client()

@app.route('/api/full_blog_writer', methods=['POST'])
def full_blog_writer():
    # Extract the input data
    data = request.json or {}
    prompt = data.get('prompt', '').strip()
    negative_box = data.get('negative_box', '').strip()  # Content to avoid
    word_range = data.get('word_range', '1500-2500')  # Default word range
    tone = data.get('tone', 'neutral')  # Default tone is neutral

    # Input validation for Halal compliance
    if not is_halal(prompt) or not is_halal(negative_box):
        return jsonify({"error": "Input contains prohibited content. Please revise your prompt."}), 400

    try:
        # Generate the full prompt for the model
        full_prompt = f"""
        Write a halal-friendly blog on: {prompt or 'a topic of your choice'}.
        Avoid mentioning: {negative_box or 'nothing specific'}.
        Tone: {tone}.
        Word count range: {word_range}.
        """

        # Call the G4F model
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": full_prompt}]
        )
        blog_content = response.choices[0].message.content

        # Restrict output to a maximum of 7,000 words
        if len(blog_content.split()) > 7000:
            return jsonify({"error": "Generated content exceeds the 7,000-word limit."}), 400

        # Generate prompts for images
        image_prompts = extract_image_prompts(blog_content)

        return jsonify({
            "blog": blog_content,
            "image_prompts": image_prompts
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def is_halal(text):
    """
    Simple keyword-based Halal filter for input and output validation.
    """
    prohibited_words = ["haram", "violence", "inappropriate", "forbidden"]
    return not any(word in text.lower() for word in prohibited_words)

def extract_image_prompts(blog_text):
    """
    Generate image prompts from blog sections. For simplicity, extract 
    one prompt per paragraph or based on specific logic.
    """
    paragraphs = blog_text.split("\n")
    image_prompts = []

    for paragraph in paragraphs:
        if len(paragraph.strip()) > 10:  # Avoid empty lines
            image_prompts.append(f"Generate an image for: {paragraph[:50]}...")

    return image_prompts

if __name__ == "__main__":
    app.run(debug=True) 


How It Works

1. Endpoint:

POST /api/full_blog_writer

Input: JSON payload with a prompt field, e.g., {"prompt": "The importance of kindness in Islam"}.

Output: The generated blog text and image prompts.



2. Input Validation:

The is_halal function checks the prompt for prohibited words (e.g., "haram", "violence").

If the prompt is invalid, an error message is returned.

3. Output Validation:

After generating the blog, the same is_halal function scans the output to ensure compliance.

If the output is not halal, an error is returned.



4. Image Prompts:

The extract_image_prompts function analyzes the generated blog text and creates prompts for associated images.

Prompts are extracted from key sections of the blog.



5. Final JSON Response:

Includes:

Full blog content (blog field).

A list of image prompts (image_prompts field).






---

Output Format

The response format ensures consistency with your requirements:

{
    "blog": "This is the full blog text...",
    "image_prompts": [
        "Generate an image for: The introduction of the topic...",
        "Generate an image for: The main section discussing details...",
        "Generate an image for: The concluding thoughts..."
    ]
}


---

Why This Is Simplified for AI

No External API Key: The example uses only keyword-based filtering, which can be handled by simple logic in Python.

Scalable: Easy to replicate across other text-based tools.

Customizable: You can modify is_halal and extract_image_prompts to suit specific needs.



---

Additional Context for Halal Filtering

To ensure halal compliance:

1. Simplest Approach:

Use keyword-based filtering as shown in is_halal.

Maintain a configurable list of prohibited words or phrases.

3. History. You may see in the dashboard and also in the chatbot interface that there is an option to see the history and the history should be saved so I need that mechanism at the back end also.

4. Saved. There should be an option in the menu and also after anyone generates any content from the tools he should see this option and it is called saved( at the menu) or save ( at the tool/chatbot interface) . He should be able to save the work or the content he generated and he should be able to create folders and files under these folders and he will also be able to create file without any folder and it is like a standard file manager or I should say not complex but yeah it's like a normal file manager. I also want a search engine there, which will help the user to search among the files and folders. There should be also filters in the search engine. In case he will use the filter to search only folders or to search only files across the whole file manager functionality ( Suppose someone searched for SS. And if he uses a filter to only see the files then he should see the file SS which is under a folder and he will also see any file which is close to his search keyword even if it is not under any folder. )  And user should be able to download a file or a folder separately. and if he wants to download all the files and folders then he will have an option in the dashboard called Export to CSV and if he downloads files separately as a file then he will have several options like PDF or PPT.


These were the information about the project and below are the list of all the necessary files divided into different batches 

Additional features needed 



Functionality 1: G4F Model Integration 1. Add a new category to the application that lists all models supported by G4F, including models that are: • Not available for free or are paid, such as: • GPT-4 • GPT-4 Turbo • Claude 2 • Open-source but tough to access, such as: • Llama 2 • Falcon • Mistral • Other models supported by G4F, like Google Bard. 2. Implement a single tool interface where users can: • Select their desired AI model via a dropdown menu in an input box. • Choose between free models (like Llama 2) or tough-to-get/paid models (like GPT-4). Functionality 2: Admin Dashboard 1. Create an admin dashboard accessible only by admins, with the following features: • Users can log in with their email and password. • If the credentials match a predefined admin email/password, they log in as an admin. • Otherwise, they log in as a normal user with no access to the admin dashboard. • Admin Capabilities: 1. View all users’ generated content. 2. Block or unblock specific users. 3. Delete specific history items from a user’s account. 4. Send notifications to specific users or all users. 5. Add or delete user credits. 6. Add moreFunctionality 1: G4F Model Integration 1. Add a new category to the application that lists all models supported by G4F, including models that are: • Not available for free or are paid, such as: • GPT-4 • GPT-4 Turbo • Claude 2 • Open-source but tough to access, such as: • Llama 2 • Falcon • Mistral • Other models supported by G4F, like Google Bard. 2. Implement a single tool interface where users can: • Select their desired AI model via a dropdown menu in an input box. • Choose between free models (like Llama 2) or tough-to-get/paid models (like GPT-4). Functionality 2: Admin Dashboard 1. Create an admin dashboard accessible only by admins, with the following features: • Users can log in with their email and password. • If the credentials match a predefined admin email/password, they log in as an admin. • Otherwise, they log in as a normal user with no access to the admin dashboard. • Admin Capabilities: 1. View all users’ generated content. 2. Block or unblock specific users. 3. Delete specific history items from a user’s account. 4. Send notifications to specific users or all users. 5. Add or delete user credits. 6. Add moreFunctionality 1: G4F Model Integration 1. Add a new category to the application that lists all models supported by G4F, including models that are: • Not available for free or are paid, such as: • GPT-4 • GPT-4 Turbo • Claude 2 • Open-source but tough to access, such as: • Llama 2 • Falcon • Mistral • Other models supported by G4F, like Google Bard. 2. Implement a single tool interface where users can: • Select their desired AI model via a dropdown menu in an input box. • Choose between free models (like Llama 2) or tough-to-get/paid models (like GPT-4). Functionality 2: Admin Dashboard 1. Create an admin dashboard accessible only by admins, with the following features: • Users can log in with their email and password. • If the credentials match a predefined admin email/password, they log in as an admin. • Otherwise, they log in as a normal user with no access to the admin dashboard. • Admin Capabilities: 1. View all users’ generated content. 2. Block or unblock specific users. 3. Delete specific history items from a user’s account. 4. Send notifications to specific users or all users. 5. Add or delete user credits. 6. Add more admin accounts by providing email/password credentials. • Statistics: • Total users. • Active users (daily, weekly, monthly). • Total generated content (system-wide and per user). • Most used models and their usage frequency. • Average response times for each model. • Total blocked users. • Total credits assigned or used. • Blank placeholders for additional admin stats or controls. 2. Initial Admin Credentials: Leave placeholders for the first two admin accounts (email/password). [some extra information are I can see there are three parts in the file list for the second functionality in case you will create the first two part after sending this message you can create and edit all the necessary files as needed in case the files which are need to create are listed and you can edit any file or create any more file which is not even in the list if you think is right in case these are the two emails and passwords if someone logs in with these emails and passwords then you should understand that he is an admin and he will be redirected to the admin dashboard and you should save these email and passwords by default then if I need any more admin, then I will create that after logging in using any of these two emails and passwords. Also keep in mind there is no need of something like two step authentication and when someone will give any of these combinations then will be automatically logged in and will be automatically redirected to the admin dashboard. But as there will be option for forgot password if someone forgot the password I mean if it any user or any admin for the password then you can send confirmation email to change the password and then login again. It is a standard feature which is available in almost all the login forms across the web. well the emails and passwords are written below
First email: shahidhasanpollob@gmail.com
Password associated with first email: 3xs4v7788
Second email: s.hasan.p.369@gmail.com
Password associated with second email: 3gigi7788
Now there are two things first the spaces are not counted in the password so the spaces are not included and keep in mind that these two emails and passwords are for prime admin. in case there are two types of admin one is normal admin and the another is prime admin now everything is same between them but there is simple difference that the prime admin can't be deleted. I mean they are admin permanently but the normal admin can be deleted by the prime admin. so the admin can create normal admin or create prime admin or delete normal admin but the normal admin can only create normal admin and can't delete any kind of admin in case the other things like the other statistics, the other controls over the users and everything else are same for all the admins and there is no difference in those.]Functionality 3: Programming Tools (Optional) 1. Add a new category for programming tools (like GPT Engineer). Users can: • Provide a project description. • AI will: • Ask clarification questions about the project. • Generate up to 1,500 files at once. If the project exceeds this limit, it will notify the user and continue in multiple steps. • Generate projects for a wide range of use cases: • Mobile app development. • Cloud architecture. • DevOps engineering. • Any programming-related tasks.[it means that as you we are using G4 model so it can do any kind of programming related task anything actually. And if the user don't like the thing after the previewing, then he will tell for changing and it will be changed according to the requirement and there will be preview feature like v0] 2. Include additional features: • A preview option for generated files. • Manual code editing tools in the interface. • A simple and user-friendly design similar to v0.


 4. Hey as I have added two new categories so I guess I need to list them inside tools or I should say inside the menu of the website and I guess the navigation-menu.tsx or the navigation-bar.tsx file is containing that code. There is Also another thing which is maybe called  url routing. For example there is a blog tool category in the tool option so if someone click on that category then he will see all 35 tools under that category and if he clicks on any of the tool, then he will be taken to the interface directly . I want the same for the new two tool category . In case the powerful ai models (the category which gives multiple models to use. I mean the first functionality ) has only one tool interface so when they will click on this category they should directly go to that interface . I guess the programming tool category also has one interface so you can do the same for this one but if this one has multiple interfaces than adjust it as you think is right but take a look at the other catagories which are already defined. And maybe these are already updated but you should check it and update it if needed .



5. Also there is another think that when somebody register or sign up as a new user he should get 20 credits automatically.these are the free credits given  for opening new account .Using one credit user can have one output by any of the blog tools or one output by any of the  YouTube tools or one output by programming Tool .in simple terms he can have one output from any too( under any category) as the user wish and he can manually edit it as much as he want but if he want to tell the ai to edit the response by regenerating that according to the edit requirements than he will provide another prompt means he will need another credit. After signing up he will see a notification that he got 20 free credits and after finishing these credits he can get more credit but if he wants to know about that in detail he should read the pricing page and all the credits are finished. He should see this kind of message if he tries to use any tool , I mean if he wants use any tool after finishing his credits than the he will not be able to do that rather he will see a message telling him that his credits are finished and now he need to earn or renew credits and for that he should visit the pricing page for detailed explanation about that and don't write messages like this I am just telling you the context make it more creative and use firebase cloud messaging for sending notifications as I am using it for my notifications and all the other things related to notifications . In case about enabling these feature do the best practices and standard things in the industry as this feature is common at many places.






# Frontend Batches

## Batch 1: Core Layout and Navigation
Description: Essential layout components and navigation structure
- `/app/layout.tsx` - Root layout with providers
- `/app/page.tsx` - Homepage
- `/components/layout/header.tsx` - Main header with navigation
- `/components/layout/footer.tsx` - Site footer
- `/components/ui/navigation-menu.tsx` - Navigation menu component
- `/components/ui/theme-toggle.tsx` - Dark/light mode toggle
- `/lib/utils.ts` - Utility functions
- `/styles/globals.css` - Global styles
- `/config/site.ts` - Site configuration
- `/types/index.d.ts` - TypeScript definitions
- `/public/logo.svg` - Site logo

## Batch 2: Authentication & User Management
Description: Authentication flows and user profile management
- `/app/(auth)/login/page.tsx` - Login page
- `/app/(auth)/signup/page.tsx` - Signup page
- `/app/(auth)/forgot-password/page.tsx` - Password reset
- `/components/auth/login-form.tsx` - Login form component
- `/components/auth/signup-form.tsx` - Signup form component
- `/components/auth/auth-form.tsx` - Shared auth form components
- `/lib/auth.ts` - Authentication utilities
- `/hooks/use-auth.tsx` - Authentication hook
- `/components/ui/form.tsx` - Form components
- `/components/ui/input.tsx` - Input components
- `/components/ui/button.tsx` - Button components

## Batch 3: Dashboard & Analytics
Description: User dashboard and analytics components
- `/app/(dashboard)/dashboard/page.tsx` - Main dashboard
- `/components/dashboard/credits-display.tsx` - Credits section
- `/components/dashboard/referral-stats.tsx` - Referral tracking
- `/components/dashboard/ad-credits.tsx` - Ad-based credits
- `/components/dashboard/activity-log.tsx` - Recent activity
- `/components/dashboard/stats-card.tsx` - Stats card component
- `/components/ui/card.tsx` - Card component
- `/components/ui/data-table.tsx` - Data table component
- `/hooks/use-dashboard.tsx` - Dashboard data hook
- `/lib/dashboard.ts` - Dashboard utilities
- `/types/dashboard.d.ts` - Dashboard types

## Batch 4: Tool Interface Components
Description: Core components for tool interfaces
- `/components/tools/tool-interface.tsx` - Base tool interface
- `/components/tools/input-form.tsx` - Tool input form
- `/components/tools/output-display.tsx` - Tool output display
- `/components/tools/tone-selector.tsx` - Tone selection
- `/components/tools/word-range-input.tsx` - Word range input
- `/components/tools/negative-prompt.tsx` - Negative prompt input
- `/components/tools/save-options.tsx` - Save functionality
- `/components/tools/history-viewer.tsx` - History component
- `/components/ui/dropdown.tsx` - Dropdown component
- `/components/ui/textarea.tsx` - Textarea component
- `/hooks/use-tool.tsx` - Tool interaction hook

## Batch 5: Blog Tools Category
Description: Blog tool implementations

[ actually I don't have the file names for this batch but all the files which are not included into any other batches are inside this batch ]


**Batch 6: Writing Assistant Tools (Part 1)**
```markdown
1. components/tools/writing/grammar-checker.tsx
2. components/tools/writing/sentence-rewriter.tsx
3. components/tools/writing/creative-idea-generator.tsx
4. components/tools/writing/context-improvement.tsx
5. components/tools/writing/word-simplifier.tsx
6. components/tools/writing/idea-suggestion.tsx
7. components/tools/writing/tone-adjuster.tsx
8. components/tools/writing/style-consistency.tsx
9. components/tools/writing/advanced-grammar.tsx
10. components/tools/writing/seo-keyword-inserter.tsx
```

**Batch 7: Writing Assistant Tools (Part 2)**
```markdown
1. components/tools/writing/document-polisher.tsx
2. components/tools/writing/plagiarism-rewriter.tsx
3. components/tools/writing/creative-prompt.tsx
4. components/tools/writing/audience-voice.tsx
5. components/tools/writing/content-expander.tsx
6. components/tools/writing/paragraph-simplifier.tsx
7. components/tools/writing/formal-converter.tsx
8. components/tools/writing/emotion-enhancer.tsx
9. components/tools/writing/fact-checker.tsx
10. components/tools/writing/dialogue-generator.tsx
```





**Batch 8: Writing Assistant Tools (Part 3)**
```markdown
1. components/tools/writing/citation-formatter.tsx
2. components/tools/writing/vocabulary-enhancer.tsx
3. components/tools/writing/transition-improver.tsx
4. components/tools/writing/conclusion-generator.tsx
5. components/tools/writing/introduction-creator.tsx
6. components/tools/writing/outline-builder.tsx
7. components/tools/writing/metaphor-generator.tsx
8. components/tools/writing/headline-optimizer.tsx
9. components/tools/writing/quote-finder.tsx
10. components/tools/writing/summary-creator.tsx
```

**Batch 9: YouTube Tools (Part 1)**
```markdown
1. components/tools/youtube/title-generator.tsx
2. components/tools/youtube/description-writer.tsx
3. components/tools/youtube/tag-optimizer.tsx
4. components/tools/youtube/thumbnail-designer.tsx
5. components/tools/youtube/script-writer.tsx
6. components/tools/youtube/hook-creator.tsx
7. components/tools/youtube/end-screen-generator.tsx
8. components/tools/youtube/caption-generator.tsx
9. components/tools/youtube/keyword-researcher.tsx
10. components/tools/youtube/engagement-analyzer.tsx
```

**Batch 10: YouTube Tools (Part 2)**
```markdown
1. components/tools/youtube/content-planner.tsx
2. components/tools/youtube/trend-analyzer.tsx
3. components/tools/youtube/competitor-research.tsx
4. components/tools/youtube/analytics-interpreter.tsx
5. components/tools/youtube/audience-insights.tsx
6. components/tools/youtube/playlist-optimizer.tsx
7. components/tools/youtube/collaboration-finder.tsx
8. components/tools/youtube/monetization-advisor.tsx
9. components/tools/youtube/channel-auditor.tsx
10. components/tools/youtube/niche-finder.tsx
```

**Batch 11: API Routes (Part 1)**
```markdown
1. app/api/tools/writing/grammar-check/route.ts
2. app/api/tools/writing/sentence-rewrite/route.ts
3. app/api/tools/writing/idea-generation/route.ts
4. app/api/tools/writing/context-improve/route.ts
5. app/api/tools/writing/word-simplify/route.ts
6. app/api/tools/writing/tone-adjust/route.ts
7. app/api/tools/writing/style-check/route.ts
8. app/api/tools/writing/seo-insert/route.ts
9. app/api/tools/writing/plagiarism-check/route.ts
10. app/api/tools/writing/content-expand/route.ts
```

**Batch 12: API Routes (Part 2)**
```markdown
1. app/api/tools/youtube/title-generate/route.ts
2. app/api/tools/youtube/description-write/route.ts
3. app/api/tools/youtube/tag-optimize/route.ts
4. app/api/tools/youtube/thumbnail-design/route.ts
5. app/api/tools/youtube/script-write/route.ts
6. app/api/tools/youtube/hook-create/route.ts
7. app/api/tools/youtube/caption-generate/route.ts
8. app/api/tools/youtube/keyword-research/route.ts
9. app/api/tools/youtube/engagement-analyze/route.ts
10. app/api/tools/youtube/content-plan/route.ts
```

**Batch 13: Authentication Files**
```markdown
1. app/api/auth/signup/route.ts
2. app/api/auth/login/route.ts
3. app/api/auth/logout/route.ts
4. app/api/auth/reset-password/route.ts
5. components/auth/SignUpForm.tsx
6. components/auth/LoginForm.tsx
7. components/auth/ResetPasswordForm.tsx
8. lib/auth/validation.ts
9. lib/auth/session.ts
10. hooks/useAuthentication.ts
```

**Batch 14: Testing Files (Part 1)**
```markdown
1. __tests__/components/tools/writing/grammar-checker.test.tsx
2. __tests__/components/tools/writing/sentence-rewriter.test.tsx
3. __tests__/components/tools/youtube/title-generator.test.tsx
4. __tests__/components/tools/youtube/description-writer.test.tsx
5. __tests__/components/auth/SignUpForm.test.tsx
6. __tests__/components/auth/LoginForm.test.tsx
7. __tests__/lib/auth/validation.test.ts
8. __tests__/lib/auth/session.test.ts
9. __tests__/hooks/useAuthentication.test.ts
10. __tests__/hooks/useTool.test.ts
```

**Batch 15: Configuration Files**
```markdown
1. next.config.js
2. tailwind.config.js
3. jest.config.js
4. .env.example
5. tsconfig.json
6. .eslintrc.json
7. .prettierrc
8. .gitignore
9. package.json
10. README.md
```

**Batch 16: Type Definitions (Part 1)**
```markdown
1. types/tools/writing.d.ts
2. types/tools/youtube.d.ts
3. types/tools/blog.d.ts
4. types/auth.d.ts
5. types/api.d.ts
6. types/components.d.ts
7. types/hooks.d.ts
8. types/utils.d.ts
9. types/config.d.ts
10. types/common.d.ts






**Batch 17: Writing Assistant Tool Components (Part 1)**
```markdown
1. components/tools/writing/grammar-checker/index.tsx
2. components/tools/writing/sentence-rewriter/index.tsx
3. components/tools/writing/creative-idea-generator/index.tsx
4. components/tools/writing/context-improvement/index.tsx
5. components/tools/writing/word-simplifier/index.tsx
6. components/tools/writing/idea-suggestion/index.tsx
7. components/tools/writing/tone-adjuster/index.tsx
8. components/tools/writing/style-consistency/index.tsx
9. components/tools/writing/advanced-grammar/index.tsx
10. components/tools/writing/seo-keyword/index.tsx
```

**Batch 18: Writing Assistant Tool Components (Part 2)**
```markdown
1. components/tools/writing/document-polisher/index.tsx
2. components/tools/writing/plagiarism-rewriter/index.tsx
3. components/tools/writing/creative-prompt/index.tsx
4. components/tools/writing/audience-voice/index.tsx
5. components/tools/writing/content-expander/index.tsx
6. components/tools/writing/paragraph-simplifier/index.tsx
7. components/tools/writing/formal-converter/index.tsx
8. components/tools/writing/emotion-enhancer/index.tsx
9. components/tools/writing/fact-checker/index.tsx
10. components/tools/writing/dialogue-generator/index.tsx
```

**Batch 19: YouTube Tool Components (Part 1)**
```markdown
1. components/tools/youtube/ai-scriptwriter/index.tsx
2. components/tools/youtube/hook-creator/index.tsx
3. components/tools/youtube/video-seo/index.tsx
4. components/tools/youtube/description-generator/index.tsx
5. components/tools/youtube/idea-finder/index.tsx
6. components/tools/youtube/script-outline/index.tsx
7. components/tools/youtube/title-tag/index.tsx
8. components/tools/youtube/engagement-script/index.tsx
9. components/tools/youtube/cta-generator/index.tsx
10. components/tools/youtube/hashtag-finder/index.tsx
```

**Batch 20: API Routes for Writing Tools**
```markdown
1. app/api/tools/writing/grammar/route.ts
2. app/api/tools/writing/sentence/route.ts
3. app/api/tools/writing/ideas/route.ts
4. app/api/tools/writing/context/route.ts
5. app/api/tools/writing/simplify/route.ts
6. app/api/tools/writing/tone/route.ts
7. app/api/tools/writing/style/route.ts
8. app/api/tools/writing/advanced/route.ts
9. app/api/tools/writing/seo/route.ts
10. app/api/tools/writing/document/route.ts
```

**Batch 21: API Routes for YouTube Tools**
```markdown
1. app/api/tools/youtube/script/route.ts
2. app/api/tools/youtube/hook/route.ts
3. app/api/tools/youtube/seo/route.ts
4. app/api/tools/youtube/description/route.ts
5. app/api/tools/youtube/ideas/route.ts
6. app/api/tools/youtube/outline/route.ts
7. app/api/tools/youtube/title/route.ts
8. app/api/tools/youtube/engagement/route.ts
9. app/api/tools/youtube/cta/route.ts
10. app/api/tools/youtube/hashtags/route.ts
```


**Batch 22: Writing Assistant Tool Pages**
```markdown
1. app/tools/writing/grammar-checker/page.tsx
2. app/tools/writing/sentence-rewriter/page.tsx
3. app/tools/writing/creative-idea/page.tsx
4. app/tools/writing/context-improvement/page.tsx
5. app/tools/writing/word-simplifier/page.tsx
6. app/tools/writing/idea-suggestion/page.tsx
7. app/tools/writing/tone-adjuster/page.tsx
8. app/tools/writing/style-consistency/page.tsx
9. app/tools/writing/advanced-grammar/page.tsx
10. app/tools/writing/seo-keyword/page.tsx
```

**Batch 23: Blog Tool Pages (Part 1)**
```markdown
1. app/tools/blog/quick-generator/page.tsx
2. app/tools/blog/idea-generator/page.tsx
3. app/tools/blog/outline-maker/page.tsx
4. app/tools/blog/seo-helper/page.tsx
5. app/tools/blog/grammar-check/page.tsx
6. app/tools/blog/visual-content/page.tsx
7. app/tools/blog/trending-topics/page.tsx
8. app/tools/blog/keyword-planner/page.tsx
9. app/tools/blog/headline-optimizer/page.tsx
10. app/tools/blog/ai-writer/page.tsx
```

**Batch 24: Blog Tool Pages (Part 2)**
```markdown
1. app/tools/blog/content-optimizer/page.tsx
2. app/tools/blog/plagiarism-check/page.tsx
3. app/tools/blog/topic-suggestion/page.tsx
4. app/tools/blog/sentence-enhance/page.tsx
5. app/tools/blog/reader-outline/page.tsx
6. app/tools/blog/focus-tracker/page.tsx
7. app/tools/blog/research-collect/page.tsx
8. app/tools/blog/idea-finder/page.tsx
9. app/tools/blog/structure-gen/page.tsx
10. app/tools/blog/engagement-analyze/page.tsx
```

**Batch 25: YouTube Tool Pages**
```markdown
1. app/tools/youtube/script-writer/page.tsx
2. app/tools/youtube/hook-creator/page.tsx
3. app/tools/youtube/seo-optimizer/page.tsx
4. app/tools/youtube/description-gen/page.tsx
5. app/tools/youtube/idea-finder/page.tsx
6. app/tools/youtube/outline-maker/page.tsx
7. app/tools/youtube/title-tags/page.tsx
8. app/tools/youtube/engagement-script/page.tsx
9. app/tools/youtube/cta-generator/page.tsx
10. app/tools/youtube/hashtag-finder/page.tsx
```

**Batch 26: API Routes for Blog Tools**
```markdown
1. app/api/tools/blog/quick-generator/route.ts
2. app/api/tools/blog/idea-generator/route.ts
3. app/api/tools/blog/outline-maker/route.ts
4. app/api/tools/blog/seo-helper/route.ts
5. app/api/tools/blog/grammar-check/route.ts
6. app/api/tools/blog/visual-content/route.ts
7. app/api/tools/blog/trending-topics/route.ts
8. app/api/tools/blog/keyword-planner/route.ts
9. app/api/tools/blog/headline-optimizer/route.ts
10. app/api/tools/blog/ai-writer/route.ts
```



**Batch 27: File Management System**
```markdown
1. components/file-management/FileExplorer.tsx
2. components/file-management/FolderTree.tsx
3. components/file-management/FileUploader.tsx
4. components/file-management/FileViewer.tsx
5. components/file-management/SearchFiles.tsx
6. hooks/useFileSystem.ts
7. lib/file-management/export.ts
8. lib/file-management/search.ts
9. types/file-system.d.ts
10. utils/file-helpers.ts
```

**Batch 28: Credit System Implementation**
```markdown
1. components/credits/CreditBalance.tsx
2. components/credits/ReferralSystem.tsx
3. components/credits/CreditHistory.tsx
4. components/credits/EarnCredits.tsx
5. hooks/useCredits.ts
6. lib/credits/calculations.ts
7. lib/credits/referral.ts
8. api/credits/balance/route.ts
9. api/credits/earn/route.ts
10. api/credits/history/route.ts
```

**Batch 29: Multi-language Support**
```markdown
1. components/language/LanguageSelector.tsx
2. components/language/TranslatedContent.tsx
3. hooks/useTranslation.ts
4. lib/i18n/config.ts
5. lib/i18n/translations.ts
6. middleware/language.ts
7. types/i18n.d.ts
8. utils/language-detection.ts
9. contexts/LanguageContext.tsx
10. api/language/detect/route.ts
```

**Batch 30: Help Center & Documentation**
```markdown
1. app/help/page.tsx
2. app/help/[category]/page.tsx
3. app/help/[category]/[article]/page.tsx
4. components/help/SearchDocs.tsx
5. components/help/ArticleView.tsx
6. components/help/CategoryList.tsx
7. components/help/RelatedArticles.tsx
8. lib/help/search.ts
9. lib/help/articles.ts
10. types/help-center.d.ts
```

**Batch 31: Notification System**
```markdown
1. components/notifications/NotificationCenter.tsx
2. components/notifications/NotificationItem.tsx
3. components/notifications/NotificationBell.tsx
4. hooks/useNotifications.ts
5. lib/notifications/fcm-config.ts
6. lib/notifications/handlers.ts
7. api/notifications/subscribe/route.ts
8. api/notifications/unsubscribe/route.ts
9. api/notifications/preferences/route.ts
10. types/notifications.d.ts
```



**Batch 32: Testing Infrastructure**
```markdown
1. jest.setup.ts
2. __tests__/components/tools/blog/quick-generator.test.tsx
3. __tests__/components/tools/writing/grammar-checker.test.tsx
4. __tests__/components/tools/youtube/script-writer.test.tsx
5. __tests__/lib/api-client.test.ts
6. __tests__/hooks/use-tool.test.ts
7. __tests__/utils/validation.test.ts
8. __tests__/utils/content-filter.test.ts
9. __tests__/mocks/tool-responses.ts
10. __tests__/test-utils.tsx
```

**Batch 33: API Integration**
```markdown
1. lib/api-client/tool-request.ts
2. lib/api-client/response-handler.ts
3. lib/api-client/error-handler.ts
4. lib/api-client/rate-limiter.ts
5. lib/api-client/cache-manager.ts
6. lib/api-client/content-filter.ts
7. lib/api-client/halal-validator.ts
8. lib/api-client/token-manager.ts
9. types/api-responses.d.ts
10. types/api-requests.d.ts
```

**Batch 34: Export System**
```markdown
1. components/export/ExportButton.tsx
2. components/export/FormatSelector.tsx
3. components/export/ProgressIndicator.tsx
4. lib/export/pdf-generator.ts
5. lib/export/csv-generator.ts
6. lib/export/ppt-generator.ts
7. lib/export/file-saver.ts
8. hooks/useExport.ts
9. types/export.d.ts
10. utils/export-helpers.ts
```




**Batch 35: Backend Integration**
```markdown
1. lib/api/flask-client.ts
2. lib/api/g4f-integration.ts
3. lib/api/content-filter.ts
4. lib/api/halal-validator.ts
5. lib/api/error-handler.ts
6. lib/api/rate-limiter.ts
7. types/api-responses.d.ts
8. types/api-requests.d.ts
9. hooks/useApi.ts
10. utils/api-helpers.ts
```

**Batch 36: Security & Compliance**
```markdown
1. lib/security/content-validator.ts
2. lib/security/data-protection.ts
3. lib/security/halal-filter.ts
4. lib/security/terms-enforcer.ts
5. middleware/auth-check.ts
6. middleware/content-filter.ts
7. middleware/rate-limit.ts
8. types/security.d.ts
9. utils/security-helpers.ts
10. hooks/useContentValidation.ts
```

**Batch 37: History & Analytics**
```markdown
1. components/history/HistoryViewer.tsx
2. components/history/HistoryItem.tsx
3. components/history/ExportHistory.tsx
4. lib/history/storage.ts
5. lib/history/analytics.ts
6. hooks/useHistory.ts
7. api/history/save/route.ts
8. api/history/fetch/route.ts
9. api/history/delete/route.ts
10. types/history.d.ts
```


