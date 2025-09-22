"use client";

import Image from "next/image";
import React from "react";
import { ALLINFORMATION } from "@/constant";

const { PHONE_NUMBER, INSTAGRAM_LINK } = ALLINFORMATION;

const contactLinks = [
  {
    href: `https://wa.me/${PHONE_NUMBER}`,
    icon: "/svg/whatsapp.svg",
    bgColor: "bg-green-500 hover:bg-green-600",
    title: "Chat on WhatsApp",
  },
  {
    href: `tel:${PHONE_NUMBER}`,
    icon: "/svg/phone.svg",
    bgColor: "bg-blue-500 hover:bg-blue-600",
    title: "Call Us",
  },
  {
    href: INSTAGRAM_LINK,
    icon: "/svg/instagram.svg",
    bgColor: "bg-pink-500 hover:bg-pink-600",
    title: "Follow on Instagram",
  },
];

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">
      {contactLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center text-white rounded-full shadow-lg transition-transform transform hover:scale-110 bg-white`}
          title={link.title}
        >
          <div className="w-8 h-8 relative overflow-hidden">
            <Image
              src={link.icon}
              alt={link.title}
              title={link.title}
              fill
              className="object-cover"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default FloatingContact;
