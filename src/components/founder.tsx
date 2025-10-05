"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Globe } from "lucide-react";

export default function CEOFounderPurelay({
  name = "Aman",
  title = "CEO & Founder, Purelay",
  location = "Meerut, India",
  shortBio = "Founder & product visionary behind Purelay Water — delivering premium mineral water, hygienically bottled and custom-branded for hotels, events & businesses. Eco-friendly bulk delivery, unmatched taste, and trust you can see.",
  email = "purelay@gmail.com",
  image = {
    src: "./images/founder.webp",
    alt: "Aman - CEO & Founder of Purelay",
  },
  highlights = [
    { label: "Founded", value: "2025" },
    { label: "Bottles Delivered", value: "1K+" },
    { label: "Clients Served", value: "100+" },
  ],
}) {
  // Lightweight animation settings
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <article
      className="w-full max-w-7xl mx-auto p-6 sm:p-10 lg:p-14 my-24 bg-white dark:bg-gray-900 rounded-2xl shadow ring-1 ring-black/5"
      aria-labelledby="ceo-name"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <motion.div
          className="col-span-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <picture className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-2 ring-black/5">
            <img
              loading="lazy"
              decoding="async"
              src={image.src}
              alt={image.alt}
              width="600"
              height="600"
              className="object-cover w-full h-full"
            />
          </picture>
        </motion.div>

        {/* Center: Name, bio, CTA */}
        <motion.div
          className="col-span-1 lg:col-span-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1
                id="ceo-name"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
              >
                {name}
              </h1>
              <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {title} • {location}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <a
                href={`mailto:${email}`}
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/5 hover:bg-black/5 transition"
                aria-label={`Email ${name}`}
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          </header>

          <section className="mt-6 text-gray-700 dark:text-gray-300 prose prose-sm sm:prose-base max-w-none">
            <p className="leading-relaxed">{shortBio}</p>

            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-start">
                  <span className="text-lg sm:text-xl font-semibold">
                    {h.value}
                  </span>
                  <span className="text-xs text-gray-500">{h.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SEO-friendly summary / keywords visually hidden for screen readers */}
          <p className="sr-only">
            {`${name} ${title} founder of Purelay. Expertise: product leadership, streaming technology, creator monetization, privacy-first systems, growth hacking, SaaS, licensing.`}
          </p>
        </motion.div>
      </div>
    </article>
  );
}
