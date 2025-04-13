"use client"

import { useState, useRef } from "react"
import { toPng } from "html-to-image"
import { Copy, Download, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareCardProps {
  name: string
  title: string
  website: string
}

export function ShareCard({ name, title, website }: ShareCardProps) {
  const [copied, setCopied] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const generateImage = async () => {
    if (!cardRef.current) return

    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 })

      // Create download link
      const link = document.createElement("a")
      link.download = `${name.replace(/\s+/g, "-").toLowerCase()}-card.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Error generating image:", error)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(website).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareOnTwitter = () => {
    const text = `Check out ${name}'s portfolio - ${title}!`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(website)}`
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-6">
      <div
        ref={cardRef}
        className="bg-gradient-to-br from-primary via-accent to-accent-secondary p-8 rounded-lg shadow-lg w-full max-w-md mx-auto text-white"
      >
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-lg">{title}</p>
          <div className="pt-4 pb-2">
            <p className="text-sm opacity-90">{website}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant="outline"
          onClick={copyToClipboard}
          className="flex items-center gap-2 border border-primary hover:bg-primary/10"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied!" : "Copy Link"}
        </Button>
        <Button
          variant="outline"
          onClick={generateImage}
          className="flex items-center gap-2 border border-accent hover:bg-accent/10"
        >
          <Download className="h-4 w-4" />
          Download Card
        </Button>
        <Button
          variant="outline"
          onClick={shareOnTwitter}
          className="flex items-center gap-2 border border-accent-secondary hover:bg-accent-secondary/10"
        >
          <Twitter className="h-4 w-4" />
          Share on Twitter
        </Button>
      </div>
    </div>
  )
}

