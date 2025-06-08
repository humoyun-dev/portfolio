"use client";
import { motion } from "framer-motion";
import type React from "react";

import { cn } from "@/lib/utils";

interface AnimatedColorBackgroundProps {
  children: React.ReactNode;
  colors?: string[];
  className?: string;
  animationType?: "pulse" | "rotate" | "wave" | "gradient-shift";
}

export function AnimatedColorBackground({
  children,
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"],
  className,
  animationType = "gradient-shift",
}: AnimatedColorBackgroundProps) {
  const animations = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
    wave: {
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    "gradient-shift": {
      background: [
        `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
        `linear-gradient(90deg, ${colors[1]}, ${colors[2]})`,
        `linear-gradient(135deg, ${colors[2]}, ${colors[3]})`,
        `linear-gradient(180deg, ${colors[3]}, ${colors[4]})`,
        `linear-gradient(225deg, ${colors[4]}, ${colors[0]})`,
        `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
      ],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={cn("relative", className)}>
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-60"
        animate={animations[animationType]}
        style={{
          background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full blur-lg opacity-40"
        animate={{
          ...animations[animationType],
          transition: {
            ...animations[animationType].transition,
            delay: 0.5,
          },
        }}
        style={{
          background: `linear-gradient(135deg, ${colors[2]}, ${colors[3]})`,
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full blur-md opacity-30"
        animate={{
          ...animations[animationType],
          transition: {
            ...animations[animationType].transition,
            delay: 1,
          },
        }}
        style={{
          background: `linear-gradient(225deg, ${colors[4]}, ${colors[0]})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
