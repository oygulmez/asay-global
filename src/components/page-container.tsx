"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "7xl" | "6xl" | "5xl" | "4xl" | "full";
}

/**
 * Standardized page container component for consistent width and padding
 * across all pages. Uses 12-column grid system foundation.
 */
export function PageContainer({
  children,
  className,
  maxWidth = "7xl",
}: PageContainerProps) {
  const maxWidthClass = {
    "7xl": "max-w-7xl",
    "6xl": "max-w-6xl",
    "5xl": "max-w-5xl",
    "4xl": "max-w-4xl",
    full: "max-w-full",
  }[maxWidth];

  return (
    <div className={cn("container mx-auto px-6 py-16", className)}>
      <div className={cn("mx-auto", maxWidthClass)}>{children}</div>
    </div>
  );
}

