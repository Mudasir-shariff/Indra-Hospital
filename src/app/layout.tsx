import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0068B0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Indira Hospital — Super Speciality Ortho & Urology Center | Chintamani",
  description: "Leading 30-bed Super Speciality Orthopaedic & Urology hospital in Chintamani, Karnataka. Advanced modular operation theatres, digital C-Arm imaging, 24/7 emergency trauma care, joint replacement, and laser urology.",
  keywords: [
    "Indira Hospital Chintamani",
    "Orthopaedic Hospital Chintamani",
    "Bone Doctor Chintamani",
    "Joint Replacement Chintamani",
    "Urology Hospital Karnataka",
    "Kidney Stone Laser Surgery Chintamani",
    "Dr Venkatesh KR",
    "Dr Shashank KA",
    "Fracture Care 24/7"
  ],
  icons: {
    icon: [
      { url: "/brand/indira-logo.jpg" },
      { url: "/icon.png" },
    ],
    apple: "/brand/indira-logo.jpg",
    shortcut: "/brand/indira-logo.jpg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="icon" href="/brand/indira-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/brand/indira-logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/brand/indira-logo.jpg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#17212B]">
        {children}
      </body>
    </html>
  );
}
