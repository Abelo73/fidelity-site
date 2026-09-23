"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Sofa, Printer, ShieldCheck, ArrowRight } from "lucide-react";

const companies = [
  {
    id: "group",
    name: "Fidelity Business Group",
    tagline: "“From thought to Empire!”",
    category: "Parent Holding",
    desc: "The overarching corporate entity guiding multi-sector innovation in Ethiopia. Synergizing architecture, furniture craftsmanship, and commercial advertising under a single executive vision.",
    logo: "/logos/fidelity-business-group.png",
    meta: "CEO: Fidel Gebremedhin",
    link: "/about",
    linkText: "Explore Vision",
    icon: ShieldCheck,
    bulletPoints: [
      "Strategic Corporate Leadership & Brand Direction",
      "Multi-sector Investment & Venture Development",
    ],
  },
  {
    id: "architects",
    name: "Fidelity Architects & Consulting Engineers",
    tagline: "“Building a legacy!”",
    subtagline: "“From design up to construction.”",
    category: "Architecture & Engineering",
    desc: "Full-service architectural design, engineering consultancy, and construction supervision. Combining aesthetic innovation with structural longevity for residential and commercial landmarks.",
    logo: "/logos/fidelity-architects.png",
    meta: "Addis Ababa | Wolaita Sodo",
    link: "/architects",
    linkText: "View Architecture Projects",
    icon: Building2,
    bulletPoints: [
      "Architectural Master Planning & 3D Modeling",
      "Construction Management & On-site Supervision",
    ],
  },
  {
    id: "furniture",
    name: "Fidelity Furniture & Interior Design",
    tagline: "“for elegant spaces!”",
    subtagline: "“Where quality meets elegance.”",
    category: "Furniture & Interior Design",
    desc: "Handcrafted solid Ethiopian Wanza wood tables, custom bedroom suites, storage beds, and changing tables designed by architects for lasting durability and timeless aesthetic appeal.",
    logo: "/logos/fidelity-furniture.png",
    meta: "Workshop: Wolaita Sodo - Greenland Sefer",
    link: "/furniture",
    linkText: "Order Furniture",
    icon: Sofa,
    bulletPoints: [
      "#ክብ_የቡና_ጠረጴዛ (Custom Solid Wanza Coffee Tables)",
      "On-Time Delivery Guarantee & Custom Workshop",
    ],
  },
  {
    id: "printing",
    name: "Fidelity Printing & Advertising",
    tagline: "“Stand out!”",
    category: "Printing & Advertising",
    desc: "High-impact commercial printing, outdoor signage, promotional media collateral, and brand identity execution helping businesses command market attention.",
    logo: "/logos/fidelity-printing.png",
    meta: "GM: Fidel Gebremedhin",
    link: "/printing",
    linkText: "Explore Printing Services",
    icon: Printer,
    bulletPoints: [
      "Large Format Printing & Custom Branding Collateral",
      "Commercial Signage & Advertising Campaigns",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function VenturesShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-6">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="text-center space-y-3 max-w-3xl mx-auto"
      >

        <span className="text-[11px] font-mono tracking-widest text-[#B08D57] uppercase font-bold px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 inline-block">
          One Vision • Four Specializations
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
          The Fidelity Business Group Ecosystem
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
          Each company operates with dedicated mastery under the strategic direction of Fidel Gebremedhin, bringing architectural precision to every discipline.
        </p>
      </motion.div>

      {/* 4 Companies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {companies.map((c) => {
          const IconComp = c.icon;
          return (
            <motion.div
              key={c.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 hover:border-[#C5A880]/60 hover:shadow-2xl hover:shadow-[#C5A880]/10 transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
            >
              {/* Subtle top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 relative rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-cover p-1"
                    />
                  </div>
                  <span className="text-[11px] font-mono bg-neutral-100 text-neutral-800 border border-neutral-200 px-3 py-1 rounded-full font-semibold">
                    {c.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950 group-hover:text-[#B08D57] transition-colors leading-snug">
                    {c.name}
                  </h3>
                  <p className="text-[#B08D57] text-xs sm:text-sm italic font-serif mt-1 font-medium">
                    {c.tagline}
                  </p>
                  {c.subtagline && (
                    <p className="text-xs text-neutral-500 font-mono mt-0.5">
                      {c.subtagline}
                    </p>
                  )}
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {c.desc}
                </p>

                <ul className="text-xs text-neutral-700 space-y-2 font-mono pt-1">
                  {c.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-mono font-medium">
                  {c.meta}
                </span>
                <Link
                  href={c.link}
                  className="text-xs font-bold text-neutral-950 group-hover:text-[#B08D57] flex items-center gap-1.5 transition-colors"
                >
                  <span>{c.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
