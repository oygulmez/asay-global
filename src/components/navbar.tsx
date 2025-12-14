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
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isWindowsDoorsSubmenuOpen, setIsWindowsDoorsSubmenuOpen] = useState(false);
  const [isHandrailsSubmenuOpen, setIsHandrailsSubmenuOpen] = useState(false);
  const [isMobileWindowsDoorsOpen, setIsMobileWindowsDoorsOpen] = useState(false);
  const [isMobileHandrailsOpen, setIsMobileHandrailsOpen] = useState(false);
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
                <div
                  className="relative"
                  onMouseEnter={() => setIsProductsMenuOpen(true)}
                  onMouseLeave={() => {
                    setIsProductsMenuOpen(false);
                    setIsWindowsDoorsSubmenuOpen(false);
                    setIsHandrailsSubmenuOpen(false);
                  }}
                >
                  <button
                    className={cn(
                      "text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted flex items-center gap-1",
                      isProductsMenuOpen && "bg-muted"
                    )}
                  >
                    {t('nav.services')}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isProductsMenuOpen && "rotate-180")} />
                  </button>
                  
                  {isProductsMenuOpen && (
                    <>
                      {/* Invisible bridge to prevent gap */}
                      <div className="absolute left-0 top-full w-full h-2" />
                      <div 
                        className="absolute left-0 top-full pt-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-xl py-4 z-50"
                        onMouseEnter={() => setIsProductsMenuOpen(true)}
                        onMouseLeave={() => {
                          setIsProductsMenuOpen(false);
                          setIsWindowsDoorsSubmenuOpen(false);
                        }}
                      >
                        <div className="space-y-1">
                          {/* Windows & Doors with submenu */}
                          <div
                            className="relative"
                            onMouseEnter={() => setIsWindowsDoorsSubmenuOpen(true)}
                            onMouseLeave={() => setIsWindowsDoorsSubmenuOpen(false)}
                          >
                            <div className="px-4 py-2.5 text-sm font-semibold text-gray-900 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-md mx-2 transition-colors">
                              <span>Windows & Doors</span>
                              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 text-gray-500", isWindowsDoorsSubmenuOpen && "rotate-180")} />
                            </div>
                            
                            {isWindowsDoorsSubmenuOpen && (
                              <div className="absolute left-full top-0 -ml-2 w-[240px] bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                                <Link
                                  href={createUrl('/services/u-pvc-systems')}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md mx-2"
                                  onClick={() => {
                                    setIsProductsMenuOpen(false);
                                    setIsWindowsDoorsSubmenuOpen(false);
                                  }}
                                >
                                  {t('nav.services_menu.upvc')}
                                </Link>
                                <Link
                                  href={createUrl('/services/aluminum-architectural-solutions')}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md mx-2"
                                  onClick={() => {
                                    setIsProductsMenuOpen(false);
                                    setIsWindowsDoorsSubmenuOpen(false);
                                  }}
                                >
                                  {t('nav.services_menu.aluminum')}
                                </Link>
                              </div>
                            )}
                          </div>
                          
                          {/* Other menu items */}
                          <Link
                            href={createUrl('/services/interior-and-exterior-decorative-products')}
                            className="block px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md mx-2 transition-colors"
                            onClick={() => setIsProductsMenuOpen(false)}
                          >
                            Interior and Exterior
                          </Link>
                          <Link
                            href={createUrl('/services/steel-framings')}
                            className="block px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md mx-2 transition-colors"
                            onClick={() => setIsProductsMenuOpen(false)}
                          >
                            Steel Framings
                          </Link>
                          <Link
                            href={createUrl('/services/architectural-glass-solutions')}
                            className="block px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md mx-2 transition-colors"
                            onClick={() => setIsProductsMenuOpen(false)}
                          >
                            Architectural Glass
                          </Link>
                          {/* Handrails & Railings with submenu */}
                          <div
                            className="relative"
                            onMouseEnter={() => setIsHandrailsSubmenuOpen(true)}
                            onMouseLeave={() => setIsHandrailsSubmenuOpen(false)}
                          >
                            <div className="px-4 py-2.5 text-sm font-semibold text-gray-900 flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-md mx-2 transition-colors">
                              <span>Handrails & Railings</span>
                              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 text-gray-500", isHandrailsSubmenuOpen && "rotate-180")} />
                            </div>
                            
                            {isHandrailsSubmenuOpen && (
                              <div className="absolute left-full top-0 -ml-2 w-[240px] bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                                <Link
                                  href={createUrl('/services/handrails-railings/railing-systems')}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md mx-2"
                                  onClick={() => {
                                    setIsProductsMenuOpen(false);
                                    setIsHandrailsSubmenuOpen(false);
                                  }}
                                >
                                  Railing Systems
                                </Link>
                                <Link
                                  href={createUrl('/services/handrails-railings/glass-railing-systems')}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md mx-2"
                                  onClick={() => {
                                    setIsProductsMenuOpen(false);
                                    setIsHandrailsSubmenuOpen(false);
                                  }}
                                >
                                  Glass Railing
                                </Link>
                                <Link
                                  href={createUrl('/services/handrails-railings/easy-railing')}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md mx-2"
                                  onClick={() => {
                                    setIsProductsMenuOpen(false);
                                    setIsHandrailsSubmenuOpen(false);
                                  }}
                                >
                                  Easy Railing
                                </Link>
                                <Link
                                  href={createUrl('/services/handrails-railings/fence-systems')}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md mx-2"
                                  onClick={() => {
                                    setIsProductsMenuOpen(false);
                                    setIsHandrailsSubmenuOpen(false);
                                  }}
                                >
                                  Fence Systems
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
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
              <nav className="mt-4 space-y-1">
                <Link 
                  href={createUrl("/")} 
                  className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted"
                  onClick={() => {
                    const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                    if (sheet) sheet.click();
                  }}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  href={createUrl("/about")} 
                  className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted"
                  onClick={() => {
                    const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                    if (sheet) sheet.click();
                  }}
                >
                  {t('nav.about')}
                </Link>
                
                {/* Services Menu */}
                <div className="pt-1">
                  <div className="block h-10 px-3 rounded-md text-base font-medium leading-10">{t('nav.services')}</div>
                  <div className="grid gap-1 px-3">
                    {/* Windows & Doors with submenu */}
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMobileWindowsDoorsOpen(!isMobileWindowsDoorsOpen);
                        }}
                        className="w-full flex items-center justify-between h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                      >
                        <span>Windows & Doors</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMobileWindowsDoorsOpen && "rotate-180")} />
                      </button>
                      {isMobileWindowsDoorsOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link
                            href={createUrl('/services/u-pvc-systems')}
                            className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                              if (sheet) sheet.click();
                            }}
                          >
                            {t('nav.services_menu.upvc')}
                          </Link>
                          <Link
                            href={createUrl('/services/aluminum-architectural-solutions')}
                            className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                              if (sheet) sheet.click();
                            }}
                          >
                            {t('nav.services_menu.aluminum')}
                          </Link>
                        </div>
                      )}
                    </div>
                    
                    {/* Interior and Exterior */}
                    <Link
                      href={createUrl('/services/interior-and-exterior-decorative-products')}
                      className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                      onClick={(e) => {
                        e.stopPropagation();
                        const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                        if (sheet) sheet.click();
                      }}
                    >
                      Interior and Exterior
                    </Link>
                    
                    {/* Steel Framings */}
                    <Link
                      href={createUrl('/services/steel-framings')}
                      className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                      onClick={(e) => {
                        e.stopPropagation();
                        const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                        if (sheet) sheet.click();
                      }}
                    >
                      Steel Framings
                    </Link>
                    
                    {/* Architectural Glass */}
                    <Link
                      href={createUrl('/services/architectural-glass-solutions')}
                      className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                      onClick={(e) => {
                        e.stopPropagation();
                        const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                        if (sheet) sheet.click();
                      }}
                    >
                      Architectural Glass
                    </Link>
                    
                    {/* Handrails & Railings with submenu */}
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMobileHandrailsOpen(!isMobileHandrailsOpen);
                        }}
                        className="w-full flex items-center justify-between h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                      >
                        <span>Handrails & Railings</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMobileHandrailsOpen && "rotate-180")} />
                      </button>
                      {isMobileHandrailsOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link
                            href={createUrl('/services/handrails-railings/railing-systems')}
                            className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                              if (sheet) sheet.click();
                            }}
                          >
                            Railing Systems
                          </Link>
                          <Link
                            href={createUrl('/services/handrails-railings/glass-railing-systems')}
                            className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                              if (sheet) sheet.click();
                            }}
                          >
                            Glass Railing
                          </Link>
                          <Link
                            href={createUrl('/services/handrails-railings/easy-railing')}
                            className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                              if (sheet) sheet.click();
                            }}
                          >
                            Easy Railing
                          </Link>
                          <Link
                            href={createUrl('/services/handrails-railings/fence-systems')}
                            className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted"
                            onClick={(e) => {
                              e.stopPropagation();
                              const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                              if (sheet) sheet.click();
                            }}
                          >
                            Fence Systems
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href={createUrl("/contact")} 
                  className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted"
                  onClick={() => {
                    const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                    if (sheet) sheet.click();
                  }}
                >
                  {t('nav.contact')}
                </Link>
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


