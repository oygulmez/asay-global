"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, /* ChevronRight, */ Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Gallery6 } from '@/components/gallery6'
import { FeaturesSectionWithHoverEffects } from '@/components/feature-section-with-hover-effects'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSectionOne() {
    const videoRef = useRef<HTMLDivElement>(null)
    const [isVideoVisible, setIsVideoVisible] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVideoVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (videoRef.current) {
                observer.unobserve(videoRef.current)
            }
        }
    }, [])

    return (
        <>
            <div className="overflow-hidden relative">
                {/* Grid Pattern Background */}
                <div 
                    className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px'
                    }}
                />
                
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-16 md:pt-20">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <div
                                        className="bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                            <span className="text-foreground text-sm">Welcome to Asay Real Global</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <h1
                                            className="mt-4 max-w-4xl mx-auto text-balance text-3xl font-bold" style={{ color: 'black' }}>
                                            Premium Quality, Global Reach
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-4xl text-balance text-base" style={{ color: '#565656' }}>
                                        With <strong>22 years of industry experience</strong>, <strong>Asay Global</strong> specializes in the production and supply of <strong>high-quality building materials</strong> for <strong>global markets</strong>.

                                        We serve <strong>38 countries across 5 continents</strong> and have provided solutions for <strong>thousands of projects</strong> to date. Based in the <strong>United States</strong>, we have completed over <strong>a hundred projects</strong> in <strong>Europe, Asia, Central America, the United Kingdom, and North America</strong>.

                                        With our <strong>professional, experienced, and dynamic team</strong>, <strong>Asay Global</strong> is your <strong>fast and reliable partner</strong> for all your <strong>construction and building-related challenges</strong>. We leverage our <strong>decades of global expertise</strong> and <strong>industry-certified processes</strong> to deliver <strong>precision-engineered, sustainable building solutions</strong>.
                                    </p>
                                </AnimatedGroup>

                                {/* Logo Carousel Section */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 1.2,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-16">
                                    <div className="relative overflow-hidden">
                                        <div className="flex animate-scroll space-x-8">
                                            {[
                                                "/images/brands-logo/brands-anasayfa/reynaers.svg",
                                                "/images/brands-logo/brands-anasayfa/alumil-logo.svg",
                                                "/images/brands-logo/brands-anasayfa/hafele-logo.png",
                                                "/images/brands-logo/brands-anasayfa/roto-logo.svg",
                                                "/images/brands-logo/brands-anasayfa/deceuninck.png",
                                                "/images/brands-logo/brands-anasayfa/siegenia.png",
                                                "/images/brands-logo/brands-anasayfa/steelframing-logo.svg",
                                                "/images/brands-logo/brands-anasayfa/lavita-door-logo.png",
                                                "/images/brands-logo/brands-anasayfa/reynaers.svg",
                                                "/images/brands-logo/brands-anasayfa/alumil-logo.svg",
                                            ].map((src, i) => (
                                                <div key={i} className="flex-shrink-0 flex items-center justify-center w-44 h-20">
                                                    <img
                                                        className={cn(
                                                            "w-auto opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 object-contain",
                                                            src.includes("alumil-logo") ? "h-9 md:h-11" : src.includes("reynaers") ? "h-11 md:h-13" : "h-12 md:h-14"
                                                        )}
                                                        src={src}
                                                        alt="brand logo"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div 
                                ref={videoRef}
                                className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
                                style={{
                                    transform: `translateY(${scrollY * 0.1}px)`,
                                    opacity: isVideoVisible ? 1 : 0.7,
                                }}
                            >
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div 
                                    className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 shadow-lg shadow-zinc-950/15 ring-1 transition-all duration-700"
                                    style={{
                                        transform: `scale(${isVideoVisible ? 1 : 0.95})`,
                                        boxShadow: isVideoVisible 
                                            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                                            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <video
                                            className="w-full h-auto aspect-video object-center transition-all duration-500"
                                            src="/video/hero-section-video.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            controls
                                            style={{
                                                filter: isVideoVisible ? 'brightness(1)' : 'brightness(0.8)',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>

                        </div>

            {/* Spacing between video and Why Choose Us */}
            <div className="h-16 md:h-24"></div>

            {/* Why Choose Us Section - Full Width */}
            <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#000000' }}>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Us</h2>
                        <p className="text-white/80 text-base max-w-2xl mx-auto">
                            Discover the advantages that make us the preferred choice for your construction and building material needs.
                        </p>
                            </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Experienced Team */}
                        <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">Experienced Team</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Our seasoned professionals bring decades of combined experience in construction and building materials, ensuring exceptional quality and expertise in every project.
                            </p>
                            </div>

                        {/* Main US Distributor */}
                        <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm8.716-6.747a9.004 9.004 0 01-8.716 6.747m8.716-6.747a9.004 9.004 0 00-8.716-6.747" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">Main US Distributor</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                As the primary distributor for leading US manufacturers, we provide direct access to premium building materials and cutting-edge construction solutions.
                            </p>
                            </div>

                        {/* Worldwide Shipping */}
                        <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">Worldwide Shipping</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                We offer comprehensive global shipping services, delivering our high-quality building materials and construction solutions to clients worldwide with reliable logistics.
                            </p>
                            </div>

                        {/* Professional Service */}
                        <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">Professional Service</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Dedicated to excellence, we provide comprehensive professional services including consultation, installation support, and ongoing maintenance for all our products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Gallery */}
            <Gallery6 
                demoUrl="/contact"
                items={[
                    {
                        id: "service-1",
                        title: "Interior and Exterior Decorative Products",
                        summary: "High-quality decorative materials for both interior and exterior applications, enhancing the aesthetic appeal of your projects.",
                        url: "/services/interior-and-exterior-decorative-products",
                        image: "/images/services/interior-exterior/Interior and Exterior Decorative Products - 1.jpg",
                    },
                    {
                        id: "service-2", 
                        title: "Steel Framings",
                        summary: "Robust steel structural solutions designed for durability and strength in commercial and industrial construction projects.",
                        url: "/services/steel-framings",
                        image: "/images/services/steel-structure/steel-framings-img-1.jpg",
                    },
                    {
                        id: "service-3",
                        title: "Aluminum Architectural Solutions", 
                        summary: "Modern aluminum systems and architectural solutions offering excellent performance and contemporary design possibilities.",
                        url: "/services/aluminum-architectural-solutions",
                        image: "/images/services/aluminum-solutions/Aluminum-Architectural-Solutions-img--1.jpg",
                    },
                    {
                        id: "service-4",
                        title: "Architectural Glass Solutions",
                        summary: "Premium glass solutions for architectural applications, providing transparency, energy efficiency, and modern aesthetics.",
                        url: "/services/architectural-glass-solutions", 
                        image: "/images/services/glass-solutions/Architectural-Glass-Solutions-img--1.jpg",
                    },
                ]}
            />

            {/* Our Products Section - Full Width */}
            <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#e5e5e5' }}>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Our Products</h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: '#565656' }}>
                            Discover our comprehensive range of premium building solutions designed for modern architecture.
                        </p>
                    </div>
                    <FeaturesSectionWithHoverEffects />
                    </div>
                </section>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 78 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-5 w-auto', className)}>
            <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill="url(#logo-gradient)"
            />
            <path
                d="M27.06 7.054V12.239C27.06 12.5903 27.1393 12.8453 27.298 13.004C27.468 13.1513 27.7513 13.225 28.148 13.225H29.338V14.84H27.808C26.9353 14.84 26.2667 14.636 25.802 14.228C25.3373 13.82 25.105 13.157 25.105 12.239V7.054H24V5.473H25.105V3.144H27.06V5.473H29.338V7.054H27.06ZM30.4782 10.114C30.4782 9.17333 30.6709 8.34033 31.0562 7.615C31.4529 6.88967 31.9855 6.32867 32.6542 5.932C33.3342 5.524 34.0822 5.32 34.8982 5.32C35.6349 5.32 36.2752 5.46733 36.8192 5.762C37.3745 6.04533 37.8165 6.40233 38.1452 6.833V5.473H40.1002V14.84H38.1452V13.446C37.8165 13.888 37.3689 14.2563 36.8022 14.551C36.2355 14.8457 35.5895 14.993 34.8642 14.993C34.0595 14.993 33.3229 14.789 32.6542 14.381C31.9855 13.9617 31.4529 13.3837 31.0562 12.647C30.6709 11.899 30.4782 11.0547 30.4782 10.114ZM38.1452 10.148C38.1452 9.502 38.0092 8.941 37.7372 8.465C37.4765 7.989 37.1309 7.62633 36.7002 7.377C36.2695 7.12767 35.8049 7.003 35.3062 7.003C34.8075 7.003 34.3429 7.12767 33.9122 7.377C33.4815 7.615 33.1302 7.972 32.8582 8.448C32.5975 8.91267 32.4672 9.468 32.4672 10.114C32.4672 10.76 32.5975 11.3267 32.8582 11.814C33.1302 12.3013 33.4815 12.6753 33.9122 12.936C34.3542 13.1853 34.8189 13.31 35.3062 13.31C35.8049 13.31 36.2695 13.1853 36.7002 12.936C37.1309 12.6867 37.4765 12.324 37.7372 11.848C38.0092 11.3607 38.1452 10.794 38.1452 10.148ZM43.6317 4.232C43.2803 4.232 42.9857 4.113 42.7477 3.875C42.5097 3.637 42.3907 3.34233 42.3907 2.991C42.3907 2.63967 42.5097 2.345 42.7477 2.107C42.9857 1.869 43.2803 1.75 43.6317 1.75C43.9717 1.75 44.2607 1.869 44.4987 2.107C44.7367 2.345 44.8557 2.63967 44.8557 2.991C44.8557 3.34233 44.7367 3.637 44.4987 3.875C44.2607 4.113 43.9717 4.232 43.6317 4.232ZM44.5837 5.473V14.84H42.6457V5.473H44.5837ZM49.0661 2.26V14.84H47.1281V2.26H49.0661ZM50.9645 10.114C50.9645 9.17333 51.1572 8.34033 51.5425 7.615C51.9392 6.88967 52.4719 6.32867 53.1405 5.932C53.8205 5.524 54.5685 5.32 55.3845 5.32C56.1212 5.32 56.7615 5.46733 57.3055 5.762C57.8609 6.04533 58.3029 6.40233 58.6315 6.833V5.473H60.5865V14.84H58.6315V13.446C58.3029 13.888 57.8552 14.2563 57.2885 14.551C56.7219 14.8457 56.0759 14.993 55.3505 14.993C54.5459 14.993 53.8092 14.789 53.1405 14.381C52.4719 13.9617 51.9392 13.3837 51.5425 12.647C51.1572 11.899 50.9645 11.0547 50.9645 10.114ZM58.6315 10.148C58.6315 9.502 58.4955 8.941 58.2235 8.465C57.9629 7.989 57.6172 7.62633 57.1865 7.377C56.7559 7.12767 56.2912 7.003 55.7925 7.003C55.2939 7.003 54.8292 7.12767 54.3985 7.377C53.9679 7.615 53.6165 7.972 53.3445 8.448C53.0839 8.91267 52.9535 9.468 52.9535 10.114C52.9535 10.76 53.0839 11.3267 53.3445 11.814C53.6165 12.3013 53.9679 12.6753 54.3985 12.936C54.8405 13.1853 55.3052 13.31 55.7925 13.31C56.2912 13.31 56.7559 13.1853 57.1865 12.936C57.6172 12.6867 57.9629 12.324 58.2235 11.848C58.4955 11.3607 58.6315 10.794 58.6315 10.148ZM65.07 6.833C65.3533 6.357 65.7273 5.98867 66.192 5.728C66.668 5.456 67.229 5.32 67.875 5.32V7.326H67.382C66.6227 7.326 66.0447 7.51867 65.648 7.904C65.2627 8.28933 65.07 8.958 65.07 9.91V14.84H63.132V5.473H65.07V6.833ZM73.3624 10.165L77.6804 14.84H75.0624L71.5944 10.811V14.84H69.6564V2.26H71.5944V9.57L74.9944 5.473H77.6804L73.3624 10.165Z"
                fill="currentColor"
            />
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="20"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop
                        offset="1"
                        stopColor="#2BC8B7"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}