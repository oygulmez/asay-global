import { PageHeader } from "@/components/page-header";
import { ThermometerSnowflake, Ruler, Volume2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";

export const metadata = {
  title: "Slimslide",
  description: "Slim‑frame u‑PVC sliding system with near‑half center mullion width, zero‑threshold option and barrier‑free views and passage.",
};

export default function SlimslidePage() {
  return (
    <>
      <PageHeader
        title="Slimslide"
        description="Minimal sightlines with smooth sliding, sealing and comfort."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "u-PVC Sliding Systems", href: "/services/u-pvc-systems/sliding-systems" },
          { label: "Slimslide" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative overflow-hidden rounded-2xl border p-2 bg-white ring-1 ring-gray-200">
            <div className="relative overflow-hidden rounded-xl">
              <video className="w-full h-auto aspect-video object-center" src="/video/slimslide-sliding-system.mp4" autoPlay loop muted playsInline />
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>General Features</h2>
              <div className="text-sm space-y-3" style={{ color: "#565656" }}>
                <p>
                  Axial sliding applications are highly preferred by end users thanks to the space gains they create indoors. With
                  SLIMSLIDE’s design refinements, these advantages are further enhanced.
                </p>
                <p>
                  Developed in line with contemporary architectural trends, SLIMSLIDE aims to <strong>increase daylight</strong> in sliding windows
                  and doors by <strong>narrowing the center PVC profile</strong>. Compared to conventional sliding joinery, the center mullion
                  width is reduced by almost half.
                </p>
                <p>
                  To solve problems caused by thresholds in passage areas, the system introduces a <strong>zero‑threshold sliding frame</strong>
                  option, delivering great convenience in living spaces. Thanks to its threshold‑free design and slim central structure,
                  SLIMSLIDE enables <strong>barrier‑free passage and unobstructed views</strong>.
                </p>
                <p>
                  Insulation details for the zero‑threshold configuration have also been carefully considered and engineered. Highly
                  functional and easy to use, the system provides significant advantages in daily life, while its distinctive design and
                  diverse color alternatives enrich interior aesthetics.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" style={{ color: "black" }}>Technical Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: "#565656" }}>
                <div><span className="font-medium" style={{ color: "black" }}>System Type:</span> Slim frame sliding</div>
                <div><span className="font-medium" style={{ color: "black" }}>Sealing:</span> Multi-gasket concept</div>
                <div><span className="font-medium" style={{ color: "black" }}>Glass Thickness:</span> Up to 44–52 mm</div>
                <div><span className="font-medium" style={{ color: "black" }}>Sightlines:</span> Reduced profile widths</div>
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

