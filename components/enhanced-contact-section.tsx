"use client"

import type React from "react"

import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { BackgroundBeams } from "@/components/ui/background-beams"

export function EnhancedContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="relative w-full overflow-hidden bg-background/80 backdrop-blur-sm">
      <div className="container py-12 md:py-24 lg:py-32 relative z-10">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
              Get In Touch
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 backdrop-blur-sm bg-background/30 p-6 rounded-lg border border-border/50">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through the form or directly via email or social media.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <Link
                    href="mailto:john.doe@example.com"
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    john.doe@example.com
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Availability</h3>
                  <p className="text-muted-foreground">Open to freelance projects and full-time opportunities</p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="https://github.com"
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:john.doe@example.com"
                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 backdrop-blur-sm bg-background/30 p-6 rounded-lg border border-border/50"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="min-h-[120px] bg-background/50"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <BackgroundBeams className="opacity-40" />
    </div>
  )
}

