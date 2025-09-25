"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto h-18 md:h-22 px-6 flex items-center gap-6">
        {/* Left: Logo */}
        <Link href="/" className="inline-flex items-center" aria-label="ARG Structural Solutions">
          <img src="/arg-structural-solutions-logo.svg" alt="ARG Structural Solutions" className="h-14 md:h-14 lg:h-16 w-auto" />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right: Navigation + Languages + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link href="/" className={cn("text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted")}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className={cn("text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted")}>
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-sm font-medium outline-none inline-flex items-center gap-1 px-2 py-1 rounded-md transition-colors hover:bg-muted">
                    Services <ChevronDown className="size-4" aria-hidden />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[320px]">
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href="/services/interior-and-exterior-decorative-products" className="block w-full px-2 py-2">Interior and Exterior Decorative Products</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href="/services/steel-framings" className="block w-full px-2 py-2">Steel Framings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href="/services/aluminum-architectural-solutions" className="block w-full px-2 py-2">Aluminum Architectural Solutions</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-md transition-colors hover:bg-muted focus:bg-muted">
                      <Link href="/services/architectural-glass-solutions" className="block w-full px-2 py-2">Architectural Glass Solutions</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className={cn("text-sm font-medium px-2 py-1 rounded-md transition-colors hover:bg-muted")}>
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language selector as dropdown with flags */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Select language" className="inline-flex items-center gap-2">
                <img src="/flags/gb.svg" alt="English" width="18" height="12" className="rounded-none border" />
                <span className="text-xs font-medium tracking-wide">EN</span>
                <ChevronDown className="size-3.5 opacity-70" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/en"><img src="/flags/gb.svg" alt="English" width="16" height="11" className="me-2 inline rounded-none border"/>English</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hy"><img src="/flags/am.svg" alt="Armenian" width="16" height="11" className="me-2 inline rounded-none border"/>Armenian</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/nl"><img src="/flags/nl.svg" alt="Dutch" width="16" height="11" className="me-2 inline rounded-none border"/>Dutch</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/de"><img src="/flags/de.svg" alt="German" width="16" height="11" className="me-2 inline rounded-none border"/>German</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/el"><img src="/flags/gr.svg" alt="Greek" width="16" height="11" className="me-2 inline rounded-none border"/>Greek</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm">
            <Link href="/dealers">View Authorized Dealers</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden ms-auto flex items-center gap-2">
          {/* Mobile Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 py-1">
                <img src="/flags/gb.svg" alt="English" width="18" height="12" className="rounded-none border" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
              <DropdownMenuItem className="flex items-center gap-2">
                <img src="/flags/gb.svg" alt="English" width="18" height="12" className="rounded-none border" />
                English
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <img src="/flags/am.svg" alt="Armenian" width="18" height="12" className="rounded-none border" />
                Armenian
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <img src="/flags/nl.svg" alt="Dutch" width="18" height="12" className="rounded-none border" />
                Dutch
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <img src="/flags/de.svg" alt="German" width="18" height="12" className="rounded-none border" />
                German
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <img src="/flags/gr.svg" alt="Greek" width="18" height="12" className="rounded-none border" />
                Greek
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
                <Link href="/" aria-label="ARG Structural Solutions" className="inline-flex">
                  <img src="/arg-structural-solutions-logo.svg" alt="ARG Structural Solutions" className="h-16 w-auto" />
                </Link>
              </div>
              <nav className="mt-4 space-y-1" onClick={() => (document.querySelector('[data-state="open"]') as HTMLElement)?.click()}>
                <Link href="/" className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">Home</Link>
                <Link href="/about" className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">About Us</Link>
                <div className="pt-1">
                  <div className="h-10 px-3 rounded-md text-base font-medium leading-10">Services</div>
                  <div className="grid gap-1 px-3">
                    <Link href="/services/interior-and-exterior-decorative-products" className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">Interior and Exterior Decorative Products</Link>
                    <Link href="/services/steel-framings" className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">Steel Framings</Link>
                    <Link href="/services/aluminum-architectural-solutions" className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">Aluminum Architectural Solutions</Link>
                    <Link href="/services/architectural-glass-solutions" className="block h-9 px-2 rounded-md text-sm leading-9 hover:bg-muted">Architectural Glass Solutions</Link>                  </div>
                </div>
                <Link href="/contact" className="block h-10 px-3 rounded-md text-base font-medium leading-10 hover:bg-muted">Contact Us</Link>
              </nav>
              <Separator className="my-4" />
              <div className="mt-auto grid gap-2">
                <Button asChild size="lg" className="w-full">
                  <Link href="/dealers">View Authorized Dealers</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


