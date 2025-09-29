import type { Metadata } from 'next'
import './globals.css'

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
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}


