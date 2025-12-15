"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductCardItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  href?: string; // Optional href override
}

interface ProductCardProps {
  product: ProductCardItem;
  basePath?: string;
  className?: string;
  imageAspectRatio?: "4/3" | "3/4" | "16/9" | "square";
  ctaText?: string; // Optional custom CTA text, defaults to "View Product"
}

/**
 * Reusable product card component with consistent styling
 * Matches the design system used across all product listing pages
 */
export function ProductCard({
  product,
  basePath = "",
  className,
  imageAspectRatio = "4/3",
  ctaText = "View Product",
}: ProductCardProps) {
  const href = product.href || `${basePath}/${product.slug}`;
  const aspectClass = {
    "4/3": "aspect-[4/3]",
    "3/4": "aspect-[3/4]",
    "16/9": "aspect-[16/9]",
    square: "aspect-square",
  }[imageAspectRatio];

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 col-span-12 sm:col-span-6 lg:col-span-4",
        className
      )}
      aria-label={product.name}
    >
      <div className={cn("relative overflow-hidden bg-gray-100", aspectClass)}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover bg-white transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>
          {product.name}
        </h3>
        <p className="text-sm mb-4 flex-1" style={{ color: "#565656" }}>
          {product.description}
        </p>
        <span className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white transition-colors mt-auto bg-[#333333] hover:bg-[#998675] group-hover:bg-[#998675]">
          {ctaText}
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

