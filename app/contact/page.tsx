"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
          Direct Customer Service & Order Desk
        </span>
        <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">
          Contact Fidelity Business Group
        </h1>
        <p className="text-neutral-600 text-sm">
          Call us directly or send a message to order custom furniture, consult on architectural design, or place commercial print orders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Phone Links & Locations */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Call Cards */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-900">Direct Order Hotlines</h3>
            <div className="space-y-4">
              <a
                href="tel:0911971800"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-300 hover:border-neutral-900 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-lg">
                  📞
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-mono">Primary Line</div>
                  <div className="text-lg font-bold text-neutral-900 group-hover:underline">0911 97 18 00</div>
                </div>
              </a>

              <a
                href="tel:0916411237"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-700 border border-neutral-200 flex items-center justify-center font-bold text-lg">
                  📞
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-mono">Secondary Line</div>
                  <div className="text-lg font-bold text-neutral-900 group-hover:underline">0916 41 12 37</div>
                </div>
              </a>
            </div>

            <div className="pt-2 text-xs text-neutral-600">
              <span className="text-neutral-900 font-bold block mb-1">Email Inquiry:</span>
              <a href="mailto:fidelityarchitects@gmail.com" className="text-neutral-900 hover:underline font-mono font-semibold">
                fidelityarchitects@gmail.com
              </a>
            </div>
          </div>

          {/* Locations Card */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-900">Office & Workshop Locations</h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1 shadow-sm">
                <span className="text-neutral-900 font-bold block">1. Addis Ababa, Ethiopia</span>
                <span className="text-neutral-600">Corporate HQ & Architectural Design Studio</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1 shadow-sm">
                <span className="text-neutral-900 font-bold block">2. Wolaita Sodo Location</span>
                <span className="text-neutral-700">Greenland Sefer, near Hodiye Garage</span>
                <span className="text-neutral-500 block pt-1">(ወላይታ ሶዶ - ግሪንላንድ ሰፈር ሆድዬ ጋራዥ አጠገብ)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact & Order Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-900">Send an Order or Project Inquiry</h3>
          <p className="text-xs text-neutral-600">
            Select the enterprise division you wish to contact (Architects, Furniture, or Printing).
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="text-3xl">✅</div>
              <h4 className="text-lg font-bold text-neutral-900">Thank You for Reaching Out!</h4>
              <p className="text-xs text-emerald-800">
                Your message has been received. Our team will contact you via phone or email promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl bg-neutral-900 text-white font-bold text-xs hover:bg-neutral-800 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-neutral-800 font-semibold">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Abebe Bikila"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-neutral-800 font-semibold">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="0911..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-800 font-semibold">Enterprise Division *</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                >
                  <option value="furniture">Fidelity Furniture & Interior Design (#ክብ_የቡና_ጠረጴዛ / Custom Wood)</option>
                  <option value="architects">Fidelity Architects & Consulting Engineers (Design & Construction)</option>
                  <option value="printing">Fidelity Printing & Advertising (Commercial Signage & Media)</option>
                  <option value="general">Fidelity Business Group HQ</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-neutral-800 font-semibold">Message / Product Order Details *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your furniture requirements, architectural consultation needs, or print quantity..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm transition-all shadow-md"
              >
                Submit Inquiry
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
