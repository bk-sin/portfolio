"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Code,
  Layers,
  Zap,
  Globe,
  Server,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FeaturePoint {
  icon: React.ReactNode;
  position: {
    top: string;
    left: string;
  };
  colorClasses: {
    bg: string;
    border: string;
  };
}

export function InteractiveHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const featurePoints: FeaturePoint[] = [
    {
      icon: <Code className="h-5 w-5" />,
      position: { top: "25%", left: "15%" },
      colorClasses: {
        bg: "bg-primary/30",
        border: "border-primary/30",
      },
    },
    {
      icon: <Layers className="h-5 w-5" />,
      position: { top: "15%", left: "75%" },
      colorClasses: {
        bg: "bg-accent/10",
        border: "border-accent/30",
      },
    },
    {
      icon: <Zap className="h-5 w-5" />,
      position: { top: "65%", left: "80%" },
      colorClasses: {
        bg: "bg-accent-foreground/50",
        border: "border-accent-foreground/30",
      },
    },
    {
      icon: <Globe className="h-5 w-5" />,
      position: { top: "75%", left: "20%" },
      colorClasses: {
        bg: "bg-primary/30",
        border: "border-primary/30",
      },
    },
    {
      icon: <Server className="h-5 w-5" />,
      position: { top: "40%", left: "85%" },
      colorClasses: {
        bg: "bg-accent/10",
        border: "border-accent/30",
      },
    },
    {
      icon: <Palette className="h-5 w-5" />,
      position: { top: "50%", left: "10%" },
      colorClasses: {
        bg: "bg-accent-foreground/50",
        border: "border-accent-foreground/30",
      },
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden"
    >
      {!isMobile &&
        featurePoints.map((feature, index) => (
          <div
            key={index}
            className="absolute z-10"
            style={{
              top: feature.position.top,
              left: feature.position.left,
            }}
          >
            <motion.div
              className="relative cursor-pointer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            >
              <motion.div
                className={`flex items-center justify-center w-12 h-12 rounded-full ${feature.colorClasses.bg} border ${feature.colorClasses.border}`}
                whileHover={{ scale: 1.2 }}
              >
                {feature.icon}
              </motion.div>
            </motion.div>
          </div>
        ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2 animate-fade-in">
          Full-Stack Developer
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          <span className="gradient-text">Emiliano Alegre</span>
        </h1>
        <p
          className="max-w-[600px] text-muted-foreground text-lg md:text-xl mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Soy Desarrollador Full Stack de JavaScript y TypeScript. Me dedico a
          crear aplicaciones web y mobile usando herramientas como React, React
          Native, NextJS y NodeJS
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button asChild size="lg">
            <Link href="#contact">Contacto</Link>
          </Button>
          <Button
            className="border border-primary hover:bg-primary/10"
            variant="outline"
            asChild
            size="lg"
          >
            <Link href="#projects">
              Ver mis proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
