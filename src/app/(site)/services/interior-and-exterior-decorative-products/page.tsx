import { PageHeader } from "@/components/page-header";
import CallToAction from "@/components/call-to-action";
import { ApplicationAreasGallery } from "@/components/image-gallery";


export default function InteriorExteriorDecorativeProductsPage() {
  return (
    <>
      <PageHeader
        title="Interior and Exterior Decorative Products"
        description="Transform spaces with premium decorative solutions that combine aesthetics with functionality"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Interior and Exterior Decorative Products" }
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Decorative Solutions Specialist</h2>
          <p className="text-base leading-relaxed" style={{ color: '#565656' }}>
          As <strong>Asay Real Global</strong>, we specialize in premium interior and exterior decorative products that enhance
            architectural beauty and functionality. Our comprehensive range includes wall panels, ceiling systems, facade cladding,
            and decorative elements designed to elevate any space. With a focus on innovation, quality, and aesthetic excellence,
            we provide solutions that meet diverse design requirements while ensuring durability and performance across residential,
            commercial, and institutional projects.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="my-12 border-t border-gray-200" />
        </div>

        {/* Decorative Solutions - Rich Media Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3" style={{ color: 'black' }}>Decorative Solutions</h2>
              <p className="text-base" style={{ color: '#565656' }}>Asay Global - Premier USA distributor of innovative decorative architectural products</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Interior Cladding - Wall Panels */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior and Exterior Decorative Products Wall Panels.jpg" alt="Wall Panels" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label="Interior Cladding" />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Wall Panels</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      Versatile interior and exterior wall panel systems combining modern aesthetics with superior performance and easy installation.
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      <li>• Quick installation, low maintenance</li>
                      <li>• Impact and moisture resistance</li>
                      <li>• Wide finish and texture options</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deck Profiles */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior and Exterior Decorative Products Deck Profiles.jpeg" alt="Deck Profiles" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label="Deck Profiles" />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Composite Decking</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      High-quality composite decking profiles providing slip-resistant surfaces with natural wood appearance and weather resistance.
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      <li>• UV and fade resistance</li>
                      <li>• Anti-slip surface, barefoot friendly</li>
                      <li>• Low water absorption</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exterior Cladding */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior and Exterior Decorative Products Exterior Cladding.jpg" alt="Exterior Cladding" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label="Exterior Cladding" />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Facade Systems</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      Weather-resistant facade cladding systems offering superior protection and contemporary design for building exteriors.
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      <li>• High durability in harsh climates</li>
                      <li>• Thermal and acoustic contribution</li>
                      <li>• Contemporary architectural aesthetics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Interior Cladding - Elegant */}
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <img src="/images/services/interior-exterior/Interior and Exterior Decorative Products Interior Cladding.jpg" alt="Interior Cladding" className="aspect-[3/4] w-full object-cover border border-gray-200" />
                  <div>
                    <BadgeLike label="Interior Cladding" />
                    <h3 className="text-xl font-semibold mt-3 mb-2" style={{ color: 'black' }}>Elegant Interior Cladding</h3>
                    <p className="text-sm mb-4" style={{ color: '#565656' }}>
                      Elegant interior cladding solutions providing warmth and sophistication to indoor spaces with easy maintenance.
                    </p>
                    <ul className="text-sm space-y-2" style={{ color: '#565656' }}>
                      <li>• Warm textures and natural look</li>
                      <li>• Stain-resistant, easy to clean</li>
                      <li>• Compatible with modern interiors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Product Advantages - Full Width (Why Choose Us style) */}
        <section className="py-20 md:py-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundColor: '#000000' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Decorative Product Advantages</h2>            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Design Versatility */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Design Versatility</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Unlimited design possibilities with our range of textures, colors, and patterns. Adapts to any architectural vision from minimal to classic.
                </p>
              </div>

              {/* Sound Proof */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4a1 1 0 001 1h3l4 3V6l-4 3H4a1 1 0 00-1 1zM16 10v4m3-6v8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Sound Proof</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Multi-chamber profiles and special sealing provide superior sound insulation, minimizing urban noise for quieter spaces.
                </p>
              </div>

              {/* Modern Design */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Modern Design</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Elegant profiles and slim frames maximize glass area while aligning with contemporary architectural aesthetics.
                </p>
              </div>

              {/* Long Lasting Durability */}
              <div className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Long Lasting Durability</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  UV-resistant materials withstand impact and weather, delivering 30+ years of performance with minimal maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Areas - Image Gallery with Lightbox & Infinite Strip */}
        <ApplicationAreasGallery images={[
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products Wall Panels.jpg", alt: "Wall Panels" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products Deck Profiles.jpeg", alt: "Deck Profiles" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products Exterior Cladding.jpg", alt: "Exterior Cladding" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products Interior Cladding.jpg", alt: "Interior Cladding" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery1.jpg", alt: "Application Area 1" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery2.jpg", alt: "Application Area 2" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery3.jpg", alt: "Application Area 3" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery4.jpg", alt: "Application Area 4" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery5.jpg", alt: "Application Area 5" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery6.jpg", alt: "Application Area 6" },
          { src: "/images/services/interior-exterior/Interior and Exterior Decorative Products - Gallery7.jpg", alt: "Application Area 7" },
        ]} />

        {/* CTA */}
        <CallToAction />
      </div>
    </>
  );
}

function BadgeLike({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
      {label}
    </span>
  );
}


