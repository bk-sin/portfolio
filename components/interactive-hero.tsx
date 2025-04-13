"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Code, Layers, Zap, Globe, Server, Palette } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface FeaturePoint {
  icon: React.ReactNode
  title: string
  description: string
  position: {
    top: string
    left: string
  }
  colorClasses: {
    bg: string
    text: string
    border: string
    hoverBorder: string
  }
}

export function InteractiveHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  // Define feature points
  const featurePoints: FeaturePoint[] = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code is my priority.",
      position: { top: "25%", left: "15%" },
      colorClasses: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/30",
        hoverBorder: "border-primary/20",
      },
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Full Stack",
      description: "Expertise in both frontend and backend technologies for complete solutions.",
      position: { top: "15%", left: "75%" },
      colorClasses: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/30",
        hoverBorder: "border-accent/20",
      },
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency across all applications.",
      position: { top: "65%", left: "80%" },
      colorClasses: {
        bg: "bg-accent-secondary/10",
        text: "text-accent-secondary",
        border: "border-accent-secondary/30",
        hoverBorder: "border-accent-secondary/20",
      },
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Responsive",
      description: "Creating experiences that work seamlessly across all devices.",
      position: { top: "75%", left: "20%" },
      colorClasses: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/30",
        hoverBorder: "border-primary/20",
      },
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Scalable",
      description: "Building systems that can grow with your business needs.",
      position: { top: "40%", left: "85%" },
      colorClasses: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/30",
        hoverBorder: "border-accent/20",
      },
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "User-Focused",
      description: "Designing with the end user's experience as the top priority.",
      position: { top: "50%", left: "10%" },
      colorClasses: {
        bg: "bg-accent-secondary/10",
        text: "text-accent-secondary",
        border: "border-accent-secondary/30",
        hoverBorder: "border-accent-secondary/20",
      },
    },
  ]

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = Math.random() * 3 + 1
        this.speedX = 0
        this.speedY = 0

        // Use purple and turquoise colors
        const colors = ["rgba(124, 58, 237, 0.8)", "rgba(45, 212, 191, 0.8)", "rgba(236, 72, 153, 0.5)"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(mouseX: number, mouseY: number) {
        // Calculate distance from mouse
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move away from mouse if close
        if (distance < 100) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (100 - distance) / 100

          this.speedX = forceDirectionX * force * -5
          this.speedY = forceDirectionY * force * -5
        } else {
          // Return to original position
          const dx = this.originalX - this.x
          const dy = this.originalY - this.y

          this.speedX = dx * 0.05
          this.speedY = dy * 0.05
        }

        this.x += this.speedX
        this.y += this.speedY
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const createParticles = () => {
      particles.length = 0
      const numberOfParticles = isMobile ? 50 : 150
      const gridSize = Math.sqrt(numberOfParticles)
      const spacing = canvas.width / gridSize

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = i * spacing + spacing / 2
          const y = j * spacing + spacing / 2

          if (x < canvas.width && y < canvas.height) {
            particles.push(new Particle(x, y))
          }
        }
      }
    }

    createParticles()
    window.addEventListener("resize", createParticles)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y)
        particle.draw(ctx)
      })

      // Connect particles with lines
      connectParticles(ctx, particles)

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      const maxDistance = isMobile ? 70 : 100

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            // Use a gradient for the lines
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            gradient.addColorStop(0, "rgba(124, 58, 237, " + (1 - distance / maxDistance) * 0.5 + ")")
            gradient.addColorStop(1, "rgba(45, 212, 191, " + (1 - distance / maxDistance) * 0.5 + ")")

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Track mouse position - FIXED: Now tracking on the entire document
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    // Touch events for mobile - FIXED: Now tracking on the entire document
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        })
      }
    }

    // FIXED: Attach event listeners to document instead of just the canvas
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("touchmove", handleTouchMove)

    // Start animation
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", createParticles)
      window.removeEventListener("resize", checkMobile)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleTouchMove)
    }
  }, [mousePosition, isMobile])

  return (
    <div ref={containerRef} className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Feature points */}
      {!isMobile &&
        featurePoints.map((feature, index) => (
          <div
            key={feature.title}
            className="absolute z-10"
            style={{
              top: feature.position.top,
              left: feature.position.left,
            }}
          >
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredFeature(feature.title)}
              onMouseLeave={() => setHoveredFeature(null)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            >
              <motion.div
                className={`flex items-center justify-center w-12 h-12 rounded-full ${feature.colorClasses.bg} ${feature.colorClasses.text} border ${feature.colorClasses.border}`}
                whileHover={{ scale: 1.2 }}
                animate={hoveredFeature === feature.title ? { scale: 1.2 } : { scale: 1 }}
              >
                {feature.icon}
              </motion.div>

              <AnimatePresence>
                {hoveredFeature === feature.title && (
                  <motion.div
                    className={`absolute top-full mt-2 p-3 rounded-lg bg-background/95 backdrop-blur-sm border ${feature.colorClasses.hoverBorder} shadow-lg w-48 z-20`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className={`font-bold ${feature.colorClasses.text} mb-1`}>{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2 animate-fade-in">
          Full-Stack Developer
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          <span className="gradient-text">Creating digital experiences</span>
        </h1>
        <p
          className="max-w-[600px] text-muted-foreground text-lg md:text-xl mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          I build exceptional and accessible digital experiences for the web, mobile, and backend systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="border border-accent hover:bg-accent/10">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

