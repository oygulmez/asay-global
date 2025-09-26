import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "Legend Plus PVC Door System",
  description: "Premium PVC sliding system with 76 mm width and 5‑chamber sash delivering superior sealing, easy operation and up to 52 mm glazing.",
};

export default function LegendSurmePlusPage() {
  return (
    <>
      <PageHeader
        title="Legend Plus PVC Door System"
        description="Premium sliding performance engineered for comfort, sealing and durability."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "u-PVC Sliding Systems", href: "/services/u-pvc-systems/sliding-systems" },
          { label: "Legend Plus PVC Door System" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video className="w-full h-auto aspect-video object-center" src="/video/legend-surme-plus.mp4" autoPlay loop muted playsInline />
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>General Features</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#565656" }}>
                The Deceuninck Legend Sliding Plus Window & Door System delivers superior acoustic and air insulation,
                providing strong protection against cold in winter and heat in summer. Its standout qualities are the
                elegant design and effortless operation that enhance everyday comfort. With <strong>76&nbsp;mm system width</strong>
                and a <strong>5‑chamber sash</strong>, Legend Plus PVC Door System offers high performance, powerful isolation and
                exceptionally easy use. Compared to typical sliding systems, it targets significantly better air tightness
                and supports glazing up to <strong>52&nbsp;mm</strong>. Design registration applications have been filed with the
                Turkish Patent and Trademark Office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div><span className="font-medium" style={{ color: "black" }}>System Width:</span> 76 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Sash Chambers:</span> 5</div>
                <div><span className="font-medium" style={{ color: "black" }}>Gaskets:</span> TPE Grey / Black</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glazing Bead:</span> Single‑lip with PCE gasket</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> 24, 30, 36, 44, 52 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Opening Options:</span> Fixed‑mullion sliding, double‑sash configurations</div>
                <div><span className="font-medium" style={{ color: "black" }}>Standard:</span> TS EN 12608‑1, Class B</div>
                <div><span className="font-medium" style={{ color: "black" }}>Thermal Transmittance (Uf):</span> 1.4 W/m²·K</div>
              </div>
            </section>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 pt-0 pb-10">
        <CallToAction />
      </div>
    </>
  );
}


