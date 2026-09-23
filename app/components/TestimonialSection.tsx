"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, CheckCircle2, Quote, Sparkles, Building2, User, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function TestimonialSection() {
  const { t } = useLanguage();

  const additionalTestimonials = [
    {
      id: 2,
      quote: t("testi_2_quote"),
      author: t("testi_2_author"),
      role: t("testi_2_role"),
      tag: "#CommercialArchitecture",
      icon: Building2,
    },
    {
      id: 3,
      quote: t("testi_3_quote"),
      author: t("testi_3_author"),
      role: t("testi_3_role"),
      tag: "#LeaningTowerVilla",
      icon: User,
    },
    {
      id: 4,
      quote: t("testi_4_quote"),
      author: t("testi_4_author"),
      role: t("testi_4_role"),
      tag: "#EiABC & WSU Faculty",
      icon: Award,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="text-center space-y-3 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A880]/40 text-[#B08D57] text-xs font-mono font-bold uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t("testi_tag")}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-950 tracking-tight">
          {t("testi_title")}
        </h2>
      </motion.div>

      {/* FEATURED TESTIMONIAL 1: ADONAY ETHIOPIAN TIKTOKER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        whileHover={{ y: -4 }}
        className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
      >
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A880] via-[#E5D5B8] to-[#997B51]" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          
          {/* Adonay Profile & Verified Badge */}
          <div className="flex flex-col items-center flex-shrink-0 space-y-2">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-full overflow-hidden border-2 border-[#C5A880] shadow-md bg-neutral-100">
              <Image
                src="/images/fidel-portrait.png"
                alt="Adonay Ethiopian TikToker"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 right-0 p-1 bg-emerald-500 text-white rounded-full border-2 border-white">
                <CheckCircle2 className="w-4 h-4 fill-current text-emerald-500" />
              </div>
            </div>

            <div className="text-center">
              <div className="font-display font-bold text-base text-neutral-950 flex items-center justify-center gap-1">
                <span>{t("testi_1_author")}</span>
                <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-mono">Verified</span>
              </div>
              <div className="text-xs text-[#B08D57] font-mono font-medium mt-0.5 max-w-[200px]">
                {t("testi_1_role")}
              </div>
            </div>

            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 text-amber-500 pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-mono font-bold text-neutral-800 ml-1">5.0</span>
            </div>
          </div>

          {/* Quote Body */}
          <div className="space-y-4 text-center md:text-left flex-grow">
            <div className="text-[#C5A880] opacity-40">
              <Quote className="w-10 h-10" />
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-serif italic text-neutral-900 leading-relaxed font-medium">
              {t("testi_1_quote")}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-mono text-neutral-500 border-t border-neutral-100">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 font-semibold">
                #DICHA_BOYS_SNEAKERS
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 font-semibold">
                #SolidWanzaFurniture
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 font-semibold">
                #GifataBlessingProject
              </span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* 3 ADDITIONAL TESTIMONIAL CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {additionalTestimonials.map((tItem, idx) => {
          const IconComp = tItem.icon;
          return (
            <motion.div
              key={tItem.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-neutral-200/90 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#C5A880] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <IconComp className="w-4 h-4 text-[#B08D57]" />
                </div>

                <p className="text-xs sm:text-sm font-serif italic text-neutral-800 leading-relaxed font-medium">
                  {tItem.quote}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-1">
                <div className="font-display font-bold text-sm text-neutral-950">
                  {tItem.author}
                </div>
                <div className="text-[11px] text-[#B08D57] font-mono">
                  {tItem.role}
                </div>
                <span className="inline-block text-[10px] font-mono text-neutral-400 font-medium">
                  {tItem.tag}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
