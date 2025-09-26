import { PageHeader } from "@/components/page-header";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "HS76 Sliding",
  description: "Lift‑and‑slide u‑PVC system with low aluminum threshold for wheelchair access, Class A profiles and Uf 1.2 W/m²·K thermal performance.",
};

export default function HS76SlidingPage() {
  return (
    <>
      <PageHeader
        title="HS76 Sliding"
        description="High-performance lift-and-slide profiles with sealing and comfort."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "u-PVC Sliding Systems", href: "/services/u-pvc-systems/sliding-systems" },
          { label: "HS76 Sliding" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video className="w-full h-auto aspect-video object-center" src="/video/hs76-sliding-system.mp4" autoPlay loop muted playsInline />
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>General Features</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#565656" }}>
                The HS76 system features a specially designed <strong>low aluminum threshold</strong> that minimizes profile height on the floor,
                creating a more elegant appearance while ensuring functional integrity. With this new application, Egepen Deceuninck provides
                a threshold design that enables wheelchair access on passage doors in accordance with Turkish Standards Institute guidance.
                The visually reduced threshold height also delivers <strong>better thermal insulation results</strong> in thermal analyses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div><span className="font-medium" style={{ color: "black" }}>Frame Width:</span> 175 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Sash Width:</span> 76 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Chambers:</span> 8 (frame), 4 (sash)</div>
                <div><span className="font-medium" style={{ color: "black" }}>Gaskets:</span> TPE Grey / Black</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glazing Bead:</span> Single‑lip</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> 4, 20, 24, 30, 36, 43 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Standard:</span> TS EN 12608‑1, Class A</div>
                <div><span className="font-medium" style={{ color: "black" }}>Thermal Transmittance (Uf):</span> 1.2 W/m²·K</div>
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

