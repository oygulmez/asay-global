import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Cpu, Globe2, Shield, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function SteelFramingsPage() {
  return (
    <>
      <PageHeader
        title="Steel Framings"
        description="High-performance steel framing systems engineered for strength, longevity, and modern architecture."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Steel Framings" }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Steel Engineering Excellence</h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          Asay Real Global brings over 22 years of expertise in steel engineering and steel structures, serving 38 countries across 5 continents with thousands of successful projects. We specialize in designing and manufacturing premium steel systems for contemporary construction including structural steel, steel frameworks, industrial buildings, and custom steel fabrication. With superior strength, durability, and design flexibility, our steel solutions deliver exceptional performance while meeting the highest engineering standards for modern construction projects.


          </p>
        </div>

        {/* Brands Logos - Static 3 logos */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'black' }}>Engineered to Global Standards</h3>
            <div className="flex items-center justify-center gap-16 flex-wrap">
              <img src="/images/brands-logo/AISC-logo-500px.png" alt="AISC" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/ASTM-logo-500px.png" alt="ASTM International" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/icc-logo-500px.jpg" alt="ICC" className="h-16 md:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        {/* Solutions & Advantages */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>Solutions & Advantages</h2>
              <p className="text-base" style={{ color: '#565656' }}>High-performance steel systems tailored to modern construction needs.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Structural Steel */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/Steel Framings - Structural Steel.jpg" alt="Structural Steel" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Structural Steel</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Structural Steel</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Asay Global delivers comprehensive structural steel solutions as the leading provider. Our engineering expertise ensures superior load-bearing capacity, seismic resistance, and long-term durability for critical construction projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steel Frameworks */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/Steel Framings - Steel Frameworks.jpg" alt="Steel Frameworks" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Steel Frameworks</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Steel Frameworks</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Robust, flexible structural systems with rapid construction and cost efficiency. Custom-designed frameworks adapt to diverse architectural requirements and building types.
                    </p>
                  </div>
                </div>
              </div>

              {/* Industrial Buildings */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/Steel Framings -Industrial-Buildings.jpg" alt="Industrial Buildings" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Industrial Buildings</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Industrial Buildings</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Specialized steel structures for warehouses, factories, and manufacturing facilities. Maximize clear spans, optimize functionality, and ensure compliance with industrial safety standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Fabrication */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/steel-structure/Steel Framings - Custom Fabrication.jpg" alt="Custom Fabrication" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Custom Fabrication</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Custom Fabrication</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Advanced steel fabrication using precision machinery and cutting-edge technology. Components manufactured to exact specifications for unique architectural and engineering challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steel Bridges */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img src="/images/services/steel-structure/Steel Framings - Steel Bridges.webp" alt="Custom Fabrication" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Steel Bridges</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Steel Bridges</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Engineering excellence combining structural integrity with aesthetics. Solutions for pedestrian walkways to major transportation infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#000000' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Steel Engineering Advantages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advanced Technology */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Advanced Technology</h3>
                <p className="text-white/70 text-sm leading-relaxed">Using the latest technological machines and design programs with fully automatic computer-controlled advanced construction technologies for precision steel fabrication and engineering excellence.</p>
              </div>

              {/* Global Experience */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Global Experience</h3>
                <p className="text-white/70 text-sm leading-relaxed">Serving 38 countries across 5 continents with over 22 years of international experience. 100+ completed projects across Europe, Asia, Central America, the UK and North America.</p>
              </div>

              {/* Superior Strength */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Superior Strength</h3>
                <p className="text-white/70 text-sm leading-relaxed">Exceptional load-bearing capacity and structural integrity. High‑grade steel alloys ensure maximum strength and durability for demanding environments.</p>
              </div>

              {/* Professional Team */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Professional Team</h3>
                <p className="text-white/70 text-sm leading-relaxed">Professional, experienced and dynamic staff delivering fast and reliable solutions with decades of global expertise and industry‑certified processes.</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Application Areas - Steel Structure Gallery */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/steel-structure/Steel Framings - Structural Steel.jpg", alt: "Structural Steel" },
          { src: "/images/services/steel-structure/Steel Framings - Steel Frameworks.jpg", alt: "Steel Frameworks" },
          { src: "/images/services/steel-structure/Steel Framings -Industrial-Buildings.jpg", alt: "Industrial Buildings" },
          { src: "/images/services/steel-structure/Steel Framings - Custom Fabrication.jpg", alt: "Custom Fabrication" },
          { src: "/images/services/steel-structure/Steel Framings - Steel Bridges.webp", alt: "Steel Bridges" },
          { src: "/images/services/steel-structure/steel-framings-img-1.jpg", alt: "Steel Framings 1" },
          { src: "/images/services/steel-structure/Steel-framings-img-2.JPG", alt: "Steel Framings 2" },
          { src: "/images/services/steel-structure/Steel-framings-img-3.jpg", alt: "Steel Framings 3" },
          { src: "/images/services/steel-structure/Steel-framings-img-4.jpg", alt: "Steel Framings 4" },
          { src: "/images/services/steel-structure/Steel-framings-img-5.jpg", alt: "Steel Framings 5" },
          { src: "/images/services/steel-structure/Steel-framings-img-6.jpg", alt: "Steel Framings 6" },
          { src: "/images/services/steel-structure/Steel-framings-img-7.JPG", alt: "Steel Framings 7" },
          { src: "/images/services/steel-structure/Steel-framings-img-8.JPG", alt: "Steel Framings 8" },
        ]} />

        {/* CTA */}
        <CallToAction />
      </div>
    </>
  );
}


