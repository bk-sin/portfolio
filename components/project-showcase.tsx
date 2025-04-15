"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="relative overflow-hidden">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnMouseEnter: true,
            playOnInit: true,
          }),
        ]}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="grid md:grid-cols-2 h-[600px] md:h-[500px]">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>

                <div className="bg-secondary-light dark:bg-secondary p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => {
                        const bgClass =
                          techIndex % 3 === 0
                            ? "bg-primary/10 text-primary"
                            : techIndex % 3 === 1
                            ? "bg-accent/10 text-accent"
                            : "bg-accent-foreground/70 text-accent-secondary";

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

                    <div className="flex gap-4 pt-4">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary-light"
                      >
                        <Link
                          href={project.demoUrl}
                          className="flex items-center gap-2"
                        >
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border border-primary hover:bg-primary/10"
                      >
                        <Link
                          href={project.githubUrl}
                          className="flex items-center gap-2"
                        >
                          View Code <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute left-4 top-1/2 -translate-y-1/2 "
          variant="outline"
          size="icon"
        />

        <CarouselNext
          className="absolute right-4 top-1/2 -translate-y-1/2 "
          variant="outline"
          size="icon"
        />
      </Carousel>
    </div>
  );
}
