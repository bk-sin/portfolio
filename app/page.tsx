"use client"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { NavLink } from "@/components/nav-link"
import { SectionHeading } from "@/components/section-heading"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CursorFollower } from "@/components/cursor-follower"
import { InteractiveHero } from "@/components/interactive-hero"
import { SkillsSection } from "@/components/skills-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { ShareCard } from "@/components/share-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { BlogCard } from "@/components/blog-card"

// Sample project data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A mobile-first task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with data visualization and reporting capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

// Sample blog posts
const blogPosts = [
  {
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn how to create web applications that are accessible to everyone, including people with disabilities.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "Accessibility",
    slug: "building-accessible-web-applications",
  },
  {
    title: "The Future of React Server Components",
    excerpt: "Exploring how React Server Components will change the way we build React applications in the future.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "React",
    slug: "future-of-react-server-components",
  },
  {
    title: "Optimizing Database Performance in Production",
    excerpt:
      "Practical tips and strategies for optimizing database performance in high-traffic production environments.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "Database",
    slug: "optimizing-database-performance",
  },
  {
    title: "Creating Custom Hooks in React",
    excerpt: "Learn how to create and use custom hooks to share stateful logic between components in React.",
    date: "January 5, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "React",
    slug: "creating-custom-hooks-react",
  },
]

// Skills data with categories and proficiency levels
const skills = [
  // Frontend
  { name: "React", level: 5, category: "Frontend" },
  { name: "Next.js", level: 5, category: "Frontend" },
  { name: "TypeScript", level: 4, category: "Languages" },
  { name: "JavaScript", level: 5, category: "Languages" },
  { name: "HTML/CSS", level: 5, category: "Frontend" },
  { name: "Tailwind CSS", level: 4, category: "Frontend" },
  { name: "Redux", level: 4, category: "Frontend" },
  { name: "Vue.js", level: 3, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 4, category: "Backend" },
  { name: "Express", level: 4, category: "Backend" },
  { name: "GraphQL", level: 3, category: "Backend" },
  { name: "REST API", level: 5, category: "Backend" },
  { name: "Python", level: 3, category: "Languages" },
  { name: "Django", level: 2, category: "Backend" },

  // Database
  { name: "MongoDB", level: 4, category: "Database" },
  { name: "PostgreSQL", level: 4, category: "Database" },
  { name: "MySQL", level: 3, category: "Database" },
  { name: "Redis", level: 3, category: "Database" },

  // Mobile
  { name: "React Native", level: 4, category: "Mobile" },
  { name: "Flutter", level: 2, category: "Mobile" },

  // DevOps
  { name: "Docker", level: 3, category: "DevOps" },
  { name: "AWS", level: 3, category: "DevOps" },
  { name: "CI/CD", level: 3, category: "DevOps" },
  { name: "Git", level: 5, category: "Tools" },

  // Testing
  { name: "Jest", level: 4, category: "Tools" },
  { name: "Cypress", level: 3, category: "Tools" },
]

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Custom cursor */}
      <CursorFollower />

      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-heading">John Doe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button asChild size="sm" className="hidden sm:flex">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Interactive Hero Section */}
        <section className="py-12 md:py-0">
          <InteractiveHero />
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <SectionHeading
                title="About Me"
                description="I'm a passionate full-stack developer with expertise in web, mobile, and backend development."
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience, I've worked on a variety of projects ranging from small business
                  websites to complex enterprise applications.
                </p>
                <p>
                  My approach to development focuses on creating clean, efficient, and maintainable code while ensuring
                  an exceptional user experience. I'm constantly learning and adapting to new technologies to stay at
                  the forefront of the industry.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
              </div>
              <div className="pt-4">
                <Button variant="outline" asChild className="border border-primary hover:bg-primary/10">
                  <Link href="#" className="group">
                    Download Resume
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-xl text-primary">Web Development</h3>
                <p className="text-muted-foreground">Creating responsive and accessible web applications</p>
              </div>
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-xl text-accent">Mobile Development</h3>
                <p className="text-muted-foreground">Building cross-platform mobile applications</p>
              </div>
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-xl text-accent-secondary">Backend Development</h3>
                <p className="text-muted-foreground">Designing robust and scalable server-side solutions</p>
              </div>
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-transform hover:scale-105 duration-300">
                <h3 className="font-bold text-xl text-primary">Database Design</h3>
                <p className="text-muted-foreground">Creating efficient database structures and queries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 lg:py-32 bg-secondary-light dark:bg-secondary/30">
          <div className="container space-y-12">
            <SectionHeading
              title="Featured Projects"
              description="A selection of my recent work across web, mobile, and backend development."
              centered
            />

            {/* Interactive Project Showcase */}
            <ProjectShowcase projects={projects} />

            <div className="text-center pt-8">
              <Button variant="outline" asChild className="group border border-accent hover:bg-accent/10">
                <Link href="#">
                  View All Projects <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section - Redesigned */}
        <section id="skills" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="space-y-10">
            <SectionHeading
              title="Skills & Expertise"
              description="Technologies and tools I've mastered throughout my career."
              centered
            />

            {/* New Skills Section Component */}
            <SkillsSection skills={skills} />
          </div>
        </section>

        {/* Blog Section - New */}
        <section id="blog" className="py-12 md:py-24 lg:py-32 bg-secondary-light dark:bg-secondary/30">
          <div className="container space-y-12">
            <SectionHeading
              title="Latest from the Blog"
              description="Thoughts, tutorials, and insights about web development and technology."
              centered
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  image={post.image}
                  category={post.category}
                  slug={post.slug}
                />
              ))}
            </div>

            <div className="text-center pt-8">
              <Button
                variant="outline"
                asChild
                className="group border border-accent-secondary hover:bg-accent-secondary/10"
              >
                <Link href="/blog">
                  View All Posts <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <SectionHeading
                  title="Get In Touch"
                  description="Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group p-4 bg-secondary-light dark:bg-secondary rounded-lg transition-all hover:shadow-md">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 group p-4 bg-secondary-light dark:bg-secondary rounded-lg transition-all hover:shadow-md">
                    <Linkedin className="h-5 w-5 text-accent" />
                    <Link href="https://linkedin.com" className="group-hover:text-accent transition-colors">
                      linkedin.com/in/johndoe
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 group p-4 bg-secondary-light dark:bg-secondary rounded-lg transition-all hover:shadow-md">
                    <Github className="h-5 w-5 text-accent-secondary" />
                    <Link href="https://github.com" className="group-hover:text-accent-secondary transition-colors">
                      github.com/johndoe
                    </Link>
                  </div>
                </div>

                {/* Share Card */}
                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-4">Share My Portfolio</h3>
                  <ShareCard name="John Doe" title="Full-Stack Developer" website="www.johndoe.dev" />
                </div>
              </div>
              <div className="bg-secondary-light dark:bg-secondary p-6 rounded-lg shadow-md">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 border rounded-md min-h-[120px] focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 bg-background">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold font-heading">John Doe</span>
            <span className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:john.doe@example.com" className="transition-colors hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}

