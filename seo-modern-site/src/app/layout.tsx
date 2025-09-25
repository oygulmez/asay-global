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
    default: "Asay Global | Architectural & Engineering Solutions",
    template: "%s | Asay Global",
  },
  description:
    "Premium architectural solutions: steel framings, aluminum systems, architectural glass and decorative products. 22+ years, 38 countries.",
  applicationName: "Asay Global Website",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Asay Global",
    title: "Asay Global | Architectural & Engineering Solutions",
    description:
      "Premium architectural solutions: steel framings, aluminum systems, architectural glass and decorative products.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Asay Global" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asay Global | Architectural & Engineering Solutions",
    description:
      "Premium architectural solutions: steel framings, aluminum systems, architectural glass and decorative products.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
