import Link from "next/link";
import Image from "next/image";
import { Code2, ExternalLink, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Founder Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-lg border border-neutral-200 bg-white overflow-hidden shadow-sm">
                <Image
                  src="/logos/fidelity-business-group.png"
                  alt="Fidelity Business Group"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-xl text-neutral-900 tracking-tight font-display">
                FIDELITY BUSINESS GROUP
              </span>
            </div>
            <p className="text-neutral-600 text-xs leading-relaxed max-w-sm">
              Led by <strong className="text-neutral-900">Fidel Gebremedhin</strong> (Architect, Lecturer, Designer & CEO). 
              A multi-sector group delivering architect-guided construction, luxury custom furniture, and commercial advertising across Ethiopia.
            </p>
            <div className="text-xs text-neutral-500 font-mono tracking-wide italic">
              &ldquo;From thought to Empire!&rdquo;
            </div>
          </div>

          {/* Column 2: Our Companies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-display">
              Ventures
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-medium">
              <li>
                <Link href="/architects" className="hover:text-black transition-colors">
                  Fidelity Architects & Consulting Engineers
                </Link>
              </li>
              <li>
                <Link href="/furniture" className="hover:text-black transition-colors">
                  Fidelity Furniture & Interior Design
                </Link>
              </li>
              <li>
                <Link href="/printing" className="hover:text-black transition-colors">
                  Fidelity Printing & Advertising
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Fidelity Business Group HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-display">
              Locations & Contact
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <div>
                <span className="text-neutral-900 font-semibold block">Addis Ababa, Ethiopia</span>
                <span className="text-neutral-500">Corporate HQ & Architectural Studio</span>
              </div>
              <div>
                <span className="text-neutral-900 font-semibold block">Wolaita Sodo</span>
                <span className="text-neutral-500">Greenland Sefer, near Hodiye Garage</span>
              </div>
              <div className="pt-2 text-neutral-900 font-mono space-y-1 font-bold">
                <a href="tel:0911971800" className="block hover:underline">0911 97 18 00</a>
                <a href="tel:0916411237" className="block hover:underline">0916 41 12 37</a>
              </div>
            </div>
          </div>

          {/* Column 4: Key Hashtags & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider font-display">
              Community & Tags
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-600 font-mono">
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#ክብ_የቡና_ጠረጴዛ</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#ለቄንጠኛ_ስፍራዎች</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#Round_Coffee_Table</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#EiABC</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#WSU_Lecturer</span>
            </div>
          </div>
        </div>

        {/* Developer Advertising Credit Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-bold text-[#C5A880]">
              <Code2 className="w-4 h-4 text-[#C5A880]" />
              <span>WEBSITE ENGINEERED & CRAFTED BY ABEL ADISU</span>
            </div>
            <p className="text-xs text-neutral-300 font-sans">
              Looking to build or upgrade a high-performance modern web platform? Contact Software Developer <strong className="text-white">Abel Adisu</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <a
              href="tel:0934777843"
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all flex items-center gap-1.5 border border-white/20"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
              0934 77 78 43
            </a>

            <a
              href="https://that-is-me.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-[#C5A880] hover:bg-[#B08D57] text-neutral-950 font-bold transition-all flex items-center gap-1.5 shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Portfolio
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/abeladisunugatu/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
              title="Abel Adisu LinkedIn"
            >
              <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/abelo_73/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
              title="Abel Adisu Instagram"
            >
              <svg className="w-4 h-4 fill-pink-400" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Fidelity Business Group. All rights reserved. Directed by Fidel Gebremedhin.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6 font-medium">
            <Link href="/about" className="hover:text-neutral-900">About Founder</Link>
            <Link href="/contact" className="hover:text-neutral-900">Direct Orders</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
