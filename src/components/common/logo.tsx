import { ALLINFORMATION } from "@/constant";
import React from "react";

const Logo = ({ theme = "light" }: { theme?: "light" | "dark" }) => {
  return (
    <a href="/" className="flex items-center space-x-3 cursor-pointer">
      <div className="w-10 h-10 overflow-hidden">
        <img
          src="./images/logo.png"
          alt="LOGO"
          className="w-full h-full object-contain"
        />
      </div>
      <span
        className={`text-2xl font-extrabold ${
          theme === "light" ? "text-foreground" : "text-background"
        }`}
      >
        {ALLINFORMATION.WEBSITE_NAME}
      </span>
    </a>
  );
};

export default Logo;
