"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Sparkles, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsShowcase() {
  const { t } = useLanguage();

  const projects = [
    {
      id: "leaning-tower",
      title: t("proj_1_title"),
      category: t("proj_1_cat"),
      description: t("proj_1_desc"),
      image: "/images/fidel-portrait.png",
      tags: ["Architectural Design", "G+1 Residential", "Wolaita Sodo"],
      featured: true,
    },
    {
      id: "dicha-boys",
      title: t("proj_2_title"),
      category: t("proj_2_cat"),
      description: t("proj_2_desc"),
      image: "/images/fidel-portrait.png",
      tags: ["Interior Design", "Adonay Mada Collab", "Social Impact"],
      featured: true,
    },
    {
      id: "wanza-suite",
      title: t("proj_3_title"),
      category: t("proj_3_cat"),
      description: t("proj_3_desc"),
      image: "/images/wanza-coffee-table.png",
      tags: ["100% Solid Wanza Wood", "Custom Workshop"],
      featured: false,
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
        <span className="text-[11px] font-mono tracking-widest text-[#B08D57] uppercase font-bold px-3.5 py-1 rounded-full bg-white border border-[#C5A880]/40 shadow-sm inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
          <span>{t("proj_tag")}</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-950 tracking-tight">
          {t("proj_title")}
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
          {t("proj_desc")}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-neutral-200/90 rounded-3xl overflow-hidden shadow-xl shadow-neutral-900/5 group flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-85" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-950 font-mono text-[10px] font-bold shadow-md">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-display font-bold text-neutral-950 group-hover:text-[#B08D57] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 font-mono text-[10px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#B08D57]" />
                <span>Wolaita Sodo & Addis</span>
              </span>
              <Link
                href="/gallery"
                className="text-xs font-bold text-neutral-950 group-hover:text-[#B08D57] flex items-center gap-1 transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
