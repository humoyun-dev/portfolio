"use client"

import Image from "next/image";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type ImgProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  onClick?: () => void;
};

export function Img({
  src,
  alt,
  width = 900,
  height = 900,
  className,
  priority = false,
  sizes = "100vw",
  quality = 80,
  onClick,
}: ImgProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={src || "/file.svg"}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        sizes={sizes}
        onClick={onClick}
        onLoadingComplete={handleLoadingComplete}
        className={cn(
          "w-full h-full object-cover transition-all duration-300",
          isLoading
            ? "scale-105 blur-sm grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
      />
    </div>
  );
}

export default Img;