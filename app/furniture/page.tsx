"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles, PhoneCall, MapPin, CheckCircle2, ShieldCheck, ArrowRight, PackageCheck } from "lucide-react";

export default function FurniturePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 relative overflow-hidden bg-blueprint-grid">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C5A880]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Furniture Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl shadow-neutral-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="w-14 h-14 relative rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-md p-1.5"
                >
                  <Image src="/logos/fidelity-furniture.png" alt="Fidelity Furniture Logo" fill className="object-cover rounded-xl" />
                </motion.div>
                <div>
                  <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
                    {t("furn_badge")}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
                    {t("furn_title")}
                  </h1>
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-[#C5A880] pl-4">
                <p className="text-neutral-900 text-lg font-serif italic font-bold">{t("furn_motto1")}</p>
                <p className="text-neutral-500 text-xs font-mono font-semibold uppercase tracking-wider">{t("furn_motto2")}</p>
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                {t("furn_bio")}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-mono font-bold shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t("furn_on_time")}</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:0911971800"
                  className="px-6 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-all flex items-center gap-2.5 shadow-lg shadow-neutral-900/20"
                >
                  <PhoneCall className="w-4 h-4 text-[#C5A880]" />
                  {t("furn_cta_order")}
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:0916411237"
                  className="px-6 py-3.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-neutral-600" />
                  {t("furn_cta_call2")}
                </motion.a>
              </div>
            </div>

            {/* Featured Wanza Wood Product Card Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-full max-w-sm aspect-square relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl bg-white p-3 group"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-100">
                  <Image src="/images/wanza-coffee-table.png" alt="Pure Wanza Wood Circular Coffee Table" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Floating Gold Spec Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200 text-[11px] font-mono font-bold text-neutral-900 shadow-md">
                    #ክብ_የቡና_ጠረጴዛ
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-neutral-200 shadow-xl">
                    <div className="text-xs font-bold text-neutral-900 font-display">100% Solid Ethiopian Wanza Wood</div>
                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5">Architect-Designed Precision Joinery</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Catalog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block">
              Luxury Woodcraft Collections
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 font-display">
              {t("furn_catalog_title")}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans">{t("furn_catalog_desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Item 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-5 hover:border-[#C5A880] hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-mono font-bold">
                  {t("furn_p1_badge")}
                </div>
                <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                  {t("furn_p1_title")}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {t("furn_p1_desc")}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-bold text-[#B08D57]">
                <span>Custom Dimensions Available</span>
                <PackageCheck className="w-4 h-4 text-[#B08D57]" />
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-5 hover:border-[#C5A880] hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-[11px] font-mono font-bold">
                  {t("furn_p2_badge")}
                </div>
                <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                  {t("furn_p2_title")}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {t("furn_p2_desc")}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-bold text-[#B08D57]">
                <span>Eco-Friendly Finishes</span>
                <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-5 hover:border-[#C5A880] hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-[11px] font-mono font-bold">
                  {t("furn_p3_badge")}
                </div>
                <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                  {t("furn_p3_title")}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {t("furn_p3_desc")}
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-bold text-[#B08D57]">
                <span>Hydraulic Storage System</span>
                <ArrowRight className="w-4 h-4 text-[#B08D57]" />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Workshop Location Card Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left z-10">
            <span className="text-xs font-mono text-[#C5A880] font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              {t("furn_workshop_loc")}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {t("furn_workshop_addr")}
            </h3>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:0911971800"
            className="px-6 py-3.5 rounded-2xl bg-[#C5A880] hover:bg-[#B08D57] text-neutral-950 font-bold text-xs shadow-lg transition-all z-10 shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            0911 97 18 00
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
}
