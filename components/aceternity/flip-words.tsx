"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const FlipWords = ({
  words = ["Hello", "World", "This", "Is", "Flip", "Words"],
  className = "",
  duration = 2000,
}: {
  words?: string[];
  className?: string;
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 500); // Half of the transition time
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div
      className={`text-4xl md:text-6xl font-bold tracking-tight ${className}`}
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          >
            {words[currentIndex]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
