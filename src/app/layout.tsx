import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HOST } from "@/constant";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PureLayWater",
    default: "PureLayWater - Fresh & Reliable Water Distribution",
  },
  description:
    "PureLayWater delivers fresh, clean, and reliable water to your home, office, or industry. We provide 24/7 supply, emergency delivery, and customized water solutions you can trust.",
  keywords: [
    "PureLayWater",
    "Water delivery",
    "Water distribution",
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
    title: "PureLayWater - Fresh & Reliable Water Distribution",
    description:
      "Get fresh, safe, and clean water delivered straight to your doorstep. PureLayWater provides 24/7 water distribution services for residential, commercial, and industrial needs.",
    url: HOST,
    siteName: "PureLayWater",
    images: [{ url: `${HOST}/images/og-image.png` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureLayWater",
    description:
      "PureLayWater provides 24/7 clean and reliable water distribution for homes, offices, and industries.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
