import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StickyContactButtons } from '@/components/sticky-contact-buttons'

export const metadata: Metadata = {
  title: 'Asay Global - Structural Solutions',
  description: 'B2B partner for structural solutions: u‑PVC, aluminum, glass and steel systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar locale="en" />
          <main className="flex-1">
            {children}
          </main>
          <Footer locale="en" />
          <StickyContactButtons />
        </div>
      </body>
    </html>
  )
}


