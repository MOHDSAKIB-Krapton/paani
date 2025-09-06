"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ALLINFORMATION } from "@/constant";

export default function WaterOrderBanner() {
  const packs = [
    {
      size: "200ml",
      quantity: 24,
      price: "₹150",
      imageUrl: "/images/cloud.jpg",
    },
    {
      size: "500ml",
      quantity: 24,
      price: "₹250",
      imageUrl: "/images/cloud.jpg",
    },
    {
      size: "1L",
      quantity: 12,
      price: "₹300",
      imageUrl: "/images/cloud.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-muted/20 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10 blur-3xl opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-5xl font-extrabold text-primary tracking-tight">
            Order Your Premium Water Packs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            Experience the difference with{" "}
            <strong>{ALLINFORMATION.WEBSITE_NAME}</strong> . Choose the perfect
            pack for your needs, whether it's for personal hydration or a large
            gathering.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          {packs.map((pack, i) => (
            <div
              key={i}
              className="bg-card/80 backdrop-blur-xl border border-border/30 rounded-3xl p-8 text-center hover:shadow-md transition-all duration-500 ease-in-out transform relative overflow-hidden"
            >
              {/* Decorative gradient for a premium feel */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary/5 rounded-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="w-full h-64 mb-4 flex justify-center items-center rounded-2xl overflow-hidden shadow-inner">
                  <Image
                    src={pack.imageUrl}
                    alt={`${pack.size} pack of Clear Premium Water`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary">{pack.size}</h3>
                <p className="text-muted-foreground font-medium">
                  <strong>PURELAY</strong> Premium Drinking Water with Added
                  Minerals {pack.size} (Pack of {pack.quantity})
                </p>
                <Button className="w-full mt-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-semibold py-6 text-lg hover:from-primary/90 hover:to-primary cursor-pointer">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
