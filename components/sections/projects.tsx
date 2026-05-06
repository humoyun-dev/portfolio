"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { projects, type Project } from "@/lib/data";
import { ArrowUpRightIcon, GithubIcon, ExternalLinkIcon } from "lucide-react";
import { Scene } from "@/components/custom/scene";

const SCENE_VH_PER_PROJECT = 80;
const ENTRY_BUFFER_VH = 30;

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const total = projects.length;
  const scrollHeightVh = total * SCENE_VH_PER_PROJECT + ENTRY_BUFFER_VH;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <Scene sectionRef={ref} id="projects" scrollHeightVh={scrollHeightVh}>
      <div className="h-full flex flex-col">
        <div className="container mx-auto px-4 max-w-5xl pt-24 md:pt-28 pb-6">
          <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 items-baseline">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Selected work
            </h2>
            <div className="flex items-baseline justify-between">
              <Counter progress={scrollYProgress} total={total} />
              <a
                href="https://github.com/humoyun-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
              >
                All on GitHub
                <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl flex-1 relative">
          {projects.map((project, idx) => (
            <ProjectScene
              key={project.slug}
              project={project}
              idx={idx}
              total={total}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 max-w-5xl pb-8">
          <ProgressBar total={total} progress={scrollYProgress} />
        </div>
      </div>
    </Scene>
  );
}

function Counter({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const [current, setCurrent] = useState("01");

  useMotionValueEvent(progress, "change", (v) => {
    const idx = Math.min(total, Math.max(1, Math.floor(v * total) + 1));
    setCurrent(String(idx).padStart(2, "0"));
  });

  return (
    <div className="font-mono text-sm text-muted-foreground tabular-nums">
      <span className="text-foreground">{current}</span>
      <span className="mx-1">/</span>
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  );
}

function ProjectScene({
  project,
  idx,
  total,
  progress,
}: {
  project: Project;
  idx: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const sliceStart = idx / total;
  const sliceEnd = (idx + 1) / total;
  const fadeIn = idx === 0 ? sliceStart : sliceStart + 0.02;
  const fadeOut = idx === total - 1 ? sliceEnd : sliceEnd - 0.02;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, sliceStart - 0.04),
      fadeIn,
      fadeOut,
      Math.min(1, sliceEnd + 0.04),
    ],
    idx === 0
      ? [1, 1, 1, 0]
      : idx === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );

  const y = useTransform(progress, [sliceStart, sliceEnd], [40, -40]);
  const scale = useTransform(
    progress,
    [sliceStart, (sliceStart + sliceEnd) / 2, sliceEnd],
    [0.96, 1, 0.96]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-16 items-end">
        <div className="font-mono text-7xl md:text-[10rem] leading-none text-muted-foreground/15 tabular-nums select-none">
          {String(idx + 1).padStart(2, "0")}
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/40" />
            <span className="uppercase tracking-wider">Project</span>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-foreground/60 transition-colors"
            >
              {project.name}
            </Link>
          </h3>

          <p className="text-lg md:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:text-base text-muted-foreground pt-1">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 md:pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors group"
            >
              <GithubIcon className="h-4 w-4" />
              View source
              <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Live demo
                <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-base font-medium hover:opacity-70 transition-opacity ml-auto"
            >
              Project details
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressBar({
  total,
  progress,
}: {
  total: number;
  progress: MotionValue<number>;
}) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <ProgressSegment
          key={i}
          progress={progress}
          start={i / total}
          end={(i + 1) / total}
        />
      ))}
    </div>
  );
}

function ProgressSegment({
  progress,
  start,
  end,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const width = useTransform(progress, [start, end], ["0%", "100%"], {
    clamp: true,
  });
  return (
    <div className="h-px flex-1 bg-muted-foreground/15 overflow-hidden">
      <motion.div style={{ width }} className="h-full bg-foreground" />
    </div>
  );
}
