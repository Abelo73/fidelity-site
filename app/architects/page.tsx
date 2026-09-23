import Image from "next/image";
import Link from "next/link";

export default function ArchitectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-white">
      
      {/* Company Hero */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                <Image src="/logos/fidelity-architects.png" alt="Fidelity Architects Logo" fill className="object-cover" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider block">
                  Engineering & Construction
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  Fidelity Architects & Consulting Engineers
                </h1>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-neutral-900 text-lg font-mono italic font-bold">&ldquo;Building a legacy!&rdquo;</p>
              <p className="text-neutral-500 text-sm font-semibold">&ldquo;From design up to construction.&rdquo;</p>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed">
              Founded and led by CEO Fidel Gebremedhin (EiABC Graduate & WSU Lecturer), Fidelity Architects combines structural rigor with futuristic architectural aesthetics. We manage complete lifecycles — from preliminary conceptual blueprints to full construction execution.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:0911971800"
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md"
              >
                Consult an Architect: 0911 97 18 00
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-200 text-xs font-bold transition-all"
              >
                Send RFP / Inquiry
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
              <Image src="/logos/fidelity-architects.png" alt="Logo Render" fill className="object-cover" />
            </div>
          </div>

        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Our Core Architecture Services</h2>
          <p className="text-neutral-500 text-xs sm:text-sm">End-to-end design, supervision, and building solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 hover:border-neutral-400 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-base">
              01
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Architectural Design & 3D Visualization</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Residential, commercial, and mixed-use architectural planning. photorealistic 3D modeling, floor plans, and elevation renderings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 hover:border-neutral-400 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-base">
              02
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Construction Supervision</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              On-site quality assurance, structural auditing, contractor supervision, and compliance with Ethiopian building standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 hover:border-neutral-400 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-base">
              03
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Turnkey Project Execution</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Managing complete construction projects from groundbreaking foundations through interior fitting and final handover.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

