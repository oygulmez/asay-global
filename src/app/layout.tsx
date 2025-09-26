import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://www.example.com'),
  title: {
    default: "Asay Global | Structural Solutions",
    template: "%s | Asay Global"
  },
  description: "Asay Global | Structural Solutions — B2B building materials and façade systems engineered for performance and reliability.",
  applicationName: "Asay Global",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Asay Global",
    title: "Asay Global | Structural Solutions",
    description: "B2B building materials and façade systems engineered for performance and reliability.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Asay Global" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asay Global | Structural Solutions",
    description: "B2B building materials and façade systems engineered for performance and reliability.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/asayglobal-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/asayglobal-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
