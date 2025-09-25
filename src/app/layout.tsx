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
    default: "Modern UI Kurumsal Web Sitesi",
    template: "%s | Modern UI"
  },
  description: "Hızlı, erişilebilir ve SEO uyumlu modern kurumsal web sitesi.",
  applicationName: "Modern UI Site",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Modern UI Site",
    title: "Modern UI Kurumsal Web Sitesi",
    description: "Hızlı, erişilebilir ve SEO uyumlu modern web deneyimi.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Modern UI" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern UI Kurumsal Web Sitesi",
    description: "Hızlı, erişilebilir ve SEO uyumlu modern web deneyimi.",
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
