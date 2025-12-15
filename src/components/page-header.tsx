"use client";

import React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
  }>;
}

export function PageHeader({ 
  title, 
  description, 
  breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" }
  ]
}: PageHeaderProps) {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/images/asayglobal-background-img.webp')"
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/00" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              {description}
            </p>
          )}
        </div>

        {/* Breadcrumb */}
        <div className="flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.href ? (
                      <BreadcrumbLink asChild>
                        <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-white font-medium">
                        {item.label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4 text-white/60" />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
