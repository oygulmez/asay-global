export const revalidate = 60

import { HeroSectionOne } from "@/components/hero-section-1";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-0 md:px-4 py-0">
        <HeroSectionOne />
      </section>
    </main>
  )
}


