import { useState } from "react";
import { X } from "lucide-react";

export default function DiscountBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`relative z-[60] bg-yellow-400 text-black text-sm font-medium px-4 py-2 flex items-center justify-center transition-all duration-500 ${
        visible ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
      }`}
    >
      <span>
        🎉 Discount <b>50% OFF</b> – Limited Time!
      </span>
      <button
        onClick={() => setVisible(false)}
        title="Close"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/10 transition"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
