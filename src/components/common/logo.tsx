import { ALLINFORMATION } from "@/constant";
import { Droplets } from "lucide-react";
import React from "react";

const Logo = ({ theme = "light" }: { theme?: "light" | "dark" }) => {
  return (
    <a href="/" className="flex items-center space-x-3 cursor-pointer">
      <div className="p-2 rounded-full bg-primary/10">
        <Droplets className="h-7 w-7 text-primary" />
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
