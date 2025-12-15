"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  children: ReactNode;
  className?: string;
}

/**
 * Standardized 12-column grid system for product listings
 * Ensures consistent layout across all product pages
 * Uses fixed responsive breakpoints: 12 cols (mobile) -> 6 cols (sm) -> 4 cols (lg)
 * Individual cards handle their own column spans via col-span-* classes
 */
export function ProductGrid({ children, className }: ProductGridProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-8", className)}>{children}</div>
  );
}

