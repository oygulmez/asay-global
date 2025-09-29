"use client"

import { cn } from "@/lib/utils";
import {
  IconWindow,
  IconDoor,
  IconBuildingSkyscraper,
  IconPlant,
  IconSparkles,
  IconArrowsMaximize,
} from "@tabler/icons-react";
import { useState, useEffect } from 'react';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';
import esMessages from '@/messages/es.json';

export function FeaturesSectionWithHoverEffects() {
  const [locale, setLocale] = useState<'en' | 'fr' | 'es'>('en');
  
  useEffect(() => {
    const seg = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en';
    setLocale(seg === 'fr' ? 'fr' : seg === 'es' ? 'es' : 'en');
  }, []);
  
  const messages = locale === 'fr' ? frMessages : locale === 'es' ? esMessages : enMessages;
  const t = (messages as any).products_features;
  
  const features = [
    {
      title: t.windows.title,
      description: t.windows.description,
      icon: <IconWindow />,
    },
    {
      title: t.doors.title,
      description: t.doors.description,
      icon: <IconDoor />,
    },
    {
      title: t.curtain_walls.title,
      description: t.curtain_walls.description,
      icon: <IconBuildingSkyscraper />,
    },
    {
      title: t.winter_gardens.title,
      description: t.winter_gardens.description,
      icon: <IconPlant />,
    },
    {
      title: t.smart_buildings.title,
      description: t.smart_buildings.description,
      icon: <IconSparkles />,
    },
    {
      title: t.sliding_systems.title,
      description: t.sliding_systems.description,
      icon: <IconArrowsMaximize />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature",
        (index === 0 || index === 3) && "lg:border-l",
        index < 3 && "lg:border-b"
      )}
      style={{ borderColor: '#d0d0d0' }}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 md:px-8 lg:px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
          <div className="text-lg font-semibold mb-2 relative z-10 px-6 md:px-8 lg:px-10" style={{ color: 'black' }}>
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-neutral-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm relative z-10 px-6 md:px-8 lg:px-10" style={{ color: '#565656' }}>
        {description}
      </p>
    </div>
  );
};
