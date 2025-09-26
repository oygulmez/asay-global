import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "u-PVC Window & Door Systems",
  description: "Explore u‑PVC window & door product families including Legend, Legend Art and Zendow with high insulation and durable performance.",
};

export default function WindowDoorCategoryPage() {
  return (
    <>
      <PageHeader
        title="u-PVC Window & Door Systems"
        description="Browse u-PVC window and door products engineered for insulation, durability and sealing performance."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "u-PVC Systems", href: "/services/u-pvc-systems" },
          { label: "u-PVC Window & Door Systems" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product card: Legend */}
        <Link href="/services/u-pvc-systems/legend-window-and-door-system" aria-label="Legend u-PVC Window and Door System" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/upvc-systems/legend-thmb.jpg"
              alt="Legend u-PVC Window and Door System thumbnail"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>Legend u-PVC Window and Door System</h3>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              High insulation, robust static performance and broad glazing options.
            </p>
            <span
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#333333" }}
            >
              View Product
            </span>
          </div>
        </Link>

        {/* Product card: Legend Art */}
        <Link href="/services/u-pvc-systems/legend-art" aria-label="Legend Art u-PVC Window and Door System" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/upvc-systems/legend-thmb.jpg"
              alt="Legend Art u-PVC Window and Door System thumbnail"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>Legend Art u-PVC Window and Door System</h3>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              Designer finishes with the same performance foundations for coherent façades.
            </p>
            <span
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#333333" }}
            >
              View Product
            </span>
          </div>
        </Link>
        
        {/* Product card: Zendow */}
        <Link href="/services/u-pvc-systems/zendow" aria-label="Zendow u-PVC Window and Door System" className="group block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/services/upvc-systems/zendow-thmb.jpg"
              alt="Zendow u-PVC Window and Door System thumbnail"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>Zendow u-PVC Window and Door System</h3>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              Balanced insulation and structural performance with refined aesthetics.
            </p>
            <span
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#333333" }}
            >
              View Product
            </span>
          </div>
        </Link>
      </div>
      </div>
      </div>
    </>
  );
}


