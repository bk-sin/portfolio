"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="project-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-image">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button size="sm" variant="secondary" asChild>
            <Link href={demoUrl} className="flex items-center gap-1">
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href={githubUrl} className="flex items-center gap-1">
              Code <Github className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="project-card-content">
        <div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => {
            // Alternate between primary, accent and accent-foreground
            const bgClass =
              index % 3 === 0
                ? "bg-primary/10 text-primary"
                : index % 3 === 1
                ? "bg-accent/10 text-accent"
                : "bg-accent-foreground/10 text-accent-secondary";

            return (
              <span
                key={tech}
                className={`px-2 py-1 rounded-md text-xs font-medium ${bgClass}`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
