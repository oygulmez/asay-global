import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Shield, Sun, Zap, Waves } from "lucide-react";

export const metadata = {
  title: "Architectural Glass Solutions",
  description: "Energy‑efficient and specialty glazing for façades, skylights and interiors—thermal, acoustic and safety performance for contemporary architecture.",
};

export default function ArchitecturalGlassSolutionsPage() {
  return (
    <>
      <PageHeader
        title="Architectural Glass Solutions"
        description="High-performance architectural glass systems: façades, skylights, canopies and interior glazing for modern buildings."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Architectural Glass Solutions" }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Architectural Glass Specialist </h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          As Asay Global, we specialize in cutting-edge architectural glass solutions that redefine modern building performance and aesthetics. Our comprehensive portfolio includes energy-efficient glazing systems, smart glass technologies, structural glazing, and specialized glass applications for facades, curtain walls, and interior partitions. With expertise in thermal performance, acoustic control, and sustainable design, we deliver innovative glass solutions that meet the highest standards of contemporary architecture while ensuring optimal comfort, safety, and energy efficiency.</p>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        

        {/* Glass Product Lines */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>Glass Technologies</h2>
              <p className="text-base" style={{ color: '#565656' }}>Asay Global - Leading USA distributor of advanced architectural glass solutions</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Insulating Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-Solutions-Insulating-Glass.png" alt="Insulating Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Insulating Glass</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Insulating Glass</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Advanced double or triple-pane glass systems with sealed spaces filled with dry air or inert gases. Delivers excellent thermal insulation, condensation control and energy efficiency for modern buildings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Colorless Flat Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-Solutions-Colorless-Flat-Glass.png" alt="Colorless Flat Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Float Glass</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Colorless Flat Glass</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Premium float glass with exceptional optical clarity and uniform thickness; the foundation for all architectural glazing with perfect transparency and light transmission.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tentesol Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-SolutionsTentesol-Glass.png" alt="Tentesol Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Solar Control</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Tentesol Glass</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      High-performance solar control glass with reflective coatings. Reduces solar heat gain by up to 60% while maintaining excellent natural light, ensuring comfortable interiors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Painted Glass */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/glass-solutions/Architectural-Glass-Solutions-Painted-Glass.png" alt="Painted Glass" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Decorative</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Painted Glass</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Ceramic-painted architectural glass available in unlimited colors. Ideal for spandrels, partitions and façade elements requiring aesthetics and functionality.
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
              <h2 className="text-3xl font-bold mb-4 text-white">Glass System Advantages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Energy Efficiency */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Energy Efficiency</h3>
                <p className="text-white/70 text-sm leading-relaxed">Advanced low‑E coatings and triple‑glazing reduce heat transfer by up to 70%, improving building energy performance.</p>
              </div>

              {/* Solar Control */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Solar Control</h3>
                <p className="text-white/70 text-sm leading-relaxed">Selective solar coatings allow natural light while blocking UV and excess heat gain to maintain comfort and protect furnishings.</p>
              </div>

              {/* Acoustic Performance */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Acoustic Performance</h3>
                <p className="text-white/70 text-sm leading-relaxed">Laminated and asymmetric glass configurations provide up to 50dB noise reduction for peaceful interiors.</p>
              </div>

              {/* Safety & Security */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Safety & Security</h3>
                <p className="text-white/70 text-sm leading-relaxed">Tempered and laminated safety glass meets strict codes and provides impact‑resistant protection against weather and security threats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/glass-solutions/architectural-glass-gallery-1.jpg", alt: "Glass Gallery 1" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-2.jpeg", alt: "Glass Gallery 2" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-3.jpg", alt: "Glass Gallery 3" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-4.jpg", alt: "Glass Gallery 4" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-5.avif", alt: "Glass Gallery 5" },
          { src: "/images/services/glass-solutions/architectural-glass-gallery-6.webp", alt: "Glass Gallery 6" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-Insulating-Glass.png", alt: "Insulating Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-Colorless-Flat-Glass.png", alt: "Colorless Flat Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-SolutionsTentesol-Glass.png", alt: "Tentesol Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-Painted-Glass.png", alt: "Painted Glass" },
          { src: "/images/services/glass-solutions/Architectural-Glass-Solutions-img--1.jpg", alt: "Architectural Glass" },
        ]} />

        {/* CTA */}
        <CallToAction />
      </div>
    </>
  );
}


