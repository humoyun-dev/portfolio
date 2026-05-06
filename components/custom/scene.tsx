"use client";

import { type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

type SceneProps = {
  sectionRef: RefObject<HTMLElement | null>;
  /** Total scroll length in vh. e.g. 300 = section pins for ~3 viewport heights of scroll. */
  scrollHeightVh: number;
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function Scene({
  sectionRef,
  scrollHeightVh,
  id,
  className,
  innerClassName,
  children,
}: SceneProps) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative scroll-mt-16", className)}
      style={{ height: `${scrollHeightVh}vh` }}
    >
      <div
        className={cn(
          "sticky top-0 h-screen w-full overflow-hidden",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
