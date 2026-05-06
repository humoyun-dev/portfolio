"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { experience } from "@/lib/data";
import { Scene } from "@/components/custom/scene";

const SCROLL_HEIGHT_VH = 220;

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const job = experience[0];

  return (
    <Scene
      sectionRef={ref}
      id="experience"
      scrollHeightVh={SCROLL_HEIGHT_VH}
      className="border-t"
    >
      <div className="h-full flex flex-col">
        <div className="container mx-auto px-4 max-w-5xl pt-24 md:pt-28 pb-6">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Experience
          </h2>
        </div>

        <div className="container mx-auto px-4 max-w-5xl flex-1 relative">
          <CompanyName progress={scrollYProgress} />
          <Detail progress={scrollYProgress} job={job} />
        </div>
      </div>
    </Scene>
  );
}

function CompanyName({ progress }: { progress: MotionValue<number> }) {
  const scale = useTransform(progress, [0, 0.4, 1], [0.5, 1, 1]);
  const opacity = useTransform(progress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0.15]);
  const letterSpacing = useTransform(
    progress,
    [0, 0.4],
    ["-0.04em", "-0.02em"]
  );

  return (
    <motion.div
      style={{ scale, opacity, letterSpacing }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <span className="text-7xl sm:text-9xl md:text-[12rem] font-bold tracking-tight leading-none">
        SAVDOCHI
      </span>
    </motion.div>
  );
}

function Detail({
  progress,
  job,
}: {
  progress: MotionValue<number>;
  job: (typeof experience)[number];
}) {
  const opacity = useTransform(progress, [0.4, 0.55, 1], [0, 1, 1]);
  const y = useTransform(progress, [0.4, 0.55], [40, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-12 max-w-3xl">
        <div className="text-base text-muted-foreground font-mono">
          {job.period}
        </div>

        <div className="space-y-4">
          <header className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {job.role}
              <span className="text-muted-foreground font-normal">
                {" "}
                · {job.company}
              </span>
            </h3>
            {job.current && (
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
                </span>
                <p className="text-sm text-muted-foreground">
                  Currently building
                </p>
              </div>
            )}
          </header>

          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            {job.description}
          </p>

          <ul className="space-y-2 pt-2">
            {job.highlights.map((h, idx) => (
              <HighlightItem
                key={h}
                text={h}
                idx={idx}
                count={job.highlights.length}
                progress={progress}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function HighlightItem({
  text,
  idx,
  count,
  progress,
}: {
  text: string;
  idx: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const start = 0.6 + (idx / count) * 0.3;
  const end = start + 0.08;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const x = useTransform(progress, [start, end], [-12, 0]);

  return (
    <motion.li
      style={{ opacity, x }}
      className="text-base md:text-lg text-foreground/70 flex gap-3"
    >
      <span className="text-muted-foreground select-none">—</span>
      <span>{text}</span>
    </motion.li>
  );
}
