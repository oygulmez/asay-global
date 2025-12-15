import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asayglobal.com'),
  title: {
    default: 'Asay Global - Structural Solutions',
    template: '%s | Asay Global',
  },
  description: 'B2B partner for structural solutions: u‑PVC, aluminum, glass and steel systems',
  keywords: [
    'building materials',
    'structural solutions',
    'u-PVC systems',
    'aluminum architectural solutions',
    'architectural glass',
    'steel framings',
    'construction materials',
    'B2B building materials',
  ],
  authors: [{ name: 'Asay Global' }],
  creator: 'Asay Global',
  publisher: 'Asay Global',
  verification: {
    google: 'FTitQ0CgHd3gbzLKv3kboB4CI6TYVpEc3HHRvg6ObTQ',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.webp', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.webp', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Asay Global',
  },
  twitter: {
    card: 'summary_large_image',
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


