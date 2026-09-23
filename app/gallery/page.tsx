"use client";

import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Solid Wanza Circular Coffee Table",
    category: "furniture",
    badge: "#ክብ_የቡና_ጠረጴዛ",
    image: "/images/wanza-coffee-table.png",
    subtitle: "Fidelity Furniture & Interior Design",
  },
  {
    id: 2,
    title: "Fidelity Business Group Brand Emblem",
    category: "branding",
    badge: "Brushed Steel Monogram",
    image: "/logos/fidelity-business-group.png",
    subtitle: "From thought to Empire!",
  },
  {
    id: 3,
    title: "3D Architectural Skyscraper Monogram",
    category: "architects",
    badge: "Building a legacy!",
    image: "/logos/fidelity-architects.png",
    subtitle: "Fidelity Architects & Consulting Engineers",
  },
  {
    id: 4,
    title: "Woodworking Precision Gear & Emblem",
    category: "furniture",
    badge: "for elegant spaces!",
    image: "/logos/fidelity-furniture.png",
    subtitle: "Fidelity Furniture & Interior Design",
  },
  {
    id: 5,
    title: "3D Metallic Gold Media Cylinder Roll",
    category: "printing",
    badge: "Stand out!",
    image: "/logos/fidelity-printing.png",
    subtitle: "Fidelity Printing & Advertising",
  },
  {
    id: 6,
    title: "Architect & CEO Fidel Gebremedhin Studio",
    category: "branding",
    badge: "Leadership",
    image: "/images/fidel-portrait.png",
    subtitle: "Founder Profile",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
          Visual Portfolio & Showcase
        </span>
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">
          Fidelity Group Portfolio Gallery
        </h1>
        <p className="text-neutral-600 text-sm">
          Filter through architectural designs, custom furniture pieces, corporate branding, and print media.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filter === "all" ? "bg-neutral-900 text-white font-bold border border-neutral-900 shadow-sm" : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
          }`}
        >
          All Works
        </button>
        <button
          onClick={() => setFilter("architects")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filter === "architects" ? "bg-neutral-900 text-white font-bold border border-neutral-900 shadow-sm" : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
          }`}
        >
          Architects
        </button>
        <button
          onClick={() => setFilter("furniture")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filter === "furniture" ? "bg-neutral-900 text-white font-bold border border-neutral-900 shadow-sm" : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
          }`}
        >
          Furniture & Interiors
        </button>
        <button
          onClick={() => setFilter("printing")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filter === "printing" ? "bg-neutral-900 text-white font-bold border border-neutral-900 shadow-sm" : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
          }`}
        >
          Printing & Advertising
        </button>
        <button
          onClick={() => setFilter("branding")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            filter === "branding" ? "bg-neutral-900 text-white font-bold border border-neutral-900 shadow-sm" : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
          }`}
        >
          Brand Identities
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-neutral-200 rounded-2xl overflow-hidden group hover:border-neutral-400 transition-all space-y-4 p-4 shadow-sm"
          >
            <div className="aspect-square relative rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60">
              <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                {item.badge}
              </span>
              <h3 className="text-base font-bold text-neutral-900 mt-1 group-hover:text-neutral-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
