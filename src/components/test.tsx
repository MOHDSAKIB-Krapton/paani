"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-b border-white/20" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-primary/10">
              <Droplets className="h-7 w-7 text-primary" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-foreground">
              AquaFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-[0.15em] uppercase font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-2 text-sm shadow-md">
              Get Quote
            </Button>
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
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-3 w-full shadow-md">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
