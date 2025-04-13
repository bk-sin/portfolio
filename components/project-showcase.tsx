"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  featured?: boolean
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const containerRef = useRef<HTMLDivElement>(null)

  const goToProject = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection(index > activeIndex ? "right" : "left")
    setActiveIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const nextProject = () => {
    if (isAnimating) return
    goToProject((activeIndex + 1) % projects.length)
  }

  const prevProject = () => {
    if (isAnimating) return
    goToProject((activeIndex - 1 + projects.length) % projects.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 8000)

    return () => clearInterval(interval)
  }, [activeIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextProject()
      } else if (e.key === "ArrowLeft") {
        prevProject()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex])

  const currentProject = projects[activeIndex]

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background gradient-border"
          onClick={prevProject}
          aria-label="Previous project"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background gradient-border"
          onClick={nextProject}
          aria-label="Next project"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative h-[600px] md:h-[500px] overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isAnimating ? (direction === "right" ? "-translate-x-full" : "translate-x-full") : "translate-x-0"
          }`}
        >
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative overflow-hidden">
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="bg-secondary-light dark:bg-secondary p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentProject.title}</h3>
                  <p className="text-muted-foreground">{currentProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => {
                    // Alternate between primary, accent and accent-secondary
                    const bgClass =
                      index % 3 === 0
                        ? "bg-primary/10 text-primary"
                        : index % 3 === 1
                          ? "bg-accent/10 text-accent"
                          : "bg-accent-secondary/10 text-accent-secondary"

                    return (
                      <span key={tech} className={`px-2 py-1 rounded-md text-xs font-medium ${bgClass}`}>
                        {tech}
                      </span>
                    )
                  })}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary-light">
                    <Link href={currentProject.demoUrl} className="flex items-center gap-2">
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="gradient-border">
                    <Link href={currentProject.githubUrl} className="flex items-center gap-2">
                      View Code <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isAnimating
              ? direction === "right"
                ? "translate-x-0"
                : "translate-x-0"
              : direction === "right"
                ? "translate-x-full"
                : "-translate-x-full"
          }`}
        >
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative overflow-hidden">
              <Image
                src={projects[(activeIndex + 1) % projects.length].image || "/placeholder.svg"}
                alt={projects[(activeIndex + 1) % projects.length].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            <div className="bg-secondary-light dark:bg-secondary p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {projects[(activeIndex + 1) % projects.length].title}
                  </h3>
                  <p className="text-muted-foreground">{projects[(activeIndex + 1) % projects.length].description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[(activeIndex + 1) % projects.length].technologies.map((tech, index) => {
                    // Alternate between primary, accent and accent-secondary
                    const bgClass =
                      index % 3 === 0
                        ? "bg-primary/10 text-primary"
                        : index % 3 === 1
                          ? "bg-accent/10 text-accent"
                          : "bg-accent-secondary/10 text-accent-secondary"

                    return (
                      <span key={tech} className={`px-2 py-1 rounded-md text-xs font-medium ${bgClass}`}>
                        {tech}
                      </span>
                    )
                  })}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary-light">
                    <Link
                      href={projects[(activeIndex + 1) % projects.length].demoUrl}
                      className="flex items-center gap-2"
                    >
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="gradient-border">
                    <Link
                      href={projects[(activeIndex + 1) % projects.length].githubUrl}
                      className="flex items-center gap-2"
                    >
                      View Code <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-primary scale-125" : "bg-muted"
            }`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

