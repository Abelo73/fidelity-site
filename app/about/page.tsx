"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Briefcase,
  Sofa,
  Printer,
  Sparkles,
  Phone,
  CheckCircle2,
  Award,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const timelineItems = [
    {
      date: "Jan 22, 2024 – Present",
      role: "Creative Director & Lead Designer",
      company: "Fidelity Furniture & Interior Design",
      icon: Sofa,
      desc: "Spearheading architect-guided furniture design, custom solid Wanza wood coffee tables (#ክብ_የቡና_ጠረጴዛ), luxury beds, and residential interior transformations.",
    },
    {
      date: "September 2021 – Present",
      role: "Chief Executive Officer (CEO) & Founder",
      company: "Fidelity Architects & Consulting Engineers",
      icon: Building2,
      desc: "Leading architectural master planning, residential building supervision, and engineering consultancy with the tagline 'Building a legacy!'.",
    },
    {
      date: "September 30, 2021 – Present",
      role: "General Manager",
      company: "Fidelity Printing & Advertising",
      icon: Printer,
      desc: "Directing commercial printing operations, corporate branding identity, and outdoor advertising media under the tagline 'Stand out!'.",
    },
    {
      date: "November 2017 – Present",
      role: "University Lecturer",
      company: "Wolaita Sodo University (Academic Faculty)",
      icon: GraduationCap,
      desc: "Teaching architectural design theory, spatial graphics, and urban development principles to aspiring university engineering students.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 bg-white text-neutral-900 selection:bg-[#C5A880] selection:text-white">
      
      {/* 1. ANIMATED HEADER BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="space-y-4 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A880]/50 text-neutral-900 text-xs font-mono font-bold uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
          <span>Executive Profile & Leadership</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-black text-neutral-950 tracking-tight leading-tight">
          Fidel Gebremedhin
        </h1>

        <p className="text-base sm:text-lg text-[#B08D57] font-serif italic font-normal leading-relaxed">
          Architect | Lecturer | Entrepreneur | Furniture & Interior Designer | Thought Leader
        </p>
      </motion.div>

      {/* 2. MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: 3D Portrait & Quick Specs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Portrait Card */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-2xl group">
            <Image
              src="/images/fidel-portrait.png"
              alt="Fidel Gebremedhin Profile"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-700">
                  {t("hero_active_founder")}
                </span>
              </div>
              <div className="text-base font-display font-bold text-neutral-950">
                FIDEL GEBREMEDHIN
              </div>
              <div className="text-xs font-mono text-neutral-500">
                Addis Ababa & Wolaita Sodo
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-neutral-50/90 border border-neutral-200 rounded-3xl p-6 space-y-3.5 text-xs font-mono shadow-sm"
          >
            <h3 className="text-neutral-950 font-bold text-sm uppercase tracking-wider font-sans flex items-center gap-2">
              <Award className="w-4 h-4 text-[#B08D57]" />
              Executive Quick Facts
            </h3>

            <div className="flex justify-between items-center border-b border-neutral-200/80 pb-2.5">
              <span className="text-neutral-500">Social Audience:</span>
              <span className="text-neutral-950 font-bold">12K+ Community Followers</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-200/80 pb-2.5">
              <span className="text-neutral-500">Operational Hubs:</span>
              <span className="text-neutral-950 font-medium">Addis Ababa & Wolaita Sodo</span>
            </div>

            <div className="flex justify-between items-center border-b border-neutral-200/80 pb-2.5">
              <span className="text-neutral-500">Architecture Alma Mater:</span>
              <span className="text-neutral-950 font-medium">EiABC (Addis Ababa University)</span>
            </div>

            <div className="flex justify-between items-center pb-1">
              <span className="text-neutral-500">Lectureship Faculty:</span>
              <span className="text-neutral-950 font-medium">Wolaita Sodo University</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Bio, Education & Animated Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-7 space-y-10"
        >
          {/* Bio Summary */}
          <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950">
              Biography & Executive Leadership
            </h2>
            <p>
              Fidel Gebremedhin is an Ethiopian architect, educator, and serial entrepreneur based between Addis Ababa and Wolaita Sodo. 
              Holding a prestigious academic background from <strong className="text-neutral-950">EiABC (Ethiopian Institute of Architecture, Building Construction and City Development)</strong> and <strong className="text-neutral-950">SOS Hermann Gmeiner School</strong>, Fidel bridges spatial theory with real-world enterprise creation.
            </p>
            <p>
              As Founder and CEO of <strong className="text-neutral-950">Fidelity Business Group</strong>, he directs 4 integrated enterprise divisions comprising architectural design, precision furniture craft, and commercial advertising. He also serves as a university lecturer at Wolaita Sodo University, educating next-generation architectural talent.
            </p>
          </div>

          {/* Educational Credentials */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-neutral-950">
              Academic & Professional Credentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-md space-y-2 group hover:border-[#C5A880] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-[#B08D57] font-bold">Higher Education</div>
                  <GraduationCap className="w-4 h-4 text-[#B08D57]" />
                </div>
                <div className="text-base font-bold text-neutral-950 font-display">EiABC</div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Ethiopian Institute of Architecture, Building Construction & City Development. Specialized in Architectural Design & Urban Planning.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-md space-y-2 group hover:border-[#C5A880] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-[#B08D57] font-bold">Secondary Education</div>
                  <Award className="w-4 h-4 text-[#B08D57]" />
                </div>
                <div className="text-base font-bold text-neutral-950 font-display">SOS Hermann Gmeiner School</div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Rigorous academic foundation cultivating leadership, analytical thinking, and artistic discipline.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Animated Executive & Academic Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-neutral-950">
              Executive & Academic Career Timeline
            </h3>

            <div className="space-y-6 relative border-l-2 border-[#C5A880]/40 ml-3 pl-6 sm:pl-8">
              {timelineItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="relative space-y-1.5 p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-sm hover:border-[#C5A880] transition-all group"
                  >
                    {/* Glowing Timeline Pulse Dot */}
                    <span className="absolute -left-[37px] sm:-left-[45px] top-5 w-4 h-4 rounded-full bg-white border-2 border-[#C5A880] shadow-sm flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                    </span>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#B08D57] font-bold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      <IconComp className="w-4 h-4 text-neutral-400 group-hover:text-[#B08D57] transition-colors" />
                    </div>

                    <h4 className="text-base font-display font-bold text-neutral-950 group-hover:text-[#B08D57] transition-colors">
                      {item.role}
                    </h4>
                    <div className="text-xs text-neutral-500 font-mono font-medium">
                      {item.company}
                    </div>
                    <p className="text-xs text-neutral-600 pt-1 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-950 hover:bg-[#B08D57] text-white font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2 group border border-neutral-800"
            >
              <span>Get in Touch with Fidel</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <a
              href="tel:0911971800"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold text-xs transition-all text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#B08D57] fill-current" />
              <span>Direct Phone: 0911 97 18 00</span>
            </a>
          </div>

        </motion.div>

      </div>

    </div>
  );
}
