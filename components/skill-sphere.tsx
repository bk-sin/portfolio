"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SkillSphereProps {
  skills: string[];
}

export function SkillSphere({ skills }: SkillSphereProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full py-10 flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-3xl h-[400px] md:h-[500px]">
        {skills.map((skill, index) => {
          // Calculate random positions
          const randomX = Math.random() * 100 - 50; // -50 to 50
          const randomY = Math.random() * 100 - 50; // -50 to 50
          const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
          const randomRotate = Math.random() * 20 - 10; // -10 to 10
          const randomDelay = Math.random() * 0.5; // 0 to 0.5

          // Alternate between primary and accent colors
          const isAccent = index % 3 === 0;
          const isSecondaryAccent = index % 3 === 1;

          return (
            <motion.div
              key={skill}
              className={`absolute px-4 py-2 rounded-lg font-medium shadow-md ${
                isAccent
                  ? "bg-accent text-accent-secondary"
                  : isSecondaryAccent
                  ? "bg-accent-foreground text-white"
                  : "bg-primary text-primary-foreground"
              }`}
              initial={{
                opacity: 0,
                x: randomX * 5,
                y: randomY * 5,
                scale: 0.5,
                rotate: randomRotate * 2,
              }}
              animate={{
                opacity: 1,
                x: randomX,
                y: randomY,
                scale: randomScale,
                rotate: randomRotate,
              }}
              transition={{
                duration: 1,
                delay: randomDelay,
                type: "spring",
                stiffness: 50,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 0,
                zIndex: 10,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              style={{
                left: `${50 + randomX}%`,
                top: `${50 + randomY}%`,
                transform: `translate(-50%, -50%) scale(${randomScale}) rotate(${randomRotate}deg)`,
              }}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
