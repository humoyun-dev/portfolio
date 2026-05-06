"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
} from "lucide-react";
import { RevealText } from "@/components/custom/reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 80]
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 1.06]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -40]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const firstName = profile.name.split(" ")[0];
  const lastName = profile.name.split(" ").slice(1).join(" ");

  return (
    <section
      ref={ref}
      className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          style={{ y: textY, opacity }}
          className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center"
        >
          <div className="space-y-6 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base font-medium text-muted-foreground tracking-wide"
            >
              {profile.location} · Available for work
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              <RevealText text={firstName} />{" "}
              <span className="text-muted-foreground">
                <RevealText text={lastName} delay={0.1} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-xl"
            >
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-3 pt-4"
            >
              <Button asChild size="lg" className="gap-2 group">
                <Link href="#projects">
                  View work
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <Link href="#contact">Get in touch</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-1 pt-2"
            >
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <MailIcon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="order-1 md:order-2 mx-auto md:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-48 w-48 md:h-72 md:w-72 overflow-hidden rounded-full ring-1 ring-border"
            >
              <Image
                src="/images/image1.jpeg"
                alt={`${profile.name} portrait`}
                fill
                sizes="(min-width: 768px) 288px, 192px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="font-mono tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
