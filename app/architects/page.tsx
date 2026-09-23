"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Compass, ShieldCheck, Building2, PhoneCall, Send, Award, DraftingCompass } from "lucide-react";

export default function ArchitectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 relative overflow-hidden bg-blueprint-grid">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C5A880]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Company Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl shadow-neutral-200/50"
        >
          {/* Top Architectural Blueprint Accent Header */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#C5A880]/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="w-14 h-14 relative rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-md p-1.5"
                >
                  <Image src="/logos/fidelity-architects.png" alt="Fidelity Architects Logo" fill className="object-cover rounded-xl" />
                </motion.div>
                <div>
                  <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block flex items-center gap-1.5">
                    <DraftingCompass className="w-3.5 h-3.5" />
                    {t("arch_badge")}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
                    {t("arch_title")}
                  </h1>
                </div>
              </div>

              <div className="space-y-1 border-l-2 border-[#C5A880] pl-4">
                <p className="text-neutral-900 text-lg font-serif italic font-bold">{t("arch_motto1")}</p>
                <p className="text-neutral-500 text-xs font-mono font-semibold uppercase tracking-wider">{t("arch_motto2")}</p>
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                {t("arch_bio")}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:0911971800"
                  className="px-6 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-all flex items-center gap-2.5 shadow-lg shadow-neutral-900/20"
                >
                  <PhoneCall className="w-4 h-4 text-[#C5A880]" />
                  {t("arch_cta_call")}
                </motion.a>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 text-neutral-600" />
                    {t("arch_cta_inquiry")}
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Interactive 3D Card Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-72 h-72 sm:w-80 sm:h-80 relative rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl bg-white p-6 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#B08D57] uppercase tracking-wider">EiABC Certified</span>
                  <Award className="w-5 h-5 text-[#B08D57]" />
                </div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden my-auto border border-neutral-100 shadow-inner">
                  <Image src="/logos/fidelity-architects.png" alt="Architectural Render" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 font-bold">
                  <span>EST. 2021</span>
                  <span>ADDIS ABABA / WSU</span>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Core Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block">
              Architectural Mastery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 font-display">
              {t("arch_services_title")}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans">{t("arch_services_desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-5 hover:border-[#C5A880] hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#C5A880] flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#C5A880] group-hover:text-neutral-900 transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                {t("arch_s1_title")}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                {t("arch_s1_desc")}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono font-bold text-[#B08D57]">
                <span>3D Renders & Floor Plans</span>
                <span>→</span>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-5 hover:border-[#C5A880] hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#C5A880] flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#C5A880] group-hover:text-neutral-900 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                {t("arch_s2_title")}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                {t("arch_s2_desc")}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono font-bold text-[#B08D57]">
                <span>On-Site Quality Auditing</span>
                <span>→</span>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-neutral-200 space-y-5 hover:border-[#C5A880] hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#C5A880] flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#C5A880] group-hover:text-neutral-900 transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                {t("arch_s3_title")}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                {t("arch_s3_desc")}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono font-bold text-[#B08D57]">
                <span>Turnkey Building Handover</span>
                <span>→</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
