"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Award, Clock } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-xl shadow-neutral-900/5"
      >

        {/* Subtle Background Blueprint Grid Accent */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-bold shadow-sm"
            >
              <Award className="w-3.5 h-3.5 text-[#B08D57]" />
              #ክብ_የቡና_ጠረጴዛ | #Round_Coffee_Table
            </motion.div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-neutral-950 tracking-tight leading-snug">
              Architect-Designed Solid Wanza Wood Furniture
            </h3>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
              በንፁህ ዋንዛ ብቻ የተሰሩ ቅልብጭ ያሉ አነስተኛ የቡና ጠረጴዛዎች! ለመኖርያ ቤትም ሆነ ለንግድ ቤት የሚሆኑ። 
              At Fidelity Furniture & Interior Design, every piece is designed by architects to bring comfort, stability, and enduring beauty to your living space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono text-neutral-700 pt-1">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200 shadow-sm text-left"
              >
                <div className="flex items-center gap-2 font-bold text-neutral-950 mb-1 font-sans text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% Pure Wanza Wood
                </div>
                Handcrafted with rich grain finish and structural integrity.
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200 shadow-sm text-left"
              >
                <div className="flex items-center gap-2 font-bold text-neutral-950 mb-1 font-sans text-sm">
                  <Clock className="w-4 h-4 text-[#B08D57]" />
                  Timely Delivery Guarantee
                </div>
                በቀጠሮ ቀን ማድረስ መለያችን ነው! Delivered on schedule.
              </motion.div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:0911971800"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-neutral-950 hover:bg-black text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-neutral-950/20 border border-neutral-800"
              >
                <Phone className="w-4 h-4 text-[#C5A880] fill-current" />
                <span>Order Coffee Table: 0911 97 18 00</span>
              </motion.a>
              <a
                href="tel:0916411237"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold text-xs sm:text-sm transition-all text-center"
              >
                Call: 0916 41 12 37
              </a>
            </div>
          </div>

          {/* Right Product Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}

            className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl bg-white group cursor-pointer"
          >
            <Image
              src="/images/wanza-coffee-table.png"
              alt="Wanza Wood Round Coffee Table by Fidelity Furniture"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200 text-left shadow-lg">
              <div className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-wider">
                Fidelity Furniture Signature
              </div>
              <div className="text-sm font-display font-bold text-neutral-950">
                Solid Ethiopian Wanza Coffee Table
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
