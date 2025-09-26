export const metadata = {
  title: "u-PVC Sliding Systems",
  description: "Discover u‑PVC sliding solutions such as Legend Plus, HS76 and Slimslide for smooth operation, sealing and wide openings.",
};

import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

export default function SlidingCategoryPage() {
  return (
    <>
      <PageHeader
        title="u-PVC Sliding Systems"
        description="Lift-and-slide and parallel sliding solutions engineered for smooth operation and sealing."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "u-PVC Systems", href: "/services/u-pvc-systems" },
          { label: "u-PVC Sliding Systems" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legend Plus PVC Door System card */}
            <Link href="/services/u-pvc-systems/legend-surme-plus" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label="Legend Plus PVC Door System">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/legend-plus-pvc.jpg" alt="Legend Plus PVC Door System" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>Legend Plus PVC Door System</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>High-performance sliding system with smooth operation and enhanced sealing.</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>View Product</span>
              </div>
            </Link>

            {/* PVC Sliding Door System card */}
            <Link href="/services/u-pvc-systems/pvc-sliding-door-system" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label="PVC Sliding Door System">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/sliding-pvc.jpg" alt="PVC Sliding Door System" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>PVC Sliding Door System</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>Smooth sliding door solution with robust sealing and durable design.</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>View Product</span>
              </div>
            </Link>

            {/* HS76 Sliding card */}
            <Link href="/services/u-pvc-systems/hs76-sliding" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label="HS76 Sliding">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/hs76-pvc.jpg" alt="HS76 Sliding" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>HS76 Sliding</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>Lift-and-slide configuration designed for wide spans and comfort.</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>View Product</span>
              </div>
            </Link>

            {/* Slimslide card */}
            <Link href="/services/u-pvc-systems/slimslide" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white" aria-label="Slimslide">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/services/upvc-systems/slimslide-pvc.jpg" alt="Slimslide" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>Slimslide</h3>
                <p className="text-sm mb-4" style={{ color: "#565656" }}>Slim frame sliding system with minimal sightlines and smooth operation.</p>
                <span className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: "#333333" }}>View Product</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


