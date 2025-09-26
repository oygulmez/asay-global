import { PageHeader } from "@/components/page-header";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "PVC Sliding Door System",
  description: "PVC sliding window & door system with configurable tracks, TPE gaskets and PCE glazing beads; compatible with Legend Art and Zendow profiles.",
};

export default function PVCSlidingDoorSystemPage() {
  return (
    <>
      <PageHeader
        title="PVC Sliding Door System"
        description="Premium sliding performance engineered for comfort, sealing and durability."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "u-PVC Sliding Systems", href: "/services/u-pvc-systems/sliding-systems" },
          { label: "PVC Sliding Door System" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video className="w-full h-auto aspect-video object-center" src="/video/surme-sliding-system.mp4" autoPlay loop muted playsInline />
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>General Features</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#565656" }}>
                The PVC Sliding Window & Door System is engineered with numerous profiles and auxiliaries that prioritize insulation. By
                integrating TPE gaskets into cover and joint profiles at connection points, overall sealing performance is improved. The
                system offers multiple configuration options including sliding frame, architrave sliding frame, sliding frame with insect
                screen, three‑track frame, fixed sliding frame and fixed architrave sliding frame. Depending on the window/door detail,
                two different <strong>3‑chamber sliding sash</strong> profiles are available. Using auxiliary profiles, the system can be combined
                with <strong>Legend Art</strong> and <strong>Zendow</strong> systems. Aluminum cover and joint profiles further increase wind resistance,
                enabling larger dimensions. In double‑sash or fixed sliding applications, fixed sections can be formed at bottom, top and
                side areas. All profiles comply with <strong>TS 5358 EN 12608</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div><span className="font-medium" style={{ color: "black" }}>Gaskets:</span> TPE Grey / Black</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glazing Bead:</span> Single‑lip with PCE gasket</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> 4, 20, 24, 28 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Opening Options:</span> Single‑track, double‑track, three‑track frames; insect‑screen and architrave frames</div>
                <div><span className="font-medium" style={{ color: "black" }}>Standard:</span> TS EN 12608‑1, Class B</div>
                <div><span className="font-medium" style={{ color: "black" }}>Thermal Transmittance (Uf):</span> 2.0 W/m²·K</div>
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

