"use client"

import type React from "react"

import { useState } from "react"

interface SkillCardProps {
  name: string
  icon?: React.ReactNode
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="skill-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="font-medium">{name}</span>
    </div>
  )
}

