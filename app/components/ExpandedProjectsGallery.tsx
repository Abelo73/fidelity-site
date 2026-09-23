"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Sofa, Sparkles, Phone, X, CheckCircle2, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ProjectItem {
  id: string;
  category: "arch" | "interior" | "furniture";
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  location: string;
  features: string[];
}

export default function ExpandedProjectsGallery() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "arch" | "interior" | "furniture">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "leaning-tower",
      category: "arch",
      title: "The Leaning Tower (የዘመናዊ ማማ) G+1 Villa",
      subtitle: "Residential G+1 Architectural Masterpiece",
      desc: "Full architectural master planning, structural design, 3D modeling, and on-site construction supervision for a modern G+1 villa in Wolaita Sodo.",
      image: "/images/fidel-portrait.png",
      location: "Wolaita Sodo, Ethiopia",
      features: ["Contemporary Facade", "Glass Balconies", "Full Construction Supervision"],
    },
    {
      id: "dicha-boys",
      category: "interior",
      title: "DICHA BOYS Store & Brand Identity",
      subtitle: "Commercial Retail Interior & Social Impact",
      desc: "Pro-bono commercial interior architecture and retail branding designed in collaboration with Adonay Mada for youth entrepreneurs.",
      image: "/images/fidel-portrait.png",
      location: "Wolaita Sodo, Ethiopia",
      features: ["Custom Lighting Shelf Walls", "Adonay Mada Collaboration", "Gifata Blessing Project"],
    },
    {
      id: "wanza-coffee-table",
      category: "furniture",
      title: "Solid Ethiopian Wanza Coffee Table Series",
      subtitle: "#ክብ_የቡና_ጠረጴዛ • Handcrafted Living Room Suite",
      desc: "100% pure solid Wanza wood round coffee tables with natural grain finish designed by architects for durability and aesthetic elegance.",
      image: "/images/wanza-coffee-table.png",
      location: "Fidelity Workshop (Greenland Sefer)",
      features: ["100% Pure Wanza Wood", "Architect-Designed Stability", "On-Time Delivery Guarantee"],
    },
    {
      id: "commercial-complex",
      category: "arch",
      title: "Wolaita Sodo Commercial Complex Master Plan",
      subtitle: "Multi-Storey Commercial Center Proposal",
      desc: "Architectural 3D urban rendering and structural planning for a multi-sector commercial retail & office plaza.",
      image: "/images/fidel-portrait.png",
      location: "Wolaita Sodo, Ethiopia",
      features: ["3D Render Supervision", "Retail Spatial Planning", "Sustainable Concrete Formwork"],
    },
    {
      id: "executive-wanza-suite",
      category: "furniture",
      title: "Executive Solid Wanza Boardroom Suite",
      subtitle: "Custom Office & Conference Table",
      desc: "Architect-crafted 10-seater solid Wanza wood conference table with integrated cable management and executive matching credenza.",
      image: "/images/wanza-coffee-table.png",
      location: "Addis Ababa & Sodo Corporate Offices",
      features: ["Solid Hardwood Construction", "Executive Ergonomics", "Custom Stain Finish"],
    },
    {
      id: "bedroom-storage-suite",
      category: "interior",
      title: "Luxury Storage Bed & Bedroom Suite",
      subtitle: "Space-Saving Architectural Furniture",
      desc: "Custom bedroom set with built-in underbed storage drawers, matching nightstands, and integrated LED accent headboard.",
      image: "/images/fidel-portrait.png",
      location: "Residential Client Homes",
      features: ["Underbed Storage Drawers", "Integrated Nightstands", "Architectural Joinery"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-[11px] font-mono tracking-widest text-[#B08D57] uppercase font-bold px-3.5 py-1 rounded-full bg-white border border-[#C5A880]/40 shadow-sm inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
          <span>{t("gallery_tag")}</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-950 tracking-tight">
          {t("gallery_title")}
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
          {t("gallery_desc")}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-sans transition-all ${
            activeTab === "all"
              ? "bg-neutral-950 text-white shadow-md"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          {t("gallery_all")}
        </button>
        <button
          onClick={() => setActiveTab("arch")}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-sans transition-all ${
            activeTab === "arch"
              ? "bg-neutral-950 text-white shadow-md"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          {t("gallery_arch")}
        </button>
        <button
          onClick={() => setActiveTab("interior")}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-sans transition-all ${
            activeTab === "interior"
              ? "bg-neutral-950 text-white shadow-md"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          {t("gallery_interior")}
        </button>
        <button
          onClick={() => setActiveTab("furniture")}
          className={`px-4 py-2 rounded-full text-xs font-semibold font-sans transition-all ${
            activeTab === "furniture"
              ? "bg-neutral-950 text-white shadow-md"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }`}
        >
          {t("gallery_furniture")}
        </button>
      </div>

      {/* Gallery Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="bg-white border border-neutral-200/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#C5A880] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-950 shadow-md group-hover:bg-[#C5A880] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-[10px] font-mono text-[#B08D57] font-bold uppercase tracking-wider">
                    {p.subtitle}
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-950 group-hover:text-[#B08D57] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B08D57]" />
                  <span>{p.location}</span>
                </span>
                <span className="font-bold text-neutral-900 group-hover:underline">View Specs &rarr;</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative overflow-hidden text-neutral-900"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#C5A880] text-neutral-950 text-[10px] font-mono font-bold">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                    {selectedProject.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono font-bold text-neutral-900 uppercase">
                      Key Architectural Specifications:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-700">
                      {selectedProject.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-mono text-neutral-500">
                    📍 {selectedProject.location}
                  </span>
                  <a
                    href="tel:0911971800"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-950 hover:bg-[#B08D57] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A880] fill-current" />
                    <span>Inquire About Project: 0911 97 18 00</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
