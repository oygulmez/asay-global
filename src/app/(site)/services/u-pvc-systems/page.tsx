import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "u-PVC Systems",
  description: "u‑PVC product families covering window, door and sliding systems engineered for durability, energy efficiency and low maintenance.",
};

export default function UPVCSystemsPage() {
  return (
    <>
      <PageHeader
        title="u-PVC Systems"
        description="Engineered for durability, energy efficiency and low maintenance."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "u-PVC Systems" }]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* u-PVC Window & Door Systems */}
          <section className="bg-white border border-gray-200">
            <Link href="/services/u-pvc-systems/window-door-systems" aria-label="u-PVC Window & Door Systems">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/services/upvc-systems/pvc-window-and-door-system.jpg"
                  alt="u-PVC Window & Door Systems"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover bg-white transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="p-5 md:p-6">
            <Link href="/services/u-pvc-systems/window-door-systems" aria-label="u-PVC Window & Door Systems" className="block">
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>u-PVC Window & Door Systems</h2>
            </Link>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              Premium u-PVC window and door systems offering excellent thermal insulation, sound reduction and long-term durability. Compatible with multi-point locking, various glazing options and modern profiles.
            </p>
            <ul className="text-sm space-y-2" style={{ color: "#565656" }}>
              <li>• High energy efficiency (multi-chamber profiles)</li>
              <li>• Weather and UV resistance, low maintenance</li>
              <li>• Wide range of colors, laminates and accessories</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/services/u-pvc-systems/window-door-systems"
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#333333" }}
              >
                View Products
              </Link>
            </div>
            </div>
          </section>

          {/* u-PVC Sliding Systems */}
          <section className="bg-white border border-gray-200">
            <Link href="/services/u-pvc-systems/sliding-systems" aria-label="u-PVC Sliding Systems">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/services/upvc-systems/pvc-sliding-systems-1.jpg"
                  alt="u-PVC Sliding Systems"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover bg-white transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="p-5 md:p-6">
            <Link href="/services/u-pvc-systems/sliding-systems" aria-label="u-PVC Sliding Systems" className="block">
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>u-PVC Sliding Systems</h2>
            </Link>
            <p className="text-sm mb-4" style={{ color: "#565656" }}>
              Smooth, space-saving sliding solutions designed for wide openings. Enhanced sealing options, reinforced frames and excellent operating comfort for residential and commercial applications.
            </p>
            <ul className="text-sm space-y-2" style={{ color: "#565656" }}>
              <li>• Lift-and-slide and parallel sliding configurations</li>
              <li>• High static performance with reinforced profiles</li>
              <li>• Large glazing surfaces for maximum daylight</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/services/u-pvc-systems/sliding-systems"
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#333333" }}
              >
                View Products
              </Link>
            </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    </>
  );
}


