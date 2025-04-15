"use client";
import {
  Database,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { NavLink } from "@/components/nav-link";
import { SectionHeading } from "@/components/section-heading";
import { ScrollToTop } from "@/components/scroll-to-top";
import { InteractiveHero } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectShowcase } from "@/components/project-showcase";
import { BlogCard } from "@/components/blog-card";
import { EnhancedContactSection } from "@/components/contact-section";

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
    description:
      "A mobile-first task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with data visualization and reporting capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

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
    excerpt:
      "Exploring how React Server Components will change the way we build React applications in the future.",
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
    excerpt:
      "Learn how to create and use custom hooks to share stateful logic between components in React.",
    date: "January 5, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "React",
    slug: "creating-custom-hooks-react",
  },
];

// Skills data with categories and proficiency levels
const skills = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Redux", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "REST API", category: "Backend" },

  // Database
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },

  // Mobile
  { name: "React Native", category: "Mobile" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },

  // Testing
  { name: "Jest", category: "Tools" },
  { name: "Vitest", category: "Tools" },
  { name: "Cypress", category: "Tools" },
];

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <Link href="/" className="transition-colors hover:text-primary">
              <span className="text-xl font-bold font-heading">Emi Alegre</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">Sobre mí</NavLink>
            <NavLink href="#projects">Proyectos</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:emilianogalegre@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/bk-sin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/emilianoalegre/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button asChild size="sm" className="hidden sm:flex">
              <Link href="#contact">Contacto</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-0">
          <InteractiveHero />
        </section>
        <section
          id="about"
          className="container py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <SectionHeading
                title="Sobre mí"
                description="Soy un desarrollador full-stack con experiencia en desarrollo web, móvil y backend."
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Con más de 3 años en el rubro, he trabajado en varios
                  proyectos: desde sitios web para pequeñas empresas hasta
                  aplicaciones empresariales de alta complejidad. Cada proyecto
                  me ha permitido aprender algo nuevo y afinar mi capacidad para
                  resolver problemas de forma práctica.
                </p>
                <p>
                  Mi prioridad es escribir código claro, eficiente y fácil de
                  mantener, pero siempre pensando en brindar la mejor
                  experiencia a los usuarios. Además, me apasiona estar siempre
                  actualizado y explorar las nuevas tecnologías, lo que me
                  permite adaptarme rápidamente a los cambios en el sector.
                </p>
              </div>
              <div className="pt-4">
                <Button
                  variant="outline"
                  asChild
                  className="border border-primary hover:bg-primary/10"
                >
                  <Link
                    href="https://media.licdn.com/dms/document/media/v2/D4D2DAQGRhCMhZg3Clg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1707944345198?e=1745452800&v=beta&t=OVgPX2wut79Aap1xAq086qI5bWGcjq8YT2ChuNrmXto"
                    className="group"
                    target="_blank"
                  >
                    Descargar Curriculum{" "}
                    <Download className="text-accent-secondary" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-shadow hover:shadow-xl duration-300 relative overflow-hidden">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <div className="absolute w-16 h-16 -top-4 -right-4 opacity-10">
                  <Globe className="w-full h-full" />
                </div>
                <h3 className="font-bold text-xl text-primary relative z-10">
                  Web Development
                </h3>
                <p className="text-muted-foreground relative z-10">
                  Creación de aplicaciones web responsivas y accesibles
                </p>
              </div>
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-shadow hover:shadow-xl duration-300 relative overflow-hidden">
                <Smartphone className="w-8 h-8 text-accent mb-2" />
                <div className="absolute w-16 h-16 -top-4 -right-4 opacity-10 rotate-12">
                  <Smartphone className="w-full h-full" />
                </div>
                <h3 className="font-bold text-xl text-accent relative z-10">
                  Mobile Development
                </h3>
                <p className="text-muted-foreground relative z-10">
                  Desarrollo de aplicaciones mobile multiplataforma
                </p>
              </div>
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-shadow hover:shadow-xl duration-300 relative overflow-hidden">
                <Server className="w-8 h-8 text-accent-secondary mb-2" />
                <div className="absolute w-16 h-16 -top-4 -right-4 opacity-10 -rotate-12">
                  <Server className="w-full h-full" />
                </div>
                <h3 className="font-bold text-xl text-accent-secondary relative z-10">
                  Backend Development
                </h3>
                <p className="text-muted-foreground relative z-10">
                  Desarrollo de soluciones en servidor sólidas y escalables
                </p>
              </div>
              <div className="bg-secondary-light dark:bg-secondary rounded-lg p-6 space-y-2 transition-shadow hover:shadow-xl duration-300 relative overflow-hidden">
                <Database className="w-8 h-8 text-primary mb-2" />
                <div className="absolute w-16 h-16 -top-4 -right-4 opacity-10 rotate-45">
                  <Database className="w-full h-full" />
                </div>
                <h3 className="font-bold text-xl text-primary relative z-10">
                  Database Design
                </h3>
                <p className="text-muted-foreground relative z-10">
                  Creación de estructuras y consultas de bases de datos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="py-12 md:py-24 lg:py-32 bg-secondary-light dark:bg-secondary/30"
        >
          <div className="container space-y-12">
            <SectionHeading
              title="Proyectos Destacados"
              description="Una selección de mis trabajos recientes en desarrollo web, mobile y backend."
              centered
            />
            <ProjectShowcase projects={projects} />

            <div className="text-center pt-8">
              <Button
                variant="outline"
                asChild
                className="border border-primary hover:bg-primary/10"
              >
                <Link href="#">
                  Ver todos los projectos{" "}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="container py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="space-y-10">
            <SectionHeading
              title="Skills & Expertise"
              description="Tecnologías y herramientas que he dominado a lo largo de mi carrera."
              centered
            />
            <SkillsSection skills={skills} />
          </div>
        </section>
        <section
          id="blog"
          className="py-12 md:py-24 lg:py-32 bg-secondary-light dark:bg-secondary/30"
        >
          <div className="container space-y-12">
            <SectionHeading
              title="Lo último de mi Blog"
              description="Reflexiones, tutoriales y ideas sobre tecnología y desarrollo web."
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
                className="border border-primary hover:bg-primary/10"
              >
                <Link href="/blog">
                  Ver todos{" "}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <EnhancedContactSection />
      </main>
      <footer className="border-t py-6 md:py-8 bg-background">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold font-heading">Emi Alegre</span>
            <span className="text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/bk-sin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/emilianoalegre/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:emilianogalegre@gmail.com"
              className="transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
