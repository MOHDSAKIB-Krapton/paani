"use client";

import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const features = [
  "Premium Quality Water – Clean, pure, and refreshing taste",
  "Custom Branding – Your logo and brand name on every bottle",
  "Boosts Business Identity – Turns water bottles into a marketing tool",
  "Ideal for Hotels & Cafés – Impress guests with premium branded bottles",
  "Perfect for Events – Weddings, parties, conferences, and exhibitions",
  "Cost-Effective Advertising – Every sip promotes your brand",
  "Free Delivery – Hassle-free service at your doorstep",
  "Eco-Friendly Options – Sustainable packaging choices available",
  "Professional Look – Enhances your brand’s image instantly",
  "Trusted Source – Safe, hygienic, and lab-tested water",
  "Flexible Orders – Small or bulk orders, both available",
  "Fast Service – Quick turnaround and on-time delivery",
  "High-Quality Printing – Durable, smudge-free custom labels",
  "Affordable Pricing – Competitive rates with best value",
  "Customer-Centric Approach – We prioritize your needs",
  "Strong First Impression – Guests feel premium experience",
  "Brand Recall – Customers remember your business through bottles",
  "Unique Marketing Edge – Stand out from competitors",
  "Hygiene & Safety Standards – Compliance with FSSAI guidelines",
  "Reliable Partnership – We grow your brand alongside ours",
];

export default function FeaturesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8; // scroll 80% of container width
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:py-24 min-h-screen max-w-7xl mx-auto  flex flex-col justify-center bg-gray-50 relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Why Choose <span className="text-primary">Purelay Bottles?</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          Deliver premium hydration with brand identity, hygiene, and marketing
          impact, perfect for businesses, events, hotels, and cafés.
        </p>
      </div>

      {/* Slider Container */}
      <div className="w-full space-y-4 ">
        <div className="relative">
          <div className="absolute top-0 left-0 pointer-events-none h-full z-20 w-10 bg-gradient-to-b from-gray-50 to-transparent" />
          <div className="absolute top-0 right-0 pointer-events-none h-full w-10 z-20 bg-gradient-to-b from-gray-50 to-transparent" />
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-6 relative"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE & Edge
            }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 p-6 my-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-gray-800 mr-1">
                        {idx + 1}.
                      </span>
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relavtive flex items-center justify-center md:justify-end gap-x-4">
          <button
            onClick={() => scroll("left")}
            className="z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className=" z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
