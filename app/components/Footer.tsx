import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Founder Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-lg border border-neutral-200 bg-white overflow-hidden">
                <Image
                  src="/logos/fidelity-business-group.png"
                  alt="Fidelity Business Group"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-xl text-neutral-900 tracking-tight">
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

          {/* Column 2: Our 4 Companies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
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
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
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
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
              Community & Tags
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-600 font-mono">
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#ክብ_የቡና_ጠረጴዛ</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#Round_Coffee_Table</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#የቤት_ውበት</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#ለእንጨት_ስፍራዎች</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#EiABC</span>
              <span className="bg-white border border-neutral-200 px-2.5 py-1 rounded-lg">#WSU_Lecturer</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Fidelity Business Group. All rights reserved. Founded by Fidel Gebremedhin.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6 font-medium">
            <Link href="/about" className="hover:text-neutral-900">About Founder</Link>
            <Link href="/contact" className="hover:text-neutral-900">Direct Orders</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

