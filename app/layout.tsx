import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://saadkamal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saad Kamal Shaikh | Full Stack Developer",
    template: "%s | Saad Kamal Shaikh",
  },
  description:
    "Saad Kamal Shaikh is a full stack developer building fast, secure web apps with Next.js, React, and TypeScript. Available for freelance projects.",
  keywords: [
    "Saad Kamal Shaikh",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Freelance Web Developer",
    "Karachi Developer",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Saad Kamal Shaikh", url: siteUrl }],
  creator: "Saad Kamal Shaikh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Saad Kamal Shaikh | Full Stack Developer",
    description:
      "Full stack developer building fast, secure web apps with Next.js, React, and TypeScript. Available for freelance projects.",
    siteName: "Saad Kamal Shaikh — Portfolio",
    images: [
      {
        url: "/saad2.jpg",
        width: 1200,
        height: 630,
        alt: "Saad Kamal Shaikh — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Kamal Shaikh | Full Stack Developer",
    description:
      "Full stack developer building fast, secure web apps with Next.js, React, and TypeScript.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}