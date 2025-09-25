import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactButtons } from "@/components/sticky-contact-buttons";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyContactButtons />
    </div>
  )
}


