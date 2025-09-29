"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Locale = 'en' | 'fr' | 'es' | undefined;

export function Navbar({ locale }: { locale?: Locale } = {}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const current = (locale === 'fr' || locale === 'es' || locale === 'en') ? locale : 'en';
  const dict = current === 'fr' ? (require('@/messages/fr.json')) : current === 'es' ? (require('@/messages/es.json')) : (require('@/messages/en.json'));
  const t = (key: string) => key.split('.').reduce((o: any, k: string) => o?.[k], dict);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Use default values during SSR/hydration to prevent mismatch
  const displayLocale = isHydrated ? current : 'en';
  
  // Helper function to create locale-aware URLs
  const createUrl = (path: string) => {
    if (current === 'en') return path;
    return `/${current}${path}`;
  };

  // Helper function to create language-specific URLs for current page
  const createLanguageUrl = (targetLocale: 'en' | 'fr' | 'es') => {
    if (typeof window === 'undefined') return '/';
    
    const fullPath = window.location.pathname;
    let currentPath = '/';
    
    // Extract path without locale prefix
    const segments = fullPath.split('/');
    if (segments[1] === 'fr' || segments[1] === 'es') {
      currentPath = '/' + segments.slice(2).join('/');
    } else {
      currentPath = fullPath;
    }
    
    // Ensure currentPath starts with / and handle empty path
    if (!currentPath.startsWith('/')) currentPath = '/' + currentPath;
    if (currentPath === '/') currentPath = '/';
    
    // Return URL for target locale
    if (targetLocale === 'en') {
      return currentPath === '/' ? '/' : currentPath;
    }
    return `/${targetLocale}${currentPath}`;
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

          {/* Language selector as dropdown with flags */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Select language" className="inline-flex items-center gap-2">
                <img src={displayLocale === 'fr' ? '/flags/fr.svg' : displayLocale === 'es' ? '/flags/es.svg' : '/flags/gb.svg'} alt={displayLocale === 'fr' ? 'Français' : displayLocale === 'es' ? 'Español' : 'English'} width="18" height="12" className="rounded-none border" />
                <span className="text-xs font-medium tracking-wide">{displayLocale === 'fr' ? 'FR' : displayLocale === 'es' ? 'ES' : 'EN'}</span>
                <ChevronDown className="size-3.5 opacity-70" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={createLanguageUrl('en')}><img src="/flags/gb.svg" alt="English" width="16" height="11" className="me-2 inline rounded-none border"/>English</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={createLanguageUrl('fr')}><img src="/flags/fr.svg" alt="Français" width="16" height="11" className="me-2 inline rounded-none border"/>Français</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={createLanguageUrl('es')}><img src="/flags/es.svg" alt="Español" width="16" height="11" className="me-2 inline rounded-none border"/>Español</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="bg-[#333333] text-white hover:bg-[#998675]">
            <Link href={createUrl("/dealers")}>{t('nav.dealers')}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden ms-auto flex items-center gap-2">
          {/* Mobile Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 py-1">
                <img src={displayLocale === 'fr' ? '/flags/fr.svg' : displayLocale === 'es' ? '/flags/es.svg' : '/flags/gb.svg'} alt={displayLocale === 'fr' ? 'Français' : displayLocale === 'es' ? 'Español' : 'English'} width="18" height="12" className="rounded-none border" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem asChild>
                <Link href={createLanguageUrl('en')} className="flex items-center gap-2">
                  <img src="/flags/gb.svg" alt="English" width="18" height="12" className="rounded-none border" />
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={createLanguageUrl('fr')} className="flex items-center gap-2">
                  <img src="/flags/fr.svg" alt="Français" width="18" height="12" className="rounded-none border" />
                  Français
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={createLanguageUrl('es')} className="flex items-center gap-2">
                  <img src="/flags/es.svg" alt="Español" width="18" height="12" className="rounded-none border" />
                  Español
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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


