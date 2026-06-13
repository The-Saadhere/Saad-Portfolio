import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins,Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Saad kamal Portfolio",
  description: "A portfolio website showcasing the projects and skills of Saad Kamal, a passionate developer. Explore my work, experience, and contact information to learn more about my journey in the world of technology.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
         
          {children}
          <Footer />
      </body>
    </html>
  );
}
// add a favicon to the website

