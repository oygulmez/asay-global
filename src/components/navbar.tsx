"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useId } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import { createLocalizedUrl } from "@/lib/slugs";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Locale = 'en' | undefined;

export function Navbar({ locale }: { locale?: Locale } = {}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const current = (locale === 'en') ? locale : 'en';
  const dict = require('@/messages/en.json');
  const t = (key: string) => key.split('.').reduce((o: any, k: string) => o?.[k], dict);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Use default values during SSR/hydration to prevent mismatch
  const displayLocale = 'en';
  
  // Helper function to create locale-aware URLs with localized slugs
  const createUrl = (path: string) => {
    return createLocalizedUrl(path, current);
  };

  // Helper function to create language-specific URLs for current page
  const createLanguageUrl = (targetLocale: 'en') => {
    if (typeof window === 'undefined') return '/';
    
    const fullPath = pathname;
    
    // Parse the current URL to get the key (language-agnostic identifier)
    const segments = fullPath.split('/').filter(Boolean);
    
    // If we're on a localized route, extract the locale and path
    if (false) {
      const sourceLocale = 'en';
      const pathSegments = segments.slice(1);
      
      // Convert localized segments back to English keys
      const englishSegments = pathSegments.map(segment => {
        const key = require('@/lib/slugs').getKeyFromSlug(segment, sourceLocale);
        return key;
      });
      
      // Now convert to target locale
      const targetSegments = englishSegments.map(key => {
        return require('@/lib/slugs').getSlugForLocale(key, targetLocale);
      });
      
      // Build the final URL
      return '/' + targetSegments.join('/');
    } else {
      // We're on English route, need to convert English slugs to keys first, then to target locale
      const englishSegments = segments;
      
      // Convert English segments to keys first, then to target locale
      const targetSegments = englishSegments.map(segment => {
        const key = require('@/lib/slugs').getKeyFromSlug(segment, 'en');
        return require('@/lib/slugs').getSlugForLocale(key, targetLocale);
      });
      
      // Build the final URL
      return '/' + targetSegments.join('/');
    }
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto h-18 md:h-22 px-6 flex items-center gap-6">
        {/* Left: Logo */}
        <Link href={createUrl("/")} className="inline-flex items-center" aria-label="ARG Structural Solutions">
          <img src="/asay-global-logo-main.svg" alt="Asay Global" className="h-14 md:h-14 lg:h-15 w-auto" />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right: Navigation + Languages + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link href={createUrl("/")} className={cn("text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted")}>
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={createUrl("/about")} className={cn("text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted")}>
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-sm font-medium outline-none inline-flex items-center gap-1 px-2 py-1 rounded-md transition-colors hover:bg-muted">
                    {t('nav.services')} <ChevronDown className="size-4" aria-hidden />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[320px]">
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href={createUrl("/services/interior-and-exterior-decorative-products")} className="block w-full px-2 py-2">{t('nav.services_menu.decorative')}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href={createUrl("/services/steel-framings")} className="block w-full px-2 py-2">{t('nav.services_menu.steel')}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href={createUrl("/services/aluminum-architectural-solutions")} className="block w-full px-2 py-2">{t('nav.services_menu.aluminum')}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href={createUrl("/services/architectural-glass-solutions")} className="block w-full px-2 py-2">{t('nav.services_menu.glass')}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href={createUrl("/services/u-pvc-systems")} className="block w-full px-2 py-2">{t('nav.services_menu.upvc')}</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={createUrl("/contact")} className={cn("text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted")}>
                  {t('nav.contact')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language selector removed: only EN supported */}

          <Button asChild size="sm" className="bg-[#333333] text-white hover:bg-[#998675]">
            <Link href={createUrl("/dealers")}>{t('nav.dealers')}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden ms-auto flex items-center gap-2">
          {/* Mobile language selector removed */}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="rounded-md">
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-screen max-w-[92vw] sm:max-w-xs p-4 flex flex-col">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex items-center justify-start mb-2 pl-3">
                <Link href={createUrl("/")} aria-label="ARG Structural Solutions" className="inline-flex">
                  <img src="/asay-global-logo-main.svg" alt="Asay Global" className="h-16 w-auto" />
                </Link>
              </div>
              <nav className="mt-4 space-y-1" onClick={() => (document.querySelector('[data-state="open"]') as HTMLElement)?.click()}>
                <Link href={createUrl("/")} className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">{t('nav.home')}</Link>
                <Link href={createUrl("/about")} className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">{t('nav.about')}</Link>
                <div className="pt-1">
                  <Link href={createUrl("/services")} className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">{t('nav.services')}</Link>
                  <div className="grid gap-1 px-3">
                    <Link href={createUrl("/services/interior-and-exterior-decorative-products")} className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">{t('nav.services_menu.decorative')}</Link>
                    <Link href={createUrl("/services/steel-framings")} className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">{t('nav.services_menu.steel')}</Link>
                    <Link href={createUrl("/services/aluminum-architectural-solutions")} className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">{t('nav.services_menu.aluminum')}</Link>
                    <Link href={createUrl("/services/architectural-glass-solutions")} className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">{t('nav.services_menu.glass')}</Link>                 
                    <Link href={createUrl("/services/u-pvc-systems")} className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">{t('nav.services_menu.upvc')}</Link> </div>

                </div>
                <Link href={createUrl("/contact")} className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">{t('nav.contact')}</Link>
              </nav>
              <Separator className="my-4" />
              <div className="mt-auto grid gap-2">
                <Button asChild size="lg" className="w-full bg-[#333333] text-white hover:bg-[#998675]">
                  <Link href={createUrl("/dealers")}>{t('nav.dealers')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


