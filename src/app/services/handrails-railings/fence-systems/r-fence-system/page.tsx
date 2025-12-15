"use client";

import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";
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

const createUrl = (path: string) => path;

// Hero + all images (lightbox)
const images = [
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/R-Fence_Garden.png",
    alt: "R-Fence System – garden installation",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/Group-38.png",
    alt: "R-Fence System – elevation and details",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/h100-724x1024.png",
    alt: "R-Fence System – H100 elevation",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/h200-724x1024.png",
    alt: "R-Fence System – H200 elevation",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/h100-150-200-768x432.png",
    alt: "R-Fence System – H100 / H150 / H200 comparison",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/o1-724x1024.png",
    alt: "R-Fence System – O1 view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/o2-724x1024.png",
    alt: "R-Fence System – O2 view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/o3-724x1024.png",
    alt: "R-Fence System – O3 view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/a90-front-768x432.png",
    alt: "R-Fence System – 90° front view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/a90-o2-768x432.png",
    alt: "R-Fence System – 90° O2 view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/a90-o3-768x432.png",
    alt: "R-Fence System – 90° O3 view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/o1_v2-768x768.png",
    alt: "R-Fence System – O1 v2 detail",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/o2_v2-768x768.png",
    alt: "R-Fence System – O2 v2 detail",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/o3_v2-768x768.png",
    alt: "R-Fence System – O3 v2 detail",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/a90-top-768x558.png",
    alt: "R-Fence System – 90° top view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/a135-top.png",
    alt: "R-Fence System – 135° top view",
  },
  {
    src: "/images/handrails-railings/fense-systems/r-fence-system/a180-top.png",
    alt: "R-Fence System – 180° top view",
  },
];

// Technical carousel: all except hero
const carouselImages = images.slice(1).map((img, index) => ({
  src: img.src,
  alt: img.alt,
  lightboxIndex: index + 1,
}));

const pdfs = [
  {
    name: "Fence Systems Catalog",
    file: "/images/handrails-railings/railing-systems/Documents/Asay-Global-Fence-Systems-2025.pdf",
    label: "Fence Systems 2025",
  },
];

export default function RFenceSystemPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
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
          subject: "R-Fence System Inquiry",
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
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Schema.org structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "R-Fence System",
    description:
      "The R-Fence System by Asay Global is a modular aluminum fence system with adjustable angles between 60° and 180°, providing structured protection, flexible layouts and long-term durability for residential and commercial boundaries.",
    brand: {
      "@type": "Brand",
      name: "Asay Global",
    },
    category: "Fence Systems",
    material: ["Aluminum"],
    applicationCategory: "Building Material",
    image: images.map(
      (img) => `https://www.asayglobal.com${img.src}`,
    ),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Asay Global",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Adjustable Angles",
        value: "Adjustable between 60° and 180° using the same profile for all angles.",
      },
      {
        "@type": "PropertyValue",
        name: "Panel Gaps & Spacing",
        value:
          "Left and right plastic spacer options with 1, 2, or 3 spacer configurations available between panels.",
      },
      {
        "@type": "PropertyValue",
        name: "Maximum Height",
        value: "200 cm",
      },
      {
        "@type": "PropertyValue",
        name: "Anchorage Requirements",
        value:
          "Up to 120 cm: no anchorage required; 120–160 cm: 20 cm anchorage; 160–200 cm: 40 cm anchorage.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes the R-Fence System different from standard fence systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "R-Fence offers adjustable angles from 60° to 180° using a single profile, allowing flexible layouts without changing system components.",
        },
      },
      {
        "@type": "Question",
        name: "Where can the R-Fence System be used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "R-Fence is suitable for residential boundaries, commercial properties, gardens, terraces, and perimeter applications requiring controlled access and visibility.",
        },
      },
      {
        "@type": "Question",
        name: "Can panel spacing be adjusted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The system allows 1, 2, or 3 plastic spacer options between panels, providing flexibility in spacing and visual density.",
        },
      },
      {
        "@type": "Question",
        name: "Do angled applications affect profile or panel lengths?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Profile, plastic, and lamella lengths remain unchanged regardless of angle adjustments.",
        },
      },
      {
        "@type": "Question",
        name: "When is anchorage required for the R-Fence System?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anchorage requirements depend on system height, ranging from no anchorage up to 120 cm to 40 cm anchorage for heights between 160–200 cm.",
        },
      },
    ],
  };

  const content = (
    <>
      <Script
        id="rfence-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="rfence-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        title="R-Fence System"
        description="Flexible Angles, Structured Protection – a modular aluminum fence system designed for adaptable layouts and long-term durability."
        breadcrumbItems={[
          { label: "Home", href: createUrl("/") },
          { label: "Services", href: createUrl("/services") },
          {
            label: "Handrails & Railings",
            href: createUrl("/services/handrails-railings"),
          },
          {
            label: "Fence Systems",
            href: createUrl("/services/handrails-railings/fence-systems"),
          },
          { label: "R-Fence System" },
        ]}
      />

      <div
        className="container mx-auto px-6 py-20"
        style={{ overflow: "visible" }}
      >
        <div
          className="mx-auto max-w-7xl"
          style={{ overflow: "visible" }}
        >
          {/* Main Image */}
          <div className="mb-16">
            <div
              className="relative overflow-hidden rounded-2xl border-2 border-gray-200 p-3 bg-white shadow-sm cursor-pointer hover:opacity-90 hover:shadow-lg transition-all"
              onClick={() => openLightbox(0)}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="100vw"
                  className="object-cover bg-white"
                />
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            {/* Left: Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Product Overview */}
              <section className="pt-4">
                <h2
                  className="text-[1.875rem] font-semibold mb-6"
                  style={{ color: "black" }}
                >
                  Product Overview
                </h2>
                <p
                  className="text-[1rem] leading-relaxed mb-4"
                  style={{ color: "#565656" }}
                >
                  <strong>Fence Systems</strong> by{" "}
                  <strong>Asay Global</strong> are designed to provide{" "}
                  <strong>secure perimeter solutions</strong> while maintaining{" "}
                  <strong>architectural consistency</strong> and{" "}
                  <strong>installation flexibility</strong>. Developed for{" "}
                  <strong>residential</strong>, <strong>commercial</strong>, and{" "}
                  <strong>semi-public spaces</strong>, these systems combine{" "}
                  <strong>modular design</strong> with{" "}
                  <strong>durable aluminum components</strong>, offering both{" "}
                  <strong>functional protection</strong> and a{" "}
                  <strong>clean, modern appearance</strong>.
                </p>
                <p
                  className="text-[1rem] leading-relaxed"
                  style={{ color: "#565656" }}
                >
                  The <strong>R-Fence System</strong> by{" "}
                  <strong>Asay Global</strong> stands out with its{" "}
                  <strong>adjustable angle capability</strong>, allowing
                  seamless application across <strong>straight lines</strong>,{" "}
                  <strong>corners</strong>, and{" "}
                  <strong>complex layouts</strong>. Using the{" "}
                  <strong>same profile across all angles</strong>, the system
                  simplifies <strong>design</strong> and{" "}
                  <strong>installation</strong> while ensuring{" "}
                  <strong>visual continuity</strong>. Its{" "}
                  <strong>modular panel structure</strong>, combined with{" "}
                  <strong>flexible plastic spacer options</strong>, allows{" "}
                  <strong>precise control</strong> over{" "}
                  <strong>panel spacing</strong> and <strong>configuration</strong>.{" "}
                  <strong>R-Fence</strong> is an ideal solution for projects
                  requiring <strong>adaptable geometry</strong>,{" "}
                  <strong>controlled boundaries</strong>, and{" "}
                  <strong>long-term durability</strong>.
                </p>
              </section>

              {/* Technical Images */}
              <section className="pt-4">
                <h2
                  className="text-[1.875rem] font-semibold mb-6"
                  style={{ color: "black" }}
                >
                  Technical Images
                </h2>
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

                  <div className="flex justify-center gap-2 mt-4">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          current === index
                            ? "w-8 bg-[#333333]"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* System Features & Technical Highlights */}
              <section className="pt-4">
                <h2
                  className="text-[1.875rem] font-semibold mb-6"
                  style={{ color: "black" }}
                >
                  System Features & Technical Highlights – R-Fence
                </h2>
                <div className="space-y-6">
                  <div className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <h3
                      className="text-[1.25rem] font-semibold mb-3"
                      style={{ color: "black" }}
                    >
                      Adjustable Angles
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-[1rem]" style={{ color: "#565656" }}>
                      <li>Adjustable between <strong>60° and 180°</strong></li>
                      <li>
                        <strong>Same profile</strong> used for all angles
                      </li>
                      <li>
                        Profile, plastic and lamella lengths are{" "}
                        <strong>not affected</strong> by angled applications
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <h3
                      className="text-[1.25rem] font-semibold mb-3"
                      style={{ color: "black" }}
                    >
                      Panel Gaps & Spacing
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-[1rem]" style={{ color: "#565656" }}>
                      <li>
                        Left and right <strong>plastic spacer options</strong>{" "}
                        between panels
                      </li>
                      <li>
                        <strong>1, 2, or 3</strong> spacer configurations
                        available between panels
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <h3
                      className="text-[1.25rem] font-semibold mb-3"
                      style={{ color: "black" }}
                    >
                      Structural Limits
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-[1rem]" style={{ color: "#565656" }}>
                      <li>
                        <strong>Maximum Height:</strong> 200 cm
                      </li>
                      <li>
                        <strong>Maximum Lamella Width:</strong> 200 cm
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <h3
                      className="text-[1.25rem] font-semibold mb-3"
                      style={{ color: "black" }}
                    >
                      Anchorage Requirements
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-[1rem]" style={{ color: "#565656" }}>
                      <li>Up to <strong>120 cm</strong> height: no anchorage required</li>
                      <li>
                        <strong>120–160 cm</strong> height:{" "}
                        <strong>20 cm</strong> anchorage required
                      </li>
                      <li>
                        <strong>160–200 cm</strong> height:{" "}
                        <strong>40 cm</strong> anchorage required
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Documents */}
              <section id="technical-documents" className="pt-4">
                <h2
                  className="text-[1.875rem] font-semibold mb-6"
                  style={{ color: "black" }}
                >
                  Technical Documents
                </h2>
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
                        <FileText
                          className="h-6 w-6"
                          style={{ color: "#998675" }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[1rem] font-semibold text-gray-900 truncate">
                          {pdf.label}
                        </p>
                        <p className="text-[0.875rem] text-gray-500">
                          PDF Document
                        </p>
                      </div>
                      <Download
                        className="h-5 w-5 transition-colors flex-shrink-0"
                        style={{ color: "#998675" }}
                      />
                    </a>
                  ))}
                </div>
              </section>

              {/* Frequently Asked Questions */}
              <section className="pt-4">
                <div className="space-y-12">
                  <h2
                    className="text-[1.875rem] font-semibold mb-8"
                    style={{ color: "black" }}
                  >
                    Frequently Asked Questions – R-Fence
                  </h2>

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
                        <AccordionTrigger
                          className="cursor-pointer text-[1rem] hover:no-underline"
                          style={{ color: "black" }}
                        >
                          What makes the R-Fence System different from standard
                          fence systems?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p
                            className="text-[1rem] leading-relaxed"
                            style={{ color: "#565656" }}
                          >
                            <strong>R-Fence</strong> offers{" "}
                            <strong>adjustable angles from 60° to 180°</strong>{" "}
                            using a <strong>single profile</strong>, allowing{" "}
                            <strong>flexible layouts</strong> without changing
                            system components.
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
                        <AccordionTrigger
                          className="cursor-pointer text-[1rem] hover:no-underline"
                          style={{ color: "black" }}
                        >
                          Where can the R-Fence System be used?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p
                            className="text-[1rem] leading-relaxed"
                            style={{ color: "#565656" }}
                          >
                            <strong>R-Fence</strong> is suitable for{" "}
                            <strong>residential boundaries</strong>,{" "}
                            <strong>commercial properties</strong>,{" "}
                            <strong>gardens</strong>, <strong>terraces</strong>,
                            and other <strong>perimeter applications</strong>{" "}
                            requiring <strong>controlled access</strong> and{" "}
                            <strong>visibility</strong>.
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
                        <AccordionTrigger
                          className="cursor-pointer text-[1rem] hover:no-underline"
                          style={{ color: "black" }}
                        >
                          Can panel spacing be adjusted?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p
                            className="text-[1rem] leading-relaxed"
                            style={{ color: "#565656" }}
                          >
                            Yes. The system allows{" "}
                            <strong>1, 2, or 3 plastic spacer options</strong>{" "}
                            between panels, providing flexibility in{" "}
                            <strong>spacing</strong> and{" "}
                            <strong>visual density</strong>.
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
                        <AccordionTrigger
                          className="cursor-pointer text-[1rem] hover:no-underline"
                          style={{ color: "black" }}
                        >
                          Do angled applications affect profile or panel
                          lengths?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p
                            className="text-[1rem] leading-relaxed"
                            style={{ color: "#565656" }}
                          >
                            No. <strong>Profile</strong>,{" "}
                            <strong>plastic</strong>, and{" "}
                            <strong>lamella lengths</strong> remain{" "}
                            <strong>unchanged</strong> regardless of angle
                            adjustments.
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
                        <AccordionTrigger
                          className="cursor-pointer text-[1rem] hover:no-underline"
                          style={{ color: "black" }}
                        >
                          When is anchorage required for the R-Fence System?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p
                            className="text-[1rem] leading-relaxed"
                            style={{ color: "#565656" }}
                          >
                            Anchorage requirements depend on system height,
                            ranging from <strong>no anchorage</strong> up to{" "}
                            <strong>120 cm</strong> to{" "}
                            <strong>40 cm anchorage</strong> for heights between{" "}
                            <strong>160–200 cm</strong>.
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
                <div
                  className="relative overflow-hidden rounded-2xl p-12 border border-gray-200 shadow-lg"
                  style={{ backgroundColor: "#998675" }}
                >
                  <div className="relative z-10">
                    <h2 className="text-[1.875rem] font-semibold mb-4 text-white">
                      Design Boundaries Without Limits
                    </h2>
                    <p className="text-[1rem] leading-relaxed mb-8 text-white/95 max-w-2xl">
                      Choose <strong>R-Fence System</strong> for{" "}
                      <strong>flexible layouts</strong>,{" "}
                      <strong>adjustable angles</strong> and{" "}
                      <strong>consistent architectural design</strong> across
                      your perimeter applications.
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
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                    <div
                      className="absolute inset-0 border-2 border-white rounded-full"
                      style={{ transform: "translate(30%, -30%)" }}
                    ></div>
                    <div
                      className="absolute inset-0 border-2 border-white rounded-full"
                      style={{ transform: "translate(40%, -20%) scale(0.7)" }}
                    ></div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-4" id="request-information-form">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl border border-gray-200 p-8 bg-white shadow-sm">
                  <h2
                    className="text-[1.875rem] font-semibold mb-6"
                    style={{ color: "black" }}
                  >
                    Request Information
                  </h2>
                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <label
                        className="text-[0.875rem] font-medium"
                        htmlFor="name"
                        style={{ color: "black" }}
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-[0.875rem] font-medium"
                        htmlFor="email"
                        style={{ color: "black" }}
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-[0.875rem] font-medium"
                        htmlFor="phone"
                        style={{ color: "black" }}
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-[0.875rem] font-medium"
                        htmlFor="company"
                        style={{ color: "black" }}
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-[0.875rem] font-medium"
                        htmlFor="message"
                        style={{ color: "black" }}
                      >
                        Message *
                      </label>
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
                      {formStatus === "sending"
                        ? "Sending..."
                        : formStatus === "sent"
                        ? "Sent ✓"
                        : "Send Message"}
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
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            aria-label="Previous"
            className="absolute left-4 md:left-8 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all duration-200 z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image with smooth transition */}
          <div
            className="max-h-[90vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`max-h-[90vh] max-w-[90vw] transition-opacity duration-300 ease-in-out ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
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
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
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
      <main className="flex-1">{content}</main>
      <Footer locale="en" />
      <StickyContactButtons />

      {/* Mobile Contact Button */}
      <button
        onClick={() => {
          const formElement = document.getElementById(
            "request-information-form",
          );
          if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 px-8 py-4 bg-[#998675] text-white font-semibold rounded-full shadow-lg hover:bg-[#7f6d5f] transition-all duration-200 hover:shadow-xl"
      >
        Contact
      </button>
    </div>
  );
}


