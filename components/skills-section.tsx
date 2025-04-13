"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Layers,
  Palette,
  Terminal,
  GitBranch,
  Zap,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react"

interface Skill {
  name: string
  level: number // 1-5
  category: string
}

interface SkillsProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = [
    { id: "All", name: "All Skills", icon: <Layers className="h-5 w-5" /> },
    { id: "Frontend", name: "Frontend", icon: <Palette className="h-5 w-5" /> },
    { id: "Backend", name: "Backend", icon: <Server className="h-5 w-5" /> },
    { id: "Database", name: "Database", icon: <Database className="h-5 w-5" /> },
    { id: "Mobile", name: "Mobile", icon: <Smartphone className="h-5 w-5" /> },
    { id: "DevOps", name: "DevOps", icon: <Terminal className="h-5 w-5" /> },
    { id: "Languages", name: "Languages", icon: <Code className="h-5 w-5" /> },
    { id: "Tools", name: "Tools", icon: <GitBranch className="h-5 w-5" /> },
    { id: "Other", name: "Other", icon: <Globe className="h-5 w-5" /> },
  ]

  const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

  // Group skills by proficiency level
  const expertSkills = filteredSkills.filter((skill) => skill.level === 5)
  const advancedSkills = filteredSkills.filter((skill) => skill.level === 4)
  const intermediateSkills = filteredSkills.filter((skill) => skill.level === 3)
  const beginnerSkills = filteredSkills.filter((skill) => skill.level <= 2)

  // Function to get icon for a category
  const getCategoryIcon = (category: string) => {
    const foundCategory = categories.find((c) => c.id === category)
    return foundCategory ? foundCategory.icon : <Globe className="h-4 w-4" />
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary-light dark:bg-secondary hover:bg-primary/20 dark:hover:bg-primary/20"
            }`}
          >
            {category.icon}
            <span className="hidden sm:inline">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {expertSkills.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Expert</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {expertSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <div className="mb-2 text-primary">{getCategoryIcon(skill.category)}</div>
                  <span className="text-center font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {advancedSkills.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold">Advanced</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {advancedSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <div className="mb-2 text-accent">{getCategoryIcon(skill.category)}</div>
                  <span className="text-center font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {intermediateSkills.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-accent-secondary" />
              <h3 className="text-xl font-bold">Intermediate</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {intermediateSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 bg-accent-secondary/10 rounded-lg hover:bg-accent-secondary/20 transition-colors"
                >
                  <div className="mb-2 text-accent-secondary">{getCategoryIcon(skill.category)}</div>
                  <span className="text-center font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {beginnerSkills.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-muted-foreground" />
              <h3 className="text-xl font-bold">Learning</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {beginnerSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 bg-secondary-light dark:bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="mb-2 text-muted-foreground">{getCategoryIcon(skill.category)}</div>
                  <span className="text-center font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {filteredSkills.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No skills found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

