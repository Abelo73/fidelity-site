"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}

        className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border border-neutral-800"
      >
        {/* Subtle Gold Radial Glow in Background */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.08] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#C5A880]/40 text-[#C5A880] text-xs font-mono font-bold uppercase tracking-wider shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            Direct Consultation & Orders
          </motion.div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
            Ready to Bring Your Architectural & Spatial Vision to Life?
          </h3>

          <p className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base font-sans leading-relaxed">
            Contact Fidelity Business Group today for architectural design, custom furniture orders, or commercial branding solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:0911971800"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C5A880] hover:bg-[#b08d57] text-neutral-950 font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>0911 97 18 00</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:0916411237"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-bold text-sm transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>0916 41 12 37</span>
            </motion.a>
          </div>

          <div className="text-xs font-mono text-neutral-400 flex items-center justify-center gap-1.5 pt-2">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Addis Ababa & Wolaita Sodo (Greenland Sefer, near Hodiye Garage)</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
