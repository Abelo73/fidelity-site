"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Eye, X, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "architects" | "furniture" | "printing" | "branding";
  badge: string;
  image: string;
  subtitle: string;
  location: string;
  client: string;
  details: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Pure Wanza Solid Wood Coffee Table (#ክብ_የቡና_ጠረጴዛ)",
    category: "furniture",
    badge: "#ክብ_የቡና_ጠረጴዛ",
    image: "/images/wanza-coffee-table.png",
    subtitle: "Fidelity Furniture & Interior Design",
    location: "Wolaita Sodo & Addis Ababa",
    client: "Residential & Executive Lounges",
    details: "Handcrafted 100% pure Ethiopian Wanza wood with circular modern silhouette and industrial stability joinery.",
  },
  {
    id: 2,
    title: "Fidelity Business Group Brand Emblem",
    category: "branding",
    badge: "Brushed Steel Monogram",
    image: "/logos/fidelity-business-group.png",
    subtitle: "From thought to Empire!",
    location: "Addis Ababa Corporate HQ",
    client: "Fidelity Business Group",
    details: "Metallic architectural monograph representing structural integrity across all 4 enterprise divisions.",
  },
  {
    id: 3,
    title: "3D Architectural Skyscraper Blueprint Emblem",
    category: "architects",
    badge: "Building a legacy!",
    image: "/logos/fidelity-architects.png",
    subtitle: "Fidelity Architects & Consulting Engineers",
    location: "Wolaita Sodo & Addis Ababa",
    client: "EiABC Standards & WSU Faculty",
    details: "Architectural design, G+1 villa master plans, and photorealistic 3D building visualization.",
  },
  {
    id: 4,
    title: "Woodworking Precision Gear & Emblem",
    category: "furniture",
    badge: "for elegant spaces!",
    image: "/logos/fidelity-furniture.png",
    subtitle: "Fidelity Furniture & Interior Design",
    location: "Greenland Sefer Workshop",
    client: "Luxury Homeowners & Offices",
    details: "Custom timber joinery, nursery changing tables, hydraulic storage beds, and executive office desks.",
  },
  {
    id: 5,
    title: "3D Metallic Gold Media Cylinder Emblem",
    category: "printing",
    badge: "Stand out!",
    image: "/logos/fidelity-printing.png",
    subtitle: "Fidelity Printing & Advertising",
    location: "Addis Ababa & Sodo",
    client: "Commercial & Corporate Enterprises",
    details: "Illuminated 3D channel letters, large format flex banners, and corporate identity collateral.",
  },
  {
    id: 6,
    title: "Architect & CEO Fidel Gebremedhin Studio Profile",
    category: "branding",
    badge: "Leadership & Vision",
    image: "/images/fidel-portrait.png",
    subtitle: "Founder Profile",
    location: "EiABC Graduate / WSU Lecturer",
    client: "Fidelity Business Group",
    details: "Led by Architect Fidel Gebremedhin — directing architectural design, structural engineering, and social impact projects.",
  },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 relative overflow-hidden bg-blueprint-grid">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C5A880]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
            {t("gallery_tag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            {t("gallery_title")}
          </h1>
          <p className="text-neutral-600 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
            {t("gallery_desc")}
          </p>
        </motion.div>

        {/* Animated Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: "all", label: t("gallery_all") },
            { id: "architects", label: t("gallery_arch") },
            { id: "furniture", label: t("gallery_furniture") },
            { id: "printing", label: "Printing & Media" },
            { id: "branding", label: "Brand Identities" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all relative ${
                filter === tab.id
                  ? "bg-neutral-900 text-white shadow-lg shadow-neutral-900/20"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              {tab.label}
              {filter === tab.id && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 rounded-2xl bg-neutral-900 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white/80 backdrop-blur-md border border-neutral-200 rounded-3xl overflow-hidden group hover:border-[#C5A880] hover:shadow-2xl transition-all p-5 cursor-pointer relative"
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-neutral-900 font-bold text-xs shadow-xl flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#B08D57]" /> Inspect Specifications
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-[#B08D57] uppercase tracking-widest block font-bold">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 font-display group-hover:text-[#B08D57] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center font-bold"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video relative rounded-2xl overflow-hidden border border-neutral-200">
                <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest">
                  {selectedItem.badge}
                </span>
                <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {selectedItem.details}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div>
                  <span className="text-neutral-400 block text-[10px]">LOCATION:</span>
                  <span className="font-bold text-neutral-900">{selectedItem.location}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">CLIENT:</span>
                  <span className="font-bold text-neutral-900">{selectedItem.client}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="tel:0911971800"
                  className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <PhoneCall className="w-4 h-4 text-[#C5A880]" /> Order / Consult: 0911 97 18 00
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
