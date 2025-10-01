import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HOST } from "@/constant";
import { Toaster } from "@/components/ui/sonner";
import ReactLenis from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(HOST),
  title: {
    template: "%s | PureLayWater",
    default: "PureLayWater - Customized Water Distribution",
  },
  description:
    "PureLayWater delivers fresh, clean, and reliable water to your home, office, or industry. We provide customized water solutions you can trust, 24/7 supply, and emergency delivery.",
  keywords: [
    "PureLayWater",
    "Water delivery",
    "Water distribution",
    "Custom water bottle label",
    "Clean water",
    "Fresh water",
    "24/7 water supply",
    "Emergency water delivery",
    "Residential water",
    "Commercial water",
    "Industrial water",
    "Safe drinking water",
  ],
  alternates: {
    canonical: HOST,
  },
  openGraph: {
    title: "PureLayWater - Customized Water Distribution",
    description:
      "PureLayWater delivers fresh, clean, and reliable water to your home, office, or industry. We provide customized water solutions you can trust, 24/7 supply, and emergency delivery.",
    url: HOST,
    siteName: "PureLayWater",
    images: [{ url: `${HOST}/images/og-image.png` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureLayWater - Customized Water Distribution",
    description:
      "PureLayWater delivers fresh, clean, and reliable water to your home, office, or industry. We provide customized water solutions you can trust, 24/7 supply, and emergency delivery.",
    images: [`${HOST}/images/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="CAAiMwMvzvEXijVID-SL4T1uqA7otGpa6Lip6wLkf10"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
