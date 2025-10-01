import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Asay Global - Structural Solutions',
  description: 'B2B partner for structural solutions: u‑PVC, aluminum, glass and steel systems',
  verification: {
    google: 'FTitQ0CgHd3gbzLKv3kboB4CI6TYVpEc3HHRvg6ObTQ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  )
}


