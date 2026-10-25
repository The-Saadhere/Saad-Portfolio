import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://saadkamal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saad Kamal Shaikh | Full Stack Developer in Karachi",
    template: "%s | Saad Kamal Shaikh",
  },
  description:
    "Saad Kamal Shaikh is a full stack developer in Karachi building online stores, web apps and SaaS products with Next.js, TypeScript and MongoDB. Available for freelance work.",
  keywords: [
    "Saad Kamal Shaikh",
    "Saad Kamal",
    "Full Stack Developer",
    "Next.js Developer",
    "Freelance Web Developer Pakistan",
    "Karachi Developer",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Saad Kamal Shaikh", url: siteUrl }],
  creator: "Saad Kamal Shaikh",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Saad Kamal Shaikh | Full Stack Developer",
    description:
      "Online stores, web apps and SaaS products built end to end with Next.js, TypeScript and MongoDB.",
    siteName: "Saad Kamal Shaikh Portfolio",
    locale: "en_US",
    // image comes automatically from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Kamal Shaikh | Full Stack Developer",
    description:
      "Online stores, web apps and SaaS products built end to end with Next.js, TypeScript and MongoDB.",
  },
  // After Search Console gives you the code, uncomment and paste it:
  // verification: { google: "YOUR_CODE_HERE" },
  // Remove this block if you use app/favicon.ico instead:
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saad Kamal Shaikh",
  alternateName: "Saad Kamal",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
  sameAs: [
    "https://github.com/The-Saadhere",
    "https://www.linkedin.com/in/the-saadhere",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${instrument.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}