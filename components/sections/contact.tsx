"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { profile } from "@/lib/data";
import { ArrowUpRightIcon } from "lucide-react";
import { Scene } from "@/components/custom/scene";

const SCROLL_HEIGHT_VH = 240;

const channels = [
  {
    label: "Email",
    value: "humoyunbektursunniyazov@gmail.com",
    href: `mailto:${"humoyunbektursunniyazov@gmail.com"}`,
    external: false,
  },
  {
    label: "GitHub",
    value: "humoyun-dev",
    href: "https://github.com/humoyun-dev",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "humoyun-dev",
    href: "https://linkedin.com/in/humoyun-dev",
    external: true,
  },
  {
    label: "Phone",
    value: "+998 90 011 25 07",
    href: "tel:+998900112507",
    external: false,
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <Scene
      sectionRef={ref}
      id="contact"
      scrollHeightVh={SCROLL_HEIGHT_VH}
      className="border-t"
    >
      <div className="h-full flex flex-col">
        <div className="container mx-auto px-4 max-w-5xl pt-24 md:pt-28 pb-6">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Contact
          </h2>
        </div>

        <div className="container mx-auto px-4 max-w-5xl flex-1 relative">
          <Headline progress={scrollYProgress} />
          <Channels progress={scrollYProgress} />
        </div>
      </div>
    </Scene>
  );
}

function Headline({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05, 0.4, 0.5], [0.4, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.5], [0, -60]);
  const scale = useTransform(progress, [0, 0.5], [1, 0.94]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <div className="space-y-4 max-w-3xl">
        <p className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          Have a project in mind, or just want to chat?
        </p>
        <p className="text-lg md:text-xl text-muted-foreground pt-2">
          Based in {profile.location}.
        </p>
      </div>
    </motion.div>
  );
}

function Channels({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.45, 0.6, 1], [0, 1, 1]);
  const y = useTransform(progress, [0.45, 0.6], [60, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="w-full max-w-3xl space-y-8">
        <p className="text-3xl md:text-4xl font-medium tracking-tight">
          <a
            href={`mailto:${profile.email}`}
            className="underline decoration-muted-foreground/40 underline-offset-[6px] decoration-2 hover:decoration-foreground transition-colors"
          >
            Send me an email
          </a>
          <span className="text-muted-foreground"> —</span> or pick a channel.
        </p>

        <div className="border-t divide-y">
          {channels.map((c, idx) => (
            <ChannelRow
              key={c.label}
              channel={c}
              idx={idx}
              count={channels.length}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ChannelRow({
  channel,
  idx,
  count,
  progress,
}: {
  channel: (typeof channels)[number];
  idx: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const start = 0.6 + (idx / count) * 0.3;
  const end = start + 0.08;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const x = useTransform(progress, [start, end], [-16, 0]);

  return (
    <motion.a
      style={{ opacity, x }}
      href={channel.href}
      target={channel.external ? "_blank" : undefined}
      rel={channel.external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between py-5 transition-colors hover:text-foreground/60"
    >
      <div className="flex items-baseline gap-6">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider w-24">
          {channel.label}
        </span>
        <span className="text-base md:text-lg font-medium">{channel.value}</span>
      </div>
      <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
