"use client"

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StickyContactButtons } from '@/components/sticky-contact-buttons';
import { FileText, Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ReCaptcha } from "@/components/recaptcha";
import Script from "next/script";

export default function R1200GlassRailingSystemPage() {
    const createUrl = (path: string) => path;
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(false);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!recaptchaToken) {
            setFormErrorMessage("Please complete the reCAPTCHA verification.");
            return;
        }

        setFormStatus("sending");
        setFormErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            company: formData.get("company") as string,
            message: formData.get("message") as string,
        };

        try {
            const response = await fetch("https://formspree.io/f/movkdgoa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    company: data.company,
                    subject: "R1200 Glass Railing System Inquiry",
                    message: data.message,
                    "g-recaptcha-response": recaptchaToken,
                }),
            });

            if (response.ok) {
                setFormStatus("sent");
                setRecaptchaToken(null);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setFormStatus("idle"), 5000);
            } else {
                setFormStatus("error");
                setFormErrorMessage("Failed to send message. Please try again.");
            }
        } catch (error) {
            setFormStatus("error");
            setFormErrorMessage("Network error. Please check your connection.");
        }
    };

    const images = [
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.webp",
            alt: "R1200 Glass Railing System"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-C_TD.webp",
            alt: "R1200-C Technical Drawing"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-D_TD.webp",
            alt: "R1200-D Technical Drawing"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-E_TD.webp",
            alt: "R1200-E Technical Drawing"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1003.webp",
            alt: "R1200 Component 1003"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/C003-B.webp",
            alt: "R1200 Component C003-B"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/C003-C.webp",
            alt: "R1200 Component C003-C"
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1202.webp",
            alt: "R1200 Component 1202"
        }
    ];

    const carouselImages = [
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-C_TD.webp",
            alt: "R1200-C Technical Drawing",
            lightboxIndex: 1
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-D_TD.webp",
            alt: "R1200-D Technical Drawing",
            lightboxIndex: 2
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-E_TD.webp",
            alt: "R1200-E Technical Drawing",
            lightboxIndex: 3
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1003.webp",
            alt: "R1200 Component 1003",
            lightboxIndex: 4
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/C003-B.webp",
            alt: "R1200 Component C003-B",
            lightboxIndex: 5
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/C003-C.webp",
            alt: "R1200 Component C003-C",
            lightboxIndex: 6
        },
        {
            src: "/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1202.webp",
            alt: "R1200 Component 1202",
            lightboxIndex: 7
        }
    ];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setImageLoading(true);
        setTimeout(() => {
            setLightboxIndex((prev) => (prev + 1) % images.length);
            setImageLoading(false);
        }, 150);
    };

    const prevImage = () => {
        setImageLoading(true);
        setTimeout(() => {
            setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
            setImageLoading(false);
        }, 150);
    };

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen]);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const pdfs = [
        {
            name: "Railing Systems Catalog",
            file: "/images/handrails-railings/railing-systems/Documents/Asay-Global-Railing-Systems-2025.pdf",
            label: "Railing Systems 2025"
        },
        {
            name: "R-Easy Catalog",
            file: "/images/handrails-railings/railing-systems/Documents/Asay-Global-R-Easy-2025.pdf",
            label: "R-Easy 2025"
        },
        {
            name: "Glass Railing Systems Catalog",
            file: "/images/handrails-railings/railing-systems/Documents/Asay-Global-Glass-Railing-Systems-2025.pdf",
            label: "Glass Railing Systems 2025"
        },
        {
            name: "Fence Systems Catalog",
            file: "/images/handrails-railings/railing-systems/Documents/Asay-Global-Fence-Systems-2025.pdf",
            label: "Fence Systems 2025"
        }
    ];

    // Schema.org structured data
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "R1200 Glass Railing System",
        "description": "The R1200 Glass Railing System by Asay Global is a side-mounted solution that offers excellent visibility and efficient space utilization. Ideal for balconies and terraces.",
        "brand": {
            "@type": "Brand",
            "name": "Asay Global"
        },
        "category": "Glass Railing Systems",
        "material": ["Aluminum", "Glass"],
        "applicationCategory": "Building Material",
        "audience": {
            "@type": "Audience",
            "audienceType": "Architects, Contractors, Building Professionals"
        },
        "image": [
            "https://www.asayglobal.com/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.webp",
            "https://www.asayglobal.com/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-C_TD.webp",
            "https://www.asayglobal.com/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-D_TD.webp",
            "https://www.asayglobal.com/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/R1200-E_TD.webp"
        ],
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "seller": {
                "@type": "Organization",
                "name": "Asay Global"
            }
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Base Profile Dimensions",
                "value": "49 × 77 mm (without cover)"
            },
            {
                "@type": "PropertyValue",
                "name": "Segment Lengths",
                "value": "140 mm, 280 mm"
            },
            {
                "@type": "PropertyValue",
                "name": "Compatible Glass Types",
                "value": "6+6 mm, 5+5 mm, 4+4 mm laminated glass"
            },
            {
                "@type": "PropertyValue",
                "name": "Glass Embedment Depth",
                "value": "68 mm"
            },
            {
                "@type": "PropertyValue",
                "name": "Installation Type",
                "value": "Side-mounted glass railing system"
            },
            {
                "@type": "PropertyValue",
                "name": "Applications",
                "value": "Balconies, Terraces, Residential & Commercial"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes the R1200 system different from base-mounted glass railings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "R1200 is a side-mounted system, allowing glass installation from the side and helping maximize usable floor space."
                }
            },
            {
                "@type": "Question",
                "name": "Where is the R1200 Glass Railing System typically used?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "R1200 is commonly used in balconies, terraces, and projects where space efficiency and clear views are priorities."
                }
            },
            {
                "@type": "Question",
                "name": "What glass thickness options are supported by R1200?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The system supports laminated glass panels with thicknesses of 6+6 mm, 5+5 mm, and 4+4 mm."
                }
            },
            {
                "@type": "Question",
                "name": "Does the R1200 system support modular installation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. With segment lengths of 140 mm and 280 mm, R1200 offers flexibility for different layouts and design requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Is the R1200 system suitable for outdoor use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Its aluminum construction and surface finish options provide durability and resistance to outdoor conditions."
                }
            }
        ]
    };

    const content = (
        <>
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PageHeader
                title="R1200 Glass Railing System"
                description="From Side to Side: Where Style Meets Stability. A side-mounted solution maximizing visual openness."
                breadcrumbItems={[
                    { label: "Home", href: createUrl("/") },
                    { label: "Services", href: createUrl("/services") },
                    { label: "Handrails & Railings", href: createUrl("/services/handrails-railings") },
                    { label: "Glass Railing Systems", href: createUrl("/services/handrails-railings/glass-railing-systems") },
                    { label: "R1200 Glass Railing System" },
                ]}
            />

            <div className="container mx-auto px-6 py-20" style={{ overflow: 'visible' }}>
                <div className="mx-auto max-w-7xl" style={{ overflow: 'visible' }}>
                    {/* Main Image */}
                    <div className="mb-16">
                        <div
                            className="relative overflow-hidden rounded-2xl border-2 border-gray-200 p-3 bg-white shadow-sm cursor-pointer hover:opacity-90 hover:shadow-lg transition-all"
                            onClick={() => openLightbox(0)}
                        >
                            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                                <Image
                                    src="/images/handrails-railings/glass-railing-systems/R1200-glass-railing-system/1200-1024x571.webp"
                                    alt="R1200 Glass Railing System"
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid: 70% Content + 30% Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                        {/* Left: Content Section (70%) */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* Product Overview */}
                            <section className="pt-4">
                                <h2 className="text-[1.875rem] font-semibold mb-6" style={{ color: "black" }}>Product Overview</h2>
                                <p className="text-[1rem] leading-relaxed mb-4" style={{ color: "#565656" }}>
                                    <strong>Glass Railing Systems by Asay Global</strong> are designed to maximize <strong>visual openness</strong> while delivering <strong>reliable safety solutions</strong> for modern architectural projects. By focusing on <strong>smart structural detailing</strong> and <strong>efficient use of space</strong>, these systems support clean lines and <strong>unobstructed views</strong> across residential and commercial environments.
                                </p>
                                <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                    The <strong>R1200 Glass Railing System by Asay Global</strong> is engineered as a <strong>side-mounted solution</strong> that offers excellent visibility and <strong>efficient space utilization</strong>. Thanks to its intelligent design, R1200 allows glass panels to be installed laterally, making it an <strong>ideal choice for balconies, terraces</strong>, and projects where maximizing usable floor area is essential. Its <strong>compact profile</strong> delivers a minimalist appearance while ensuring <strong>stable glass support</strong>, providing a refined balance between style and structural performance.
                                </p>
                            </section>

                            {/* Technical Images Carousel */}
                            <section className="pt-4">
                                <h2 className="text-[1.875rem] font-semibold mb-6" style={{ color: "black" }}>Technical Images</h2>
                                <div className="w-full relative">
                                    <Carousel
                                        setApi={setApi}
                                        opts={{
                                            loop: true,
                                            align: "start",
                                        }}
                                        className="w-full"
                                    >
                                        <CarouselContent className="ml-0">
                                            {carouselImages.map((img, index) => (
                                                <CarouselItem key={index} className="pl-0">
                                                    <div
                                                        className="relative overflow-hidden rounded-xl border-2 border-gray-200 p-3 bg-white shadow-sm cursor-pointer hover:opacity-90 hover:shadow-lg transition-all"
                                                        onClick={() => openLightbox(img.lightboxIndex)}
                                                    >
                                                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                                            <Image
                                                                src={img.src}
                                                                alt={img.alt}
                                                                fill
                                                                sizes="(min-width: 1024px) 75vw, 100vw"
                                                                className="object-contain bg-white"
                                                            />
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="left-2 md:left-4" />
                                        <CarouselNext className="right-2 md:right-4" />
                                    </Carousel>

                                    {/* Dots Indicator */}
                                    <div className="flex justify-center gap-2 mt-4">
                                        {carouselImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => api?.scrollTo(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${current === index
                                                    ? "w-8 bg-[#333333]"
                                                    : "w-2 bg-gray-300 hover:bg-gray-400"
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Technical Specifications */}
                            <section className="pt-4">
                                <h2 className="text-[1.875rem] font-semibold mb-6" style={{ color: "black" }}>Technical Specifications – R1200</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex-1">
                                            <h3 className="text-[1.125rem] font-semibold mb-2" style={{ color: "black" }}>Base Profile Dimensions</h3>
                                            <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                <strong>49 × 77 mm</strong> (without cover)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex-1">
                                            <h3 className="text-[1.125rem] font-semibold mb-2" style={{ color: "black" }}>Segment Lengths</h3>
                                            <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                <strong>140 mm, 280 mm</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex-1">
                                            <h3 className="text-[1.125rem] font-semibold mb-2" style={{ color: "black" }}>Compatible Glass Types</h3>
                                            <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                <strong>6+6 mm, 5+5 mm, 4+4 mm laminated glass</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex-1">
                                            <h3 className="text-[1.125rem] font-semibold mb-2" style={{ color: "black" }}>Glass Embedment Depth</h3>
                                            <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                <strong>68 mm</strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                        <div className="flex-1">
                                            <h3 className="text-[1.125rem] font-semibold mb-2" style={{ color: "black" }}>Installation Type</h3>
                                            <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                <strong>Side-mounted glass railing system</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Technical Documents */}
                            <section id="technical-documents" className="pt-4">
                                <h2 className="text-[1.875rem] font-semibold mb-6" style={{ color: "black" }}>Technical Documents</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {pdfs.map((pdf, index) => (
                                        <a
                                            key={index}
                                            href={pdf.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-6 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all group"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-md bg-white border border-gray-200 flex items-center justify-center">
                                                <FileText className="h-6 w-6" style={{ color: "#998675" }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[1rem] font-semibold text-gray-900 truncate">{pdf.label}</p>
                                                <p className="text-[0.875rem] text-gray-500">PDF Document</p>
                                            </div>
                                            <Download className="h-5 w-5 transition-colors flex-shrink-0" style={{ color: "#998675" }} />
                                        </a>
                                    ))}
                                </div>
                            </section>

                            {/* Frequently Asked Questions */}
                            <section className="pt-4">
                                <div className="space-y-12">
                                    <h2 className="text-[1.875rem] font-semibold mb-8" style={{ color: "black" }}>Frequently Asked Questions (FAQ) – R1200</h2>

                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full"
                                    >
                                        <div className="group">
                                            <AccordionItem
                                                value="item-1"
                                                className="peer rounded-xl border-none px-0 py-1"
                                            >
                                                <AccordionTrigger className="cursor-pointer text-[1rem] hover:no-underline" style={{ color: "black" }}>
                                                    What makes the R1200 system different from base-mounted glass railings?
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                        R1200 is a <strong>side-mounted system</strong>, allowing glass installation from the side and helping <strong>maximize usable floor space</strong>.
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <hr className="mx-0 -mb-px group-last:hidden peer-data-[state=open]:opacity-0" />
                                        </div>
                                        <div className="group">
                                            <AccordionItem
                                                value="item-2"
                                                className="peer rounded-xl border-none px-0 py-1"
                                            >
                                                <AccordionTrigger className="cursor-pointer text-[1rem] hover:no-underline" style={{ color: "black" }}>
                                                    Where is the R1200 Glass Railing System typically used?
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                        R1200 is commonly used in <strong>balconies</strong>, <strong>terraces</strong>, and projects where <strong>space efficiency</strong> and <strong>clear views</strong> are priorities.
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <hr className="mx-0 -mb-px group-last:hidden peer-data-[state=open]:opacity-0" />
                                        </div>
                                        <div className="group">
                                            <AccordionItem
                                                value="item-3"
                                                className="peer rounded-xl border-none px-0 py-1"
                                            >
                                                <AccordionTrigger className="cursor-pointer text-[1rem] hover:no-underline" style={{ color: "black" }}>
                                                    What glass thickness options are supported by R1200?
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                        The system supports <strong>laminated glass panels</strong> with thicknesses of <strong>6+6 mm</strong>, <strong>5+5 mm</strong>, and <strong>4+4 mm</strong>.
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <hr className="mx-0 -mb-px group-last:hidden peer-data-[state=open]:opacity-0" />
                                        </div>
                                        <div className="group">
                                            <AccordionItem
                                                value="item-4"
                                                className="peer rounded-xl border-none px-0 py-1"
                                            >
                                                <AccordionTrigger className="cursor-pointer text-[1rem] hover:no-underline" style={{ color: "black" }}>
                                                    Does the R1200 system support modular installation?
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                        Yes. With <strong>segment lengths of 140 mm and 280 mm</strong>, R1200 offers <strong>flexibility</strong> for different layouts and design requirements.
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <hr className="mx-0 -mb-px group-last:hidden peer-data-[state=open]:opacity-0" />
                                        </div>
                                        <div className="group">
                                            <AccordionItem
                                                value="item-5"
                                                className="peer rounded-xl border-none px-0 py-1"
                                            >
                                                <AccordionTrigger className="cursor-pointer text-[1rem] hover:no-underline" style={{ color: "black" }}>
                                                    Is the R1200 system suitable for outdoor use?
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-[1rem] leading-relaxed" style={{ color: "#565656" }}>
                                                        Yes. Its <strong>aluminum construction</strong> and <strong>surface finish options</strong> provide <strong>durability</strong> and <strong>resistance to outdoor conditions</strong>.
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <hr className="mx-0 -mb-px group-last:hidden peer-data-[state=open]:opacity-0" />
                                        </div>
                                    </Accordion>
                                </div>
                            </section>

                            {/* Call to Action */}
                            <section className="pt-4">
                                <div className="relative overflow-hidden rounded-2xl p-12 border border-gray-200 shadow-lg" style={{ backgroundColor: "#998675" }}>
                                    <div className="relative z-10">
                                        <h2 className="text-[1.875rem] font-semibold mb-4 text-white">Maximize Your Space with R1200</h2>
                                        <p className="text-[1rem] leading-relaxed mb-8 text-white/95 max-w-2xl">
                                            Choose a <strong>side-mounted glass railing system</strong> designed for <strong>efficiency</strong> and <strong>clean design</strong>.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                href={createUrl("/dealers")}
                                                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#998675] transition-all duration-200 transform hover:-translate-y-0.5"
                                            >
                                                View Authorized Dealers
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Decorative background pattern */}
                                    <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                                        <div className="absolute inset-0 border-2 border-white rounded-full" style={{ transform: 'translate(30%, -30%)' }}></div>
                                        <div className="absolute inset-0 border-2 border-white rounded-full" style={{ transform: 'translate(40%, -20%) scale(0.7)' }}></div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right: Contact Form (30%) - Sticky until footer */}
                        <div className="lg:col-span-4" id="request-information-form">
                            <div className="lg:sticky lg:top-24">
                                <div className="rounded-xl border border-gray-200 p-8 bg-white shadow-sm">
                                    <h2 className="text-[1.875rem] font-semibold mb-6" style={{ color: "black" }}>Request Information</h2>
                                    <form onSubmit={handleFormSubmit} className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="text-[0.875rem] font-medium" htmlFor="name" style={{ color: "black" }}>Name *</label>
                                            <input
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.875rem] font-medium" htmlFor="email" style={{ color: "black" }}>Email *</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.875rem] font-medium" htmlFor="phone" style={{ color: "black" }}>Phone</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.875rem] font-medium" htmlFor="company" style={{ color: "black" }}>Company</label>
                                            <input
                                                id="company"
                                                name="company"
                                                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.875rem] font-medium" htmlFor="message" style={{ color: "black" }}>Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                required
                                                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent resize-none transition-all"
                                            />
                                        </div>
                                        <div className="flex justify-center">
                                            <ReCaptcha
                                                onChange={(token) => setRecaptchaToken(token)}
                                                onExpired={() => setRecaptchaToken(null)}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={formStatus !== "idle" || !recaptchaToken}
                                            className="w-full px-4 py-2 bg-[#333333] text-white rounded-md disabled:opacity-50 hover:bg-[#998675] transition-colors"
                                        >
                                            {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent ✓" : "Send Message"}
                                        </button>

                                        {formStatus === "error" && (
                                            <div className="text-red-600 text-[0.875rem]">
                                                {formErrorMessage}
                                            </div>
                                        )}

                                        {formStatus === "sent" && (
                                            <div className="text-green-600 text-[0.875rem]">
                                                Thank you! Your message has been sent successfully.
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeLightbox}
                >
                    <button
                        aria-label="Close"
                        className="absolute top-4 right-4 text-white/80 hover:text-white z-10 transition-opacity duration-200"
                        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                    >
                        <X className="h-8 w-8" />
                    </button>

                    {/* Previous Button */}
                    <button
                        aria-label="Previous"
                        className="absolute left-4 md:left-8 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-10"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    {/* Image with smooth transition */}
                    <div
                        className="max-h-[90vh] max-w-[90vw] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className={`max-h-[90vh] max-w-[90vw] transition-opacity duration-300 ease-in-out ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                            key={lightboxIndex}
                        >
                            <Image
                                src={images[lightboxIndex].src}
                                alt={images[lightboxIndex].alt}
                                width={1200}
                                height={800}
                                className="max-h-[90vh] max-w-[90vw] object-contain"
                                priority
                                onLoad={() => setImageLoading(false)}
                            />
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        aria-label="Next"
                        className="absolute right-4 md:right-8 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-10"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-[0.875rem] z-10 transition-opacity duration-200">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar locale="en" />
            <main className="flex-1">
                {content}
            </main>
            <Footer locale="en" />
            <StickyContactButtons />

            {/* Mobile Contact Button */}
            <button
                onClick={() => {
                    const formElement = document.getElementById('request-information-form');
                    if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }}
                className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 px-8 py-4 bg-[#998675] text-white font-semibold rounded-full shadow-lg hover:bg-[#7f6d5f] transition-all duration-200 hover:shadow-xl"
            >
                Contact
            </button>
        </div>
    );
}
