"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { profile, skills } from "@/lib/data";
import { Scene } from "@/components/custom/scene";

const SCROLL_HEIGHT_VH = 280;

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <Scene
      sectionRef={ref}
      id="about"
      scrollHeightVh={SCROLL_HEIGHT_VH}
      className="border-t"
    >
      <div className="h-full flex flex-col">
        <div className="container mx-auto px-4 max-w-5xl pt-24 md:pt-28 pb-6">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            About
          </h2>
        </div>

        <div className="container mx-auto px-4 max-w-5xl flex-1 relative">
          <Statement progress={scrollYProgress} />
          <Bio progress={scrollYProgress} />
          <Skills progress={scrollYProgress} />
        </div>
      </div>
    </Scene>
  );
}

function Statement({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05, 0.3, 0.4], [1, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.4], [0, -60]);
  const scale = useTransform(progress, [0, 0.4], [1, 0.92]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <p className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
        Building products{" "}
        <span className="text-muted-foreground">end-to-end.</span>
      </p>
    </motion.div>
  );
}

function Bio({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(
    progress,
    [0.3, 0.4, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [0.3, 0.7], [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <p className="text-2xl sm:text-3xl md:text-4xl text-foreground/80 leading-snug max-w-3xl">
        {profile.bio}
      </p>
    </motion.div>
  );
}

function Skills({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.6, 0.72, 1], [0, 1, 1]);
  const y = useTransform(progress, [0.6, 0.72], [40, 0]);

  const entries = Object.entries(skills);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 w-full">
        {entries.map(([category, items], idx) => (
          <SkillColumn
            key={category}
            category={category}
            items={items}
            index={idx}
            count={entries.length}
            progress={progress}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillColumn({
  category,
  items,
  index,
  count,
  progress,
}: {
  category: string;
  items: string[];
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const start = 0.7 + (index / count) * 0.25;
  const end = start + 0.08;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [16, 0]);

  return (
    <motion.div style={{ opacity, y }} className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {category}
      </h3>
      <ul className="text-base text-foreground/80 space-y-2">
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}
