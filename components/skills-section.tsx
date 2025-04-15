"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", name: "All Skills", icon: <Layers className="h-5 w-5" /> },
    { id: "Frontend", name: "Frontend", icon: <Palette className="h-5 w-5" /> },
    { id: "Backend", name: "Backend", icon: <Server className="h-5 w-5" /> },
    {
      id: "Database",
      name: "Database",
      icon: <Database className="h-5 w-5" />,
    },
    { id: "Mobile", name: "Mobile", icon: <Smartphone className="h-5 w-5" /> },
    { id: "DevOps", name: "DevOps", icon: <Terminal className="h-5 w-5" /> },
    { id: "Languages", name: "Languages", icon: <Code className="h-5 w-5" /> },
    { id: "Tools", name: "Tools", icon: <GitBranch className="h-5 w-5" /> },
    /*  { id: "Other", name: "Other", icon: <Globe className="h-5 w-5" /> }, */
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  const getCategoryIcon = (category: string) => {
    const foundCategory = categories.find((c) => c.id === category);
    return foundCategory ? foundCategory.icon : <Globe className="h-4 w-4" />;
  };

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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="flex flex-col items-center p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
          >
            <div className="mb-2 text-primary">
              {getCategoryIcon(skill.category)}
            </div>
            <span className="text-center font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No skills found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
