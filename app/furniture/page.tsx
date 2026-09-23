import Image from "next/image";
import Link from "next/link";

export default function FurniturePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-white">
      
      {/* Furniture Hero */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                <Image src="/logos/fidelity-furniture.png" alt="Fidelity Furniture Logo" fill className="object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider block">
                  Custom Craftsmanship & Interiors
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  Fidelity Furniture & Interior Design
                </h1>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-neutral-900 text-lg font-mono italic font-bold">&ldquo;for elegant spaces!&rdquo;</p>
              <p className="text-neutral-500 text-sm font-semibold">&ldquo;Where quality meets elegance.&rdquo;</p>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed">
              Elevate your residential or office space with architect-designed furniture crafted from pure Ethiopian Wanza wood and premium hardware.
              Specializing in custom circular coffee tables, nursery changing sets, and ergonomic bedroom suites.
            </p>

            <div className="inline-block px-4 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-800 text-xs font-mono shadow-sm">
              ⚡ Timely delivery is what sets us apart! በቀጠሮ ቀን ማድረስ መለያችን ነው!
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:0911971800"
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md"
              >
                Order Now: 0911 97 18 00
              </a>
              <a
                href="tel:0916411237"
                className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200 text-xs font-bold transition-all"
              >
                Call: 0916 41 12 37
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full aspect-square relative rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
              <Image src="/images/wanza-coffee-table.png" alt="Wanza Wood Coffee Table Showcase" fill className="object-cover" />
            </div>
          </div>

        </div>
      </div>

      {/* Signature Furniture Showcase Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Signature Product Collections</h2>
          <p className="text-neutral-500 text-xs sm:text-sm">Architect-guided structural precision for home and office environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Item 1 */}
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden p-6 space-y-4 hover:border-neutral-400 hover:shadow-lg transition-all">
            <div className="text-xs font-mono text-neutral-900 font-bold">#ክብ_የቡና_ጠረጴዛ</div>
            <h3 className="text-xl font-bold text-neutral-900">Pure Wanza Circular Coffee Tables</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              ለመኖርያ ቤትም ሆነ ለንግድ ቤት የሚሆኑ በንፁህ ዋንዛ ብቻ የተሰሩ ቅልብጭ ያሉ አነስተኛ የቡና ጠረጴዛዎች! Handcrafted solid Wanza wood coffee tables with smooth wood grain and industrial-grade stability.
            </p>
            <div className="pt-2 text-xs text-neutral-900 font-bold">Price: Custom by Dimensions</div>
          </div>

          {/* Item 2 */}
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden p-6 space-y-4 hover:border-neutral-400 hover:shadow-lg transition-all">
            <div className="text-xs font-mono text-neutral-900 font-bold">Nursery & Family Collection</div>
            <h3 className="text-xl font-bold text-neutral-900">Changing Tables & Nursery Sets</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Engineered with safety, comfort, and stability for growing families. Premium smooth drawer glides, soft edges, and eco-friendly wood finishes.
            </p>
            <div className="pt-2 text-xs text-neutral-900 font-bold">Architect-Certified Safety</div>
          </div>

          {/* Item 3 */}
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden p-6 space-y-4 hover:border-neutral-400 hover:shadow-lg transition-all">
            <div className="text-xs font-mono text-neutral-900 font-bold">Bedroom & Living Suites</div>
            <h3 className="text-xl font-bold text-neutral-900">Handcrafted Storage Beds & Wardrobes</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Under-bed hydraulic storage mechanisms, custom headboards, and space-saving wardrobes blending modern design with traditional Ethiopian wood joinery.
            </p>
            <div className="pt-2 text-xs text-neutral-900 font-bold">Special Promotional Rates</div>
          </div>

        </div>
      </div>

      {/* Workshop Location Banner */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
        <div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-bold">Showroom & Workshop Location</div>
          <div className="text-xl font-bold text-neutral-900 mt-1">Wolaita Sodo - Greenland Sefer</div>
          <div className="text-xs text-neutral-500">ወላይታ ሶዶ - ግሪንላንድ ሰፈር ሆድዬ ጋራዥ አጠገብ (Near Hodiye Garage)</div>
        </div>
        <a
          href="tel:0911971800"
          className="px-6 py-3 rounded-xl bg-neutral-900 text-white font-bold text-xs shadow-md hover:bg-neutral-800 transition-colors"
        >
          Call Workshop Directly
        </a>
      </div>

    </div>
  );
}

