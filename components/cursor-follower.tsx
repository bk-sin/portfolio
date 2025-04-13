"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHoveringLink, setIsHoveringLink] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over a link or button
      const target = e.target as HTMLElement
      const isLink =
        target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")

      setIsHoveringLink(!!isLink)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHoveringLink ? "scale(2.5)" : "scale(1)"}`,
          width: "12px",
          height: "12px",
          backgroundColor: "white",
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-white mix-blend-difference transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHoveringLink ? "scale(1.5)" : "scale(1)"}`,
          width: "40px",
          height: "40px",
        }}
      />
    </>
  )
}

