import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";
import { Shield, Droplets, PenTool, Recycle } from "lucide-react";

export const metadata = {
  title: "Aluminum Architectural Solutions",
  description: "High‑performance aluminum systems for façades, windows, doors and curtain walls—strength, corrosion resistance and design flexibility for modern projects.",
};

export default function AluminumArchitecturalSolutionsPage() {
  return (
    <>
      <PageHeader
        title="Aluminum Architectural Solutions"
        description="High-performance aluminum systems engineered for modern facades, windows, doors and curtain walls."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Aluminum Architectural Solutions" }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Aluminum Engineering Excellence</h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          As a leading provider of aluminum architectural solutions, we specialize in designing and manufacturing premium aluminum systems for contemporary buildings. Our comprehensive range includes curtain walls, window systems, doors, and structural glazing solutions. With superior strength-to-weight ratio, corrosion resistance, and design flexibility, our aluminum products deliver exceptional performance while meeting the highest aesthetic standards for modern architectural projects.</p>
        </div>

        {/* Brands Logos - Static 3 logos (same position as Steel Framings) */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'black' }}>Aluminum Architectural Solutions Partners</h3>
            <div className="flex items-center justify-center gap-16 flex-wrap">
              <img src="/images/brands-logo/reynaers.svg" alt="AISC" className="h-16 md:h-20 lg:h-13 w-auto object-contain grayscale hover:grayscale-0 transition" />
              <img src="/images/brands-logo/alumil-logo.svg" alt="ASTM International" className="h-16 md:h-20 lg:h-13 w-auto object-contain grayscale hover:grayscale-0 transition" />            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        {/* Aluminum Solutions - Product cards */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>Aluminum Solutions</h2>
              <p className="text-base" style={{ color: '#565656' }}>Asay Global - Leading USA distributor of premium aluminum architectural systems</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Windows */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-conservatories-.jpg" alt="Conservatories" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Windows</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Windows</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Asay Global delivers versatile aluminium windows as the USA's leading distributor. Our optimal functionality meets excellent design, safety and energy efficiency in these trustworthy systems trusted across America.
                    </p>
                  </div>
                </div>
              </div>

              {/* Doors */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-doors.jpg" alt="Doors" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Doors</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Doors</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Asay Global's aluminium doors are robust, highly secure and fully customisable. As the premier USA distributor, we create high-quality entrances with unlimited design freedom for your projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sliding & Folding */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-sliding-folding.jpg" alt="Sliding & Folding" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Sliding & Folding</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Sliding & Folding</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Asay Global's sliding doors improve design and accessibility across the USA. Large glazed surfaces bring sunlight inside with motorised variants and integrated flyscreens for enhanced comfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conservatories */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-conservatories-.jpg" alt="Conservatories" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Conservatories</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Conservatories</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Asay Global offers conservatories from non-insulated to highly insulated glazed structures across the USA. Compatible with our windows and doors, they're perfect living space extensions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Façades */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/aluminum-solutions/aluminum-architectural-systems-facade-system.jpg" alt="Façades" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">Façades</span>
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Façades</h3>
                    <p className="text-sm" style={{ color: '#565656' }}>
                      Asay Global provides façade solutions for all USA building needs. Our stick façades, unitised façades and window walls deliver perfect high-quality fits as America's trusted distributor.
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
              <h2 className="text-3xl font-bold mb-4 text-white">Aluminum System Advangates</h2>            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Structural Strength */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Structural Strength</h3>
                <p className="text-white/70 text-sm leading-relaxed">Exceptional strength-to-weight ratio provides superior load-bearing capacity. High‑grade aluminum alloys ensure integrity while remaining lightweight for efficient installation and reduced building loads.</p>
              </div>

              {/* Corrosion Resistance */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Corrosion Resistance</h3>
                <p className="text-white/70 text-sm leading-relaxed">Advanced anodizing and powder coating provide outstanding protection against corrosion and weathering. Long‑lasting performance in coastal and industrial environments with minimal maintenance.</p>
              </div>

              {/* Design Flexibility */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Design Flexibility</h3>
                <p className="text-white/70 text-sm leading-relaxed">Unlimited architectural possibilities with custom extrusion capabilities. Complex shapes, curves and unique profiles manufactured to meet specific design requirements.</p>
              </div>

              {/* Eco-Friendly */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Eco-Friendly</h3>
                <p className="text-white/70 text-sm leading-relaxed">100% recyclable material with infinite reusability. Energy‑efficient manufacturing and contributions to green building certifications make aluminum a responsible choice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-windows.webp", alt: "Windows" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-doors.jpg", alt: "Doors" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-sliding-folding.jpg", alt: "Sliding & Folding" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-conservatories-.jpg", alt: "Conservatories" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-facade-system.jpg", alt: "Façade System" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-1.png", alt: "Gallery 1" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-2.png", alt: "Gallery 2" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-3.png", alt: "Gallery 3" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-4.png", alt: "Gallery 4" },
          { src: "/images/services/aluminum-solutions/aluminum-architectural-systems-gallery-5.png", alt: "Gallery 5" },
          { src: "/images/services/aluminum-solutions/Aluminum-Architectural-Solutions-img--1.jpg", alt: "Aluminum Solutions" },
        ]} />

        {/* CTA */}
        <CallToAction />
      </div>
    </>
  );
}


