"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ModeToggle } from "../custom/theme";

interface FloatingDockProps {
  items: {
    id: string;
    label: string;
    icon: React.ReactNode;
    href: string;
  }[];
  className?: string;
  position?: "top" | "bottom";
}

export function FloatingDock({
  items,
  className,
  position = "bottom",
}: FloatingDockProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of items) {
        const section = document.getElementById(item.href.replace("#", ""));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveItem(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleItemClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - (position === "top" ? 80 : 0),
        behavior: "smooth",
      });
    }
  };

  const positionClasses =
    position === "top"
      ? "fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      : "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50";

  const tooltipDirection = position === "top" ? "bottom" : "top";

  return (
    <div
      ref={dockRef}
      className={cn(
        positionClasses,
        "px-3 py-1.5 rounded-lg backdrop-blur-md",
        "border shadow-sm transition-all dark:bg-zinc-900/60 dark:border-zinc-700 bg-white/80 border-zinc-300",
        className
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        {items.map((item) => (
          <motion.button
            key={item.id}
            className={cn(
              "relative flex items-center justify-center rounded-md",
              "w-10 h-10 sm:w-11 sm:h-11 text-sm",
              "transition-colors duration-200",
              activeItem === item.id
                ? isDark
                  ? "dark:bg-zinc-700 dark:text-white bg-zinc-300 text-black"
                  : ""
                : "text-zinc-500 hover:bg-zinc-200/60 hover:text-black dark:hover:bg-zinc-700/50 dark:hover:text-white"
            )}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleItemClick(item.href)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.href}>{item.icon}</Link>
            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: tooltipDirection === "bottom" ? -6 : 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: tooltipDirection === "bottom" ? 32 : -32,
                  }}
                  exit={{
                    opacity: 0,
                    y: tooltipDirection === "bottom" ? -6 : 6,
                  }}
                  className={cn(
                    "absolute whitespace-nowrap px-2 py-0.5 text-xs font-medium rounded-md",
                    isDark
                      ? "dark:bg-zinc-800 dark:text-zinc-100 border dark:border-zinc-700"
                      : "bg-white text-zinc-900 border border-zinc-200",
                    "shadow-md"
                  )}
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}
