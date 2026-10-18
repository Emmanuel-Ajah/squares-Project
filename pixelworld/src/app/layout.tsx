import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.subtitle,
  keywords: [
    "PixelWorld",
    "Million dollar homepage",
    "pixel wall",
    "digital canvas",
    "indie web",
    "own a piece of the internet",
    "digital mosaic",
    "buy pixels"
  ],
  authors: [{ name: "PixelWorld Project" }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.subtitle,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.subtitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFDF9] text-[#18181B] min-h-screen flex flex-col selection:bg-[#FFD23F] selection:text-[#18181B]`}
      >
        {children}
      </body>
    </html>
  );
}
