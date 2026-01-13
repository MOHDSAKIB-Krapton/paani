"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./common/logo";
import DiscountBanner from "./common/discountBanner";
import QueryPopup from "./common/queryPopup";
import CircularText from "./CircularText";
import FloatingContact from "./floating-contact";

const NAVIGATION = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Distribution",
    url: "/distribution",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Custom Branding",
    url: "/custom-branding-water",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <DiscountBanner />
      <FloatingContact />
      <QueryPopup />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-b border-white/20" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAVIGATION.map((item) => (
              <a
                key={item.url}
                href={`${item.url}`}
                className="text-sm tracking-[0.15em] uppercase font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            {/* <a
              href="contact"
              title="Contact"
              className="rounded-full bg-gradient-to-r from-primary to-primary hover:opacity-90 text-white px-6 py-2 text-sm shadow-md cursor-pointer"
            >
              Get Quote
            </a> */}

            <CircularText
              text="PURELAY*WATER*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-foreground" />
            ) : (
              <Menu className="h-7 w-7 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden relative w-full bg-background/95 backdrop-blur-xl border-b border-white/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              {NAVIGATION.map((item) => (
                <a
                  key={item.url}
                  href={`${item.url}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
