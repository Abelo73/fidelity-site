"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Sparkles,
  Compass,
  Award,
  Building2,
  Sofa,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  Globe,
} from "lucide-react";
import WireframeGeometry from "./WireframeGeometry";
import AnimatedCounter from "./AnimatedCounter";
import { useLanguage } from "../context/LanguageContext";

const disciplines = [
  {
    id: "architect",
    labelKey: "hero_discipline_arch",
    icon: Building2,
    desc: "Master Planning & Sustainable Commercial Infrastructure",
  },
  {
    id: "furniture",
    labelKey: "hero_discipline_furn",
    icon: Sofa,
    desc: "Custom Luxury Wanza & Hardwood Craftsmanship",
  },
  {
    id: "gm",
    labelKey: "hero_discipline_gm",
    icon: Briefcase,
    desc: "Directing 4 Multi-Sector Enterprise Divisions",
  },
  {
    id: "lecturer",
    labelKey: "hero_discipline_lect",
    icon: GraduationCap,
    desc: "Educating Next-Generation Architectural Talent",
  },
];

const metrics = [
  { value: 12, suffix: "K+", label: "Community Followers" },
  { value: 4, suffix: " Sectors", label: "Enterprise Divisions" },
  { value: 100, suffix: "%", label: "Architect-Guided" },
  { value: 2, suffix: " Hubs", label: "Addis Ababa & Sodo" },
];

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [activeDiscipline, setActiveDiscipline] = useState<string>("architect");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  // Dynamic Background Mouse Tracker
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // 3D Card Tilt State
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setCardTilt({ rotateX, rotateY });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      onMouseMove={handleHeroMouseMove}
      className="relative min-h-[90vh] pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-white text-neutral-900 flex items-center justify-center selection:bg-[#C5A880] selection:text-white"
    >
      {/* 1. ARCHITECTURAL LIGHT BLUEPRINT GRID */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-dots opacity-100 pointer-events-none" />

      {/* Dynamic Ambient Gold Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          background: `radial-gradient(850px circle at ${mousePos.x}% ${mousePos.y}%, rgba(197, 168, 128, 0.16), rgba(16, 185, 129, 0.04) 45%, transparent 80%)`,
        }}
      />

      {/* Floating 3D Wireframe Geometry */}
      <WireframeGeometry />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12">
        
        {/* HERO GRID: 2-COLUMN SPLIT WITH HIGH-IMPACT TYPOGRAPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Ultra-Cool Modern Headline & Information */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Status Pill */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#C5A880]/50 text-neutral-900 text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-sm hover:border-[#C5A880] transition-colors group cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A880]" />
              </span>
              <span className="bg-gradient-to-r from-neutral-950 via-[#8C6F45] to-[#B08D57] bg-clip-text text-transparent font-bold">
                {t("hero_badge")}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#B08D57] group-hover:rotate-12 transition-transform" />
            </motion.div>

            {/* ULTRA-COOL MODERN HEADLINE (OUTFIT FONT WITH METALLIC GRADIENT) */}
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-neutral-950 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.18 }}
            >
              <span className="block text-neutral-950">{t("hero_title_1")}</span>
              <span className="bg-gradient-to-r from-[#B08D57] via-[#C5A880] to-[#8C6F45] bg-clip-text text-transparent block mt-1">
                {t("hero_title_2")}
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 }}
              className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl font-sans"
            >
              {t("hero_subtitle")}
            </motion.p>

            {/* PRIMARY CTA GROUP */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <a
                href="tel:0911971800"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-950 hover:bg-[#B08D57] text-white font-sans text-xs sm:text-sm font-bold shadow-xl shadow-neutral-950/20 transition-all flex items-center justify-center gap-3 border border-neutral-800"
              >
                <div className="w-8 h-8 rounded-full bg-[#C5A880] text-neutral-950 flex items-center justify-center font-bold">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <span>{t("hero_cta_order")}</span>
              </a>

              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm group"
              >
                <span>{t("hero_cta_founder")}</span>
                <ArrowRight className="w-4 h-4 text-[#B08D57] group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* DISCIPLINE MATRIX TABS */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {disciplines.map((d) => {
                  const IconComp = d.icon;
                  const isActive = activeDiscipline === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDiscipline(d.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-sans font-semibold transition-all flex items-center gap-2 border ${
                        isActive
                          ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                          : "bg-white text-neutral-700 border-neutral-200 hover:border-[#C5A880] hover:text-neutral-950 shadow-sm"
                      }`}
                    >
                      <IconComp
                        className={`w-3.5 h-3.5 flex-shrink-0 ${
                          isActive ? "text-[#C5A880]" : "text-neutral-400"
                        }`}
                      />
                      <span>{t(d.labelKey)}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiscipline}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-800 flex items-center gap-2.5 shadow-sm max-w-2xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium">
                    {disciplines.find((d) => d.id === activeDiscipline)?.desc}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* LIVE METRICS STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-200">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-center lg:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-950">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="text-[11px] text-neutral-500 font-sans mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Ultra-Cool 3D Tilt Portrait Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
              className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none"
            >
              
              <motion.div
                ref={cardRef}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                animate={{
                  rotateX: isMobile ? 0 : cardTilt.rotateX,
                  rotateY: isMobile ? 0 : cardTilt.rotateY,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-3 bg-white border border-neutral-200 rounded-3xl shadow-2xl relative group"
              >
                {/* Image Wrapper */}
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/fidel-portrait.png"
                    alt="Fidel Gebremedhin - Architect & CEO"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent opacity-90" />
                </div>

                {/* Floating Glass Badge (+15px Z-Axis) */}
                <div
                  style={{ transform: isMobile ? "none" : "translateZ(20px)" }}
                  className="absolute top-5 right-5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-xl text-left max-w-[190px]"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Compass className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B08D57] font-bold">
                      Fidelity Group
                    </span>
                  </div>
                  <p className="text-xs font-serif italic text-neutral-900 font-medium leading-snug">
                    "From thought to Empire!"
                  </p>
                </div>

                {/* Bottom Glass Bar (+25px Z-Axis) */}
                <div
                  style={{ transform: isMobile ? "none" : "translateZ(25px)" }}
                  className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-neutral-200 text-left shadow-xl"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold">
                        {t("hero_active_founder")}
                      </span>
                    </div>

                    <Award className="w-4 h-4 text-[#B08D57]" />
                  </div>

                  <h3 className="text-base font-display font-bold text-neutral-950 tracking-tight">
                    FIDEL GEBREMEDHIN
                  </h3>

                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    Architect · Entrepreneur · Lecturer @ WSU
                  </p>
                </div>

              </motion.div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
