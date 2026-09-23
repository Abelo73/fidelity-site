"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const partners = [
  { name: "EiABC (Ethiopian Institute of Architecture)", category: "Academic Partner" },
  { name: "Wolaita Sodo University", category: "Lectureship & Research" },
  { name: "Fidelity Architects", category: "Master Planning" },
  { name: "Fidelity Furniture", category: "Solid Wanza Craftsmanship" },
  { name: "Fidelity Printing", category: "Brand Identity & Media" },
  { name: "SOS Hermann Gmeiner Alumnus", category: "Foundational Excellence" },
  { name: "Commercial & Residential Developments", category: "Infrastructure" },
  { name: "Addis Ababa & Sodo Enterprises", category: "Regional Hubs" },
];

export default function TrustedTicker() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white border-y border-neutral-200/80 py-8 overflow-hidden relative">
      
      {/* Centered Subtitle */}
      <div className="text-center mb-6 px-4">
        <p className="text-xs font-mono tracking-widest text-neutral-500 uppercase font-semibold">
          {t("ticker_title")}
        </p>
      </div>

      {/* Infinite Horizontal Marquee Container with Left & Right Gradient Mask Fade */}
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1 Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-12 whitespace-nowrap pr-8 sm:pr-12"
        >
          {partners.concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#C5A880] transition-colors group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#C5A880] group-hover:scale-125 transition-transform" />
              <span className="font-display font-bold text-xs sm:text-sm text-neutral-800 group-hover:text-neutral-950 transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 font-semibold px-2 py-0.5 rounded bg-white border border-neutral-200">
                {partner.category}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
