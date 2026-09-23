"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { PhoneCall, Mail, MapPin, Send, CheckCircle2, Building, Sparkles, Navigation, Compass, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const googleMapsUrl =
    "https://www.google.com/maps/place/Green+Land+Hotel/@6.8630342,37.7569704,17z/data=!3m1!4b1!4m6!3m5!1s0x17b1b083bf37f165:0xb8de2aac2c40782c!8m2!3d6.8630289!4d37.7595453!16s%2Fg%2F11b7q5_9lj?entry=ttu";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-20 relative overflow-hidden bg-blueprint-grid">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C5A880]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
            {t("contact_badge")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            {t("contact_title")}
          </h1>
          <p className="text-neutral-600 text-xs sm:text-sm font-sans max-w-2xl mx-auto">
            {t("contact_desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Call Cards & Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Phone Call Cards */}
            <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-xl shadow-neutral-200/50">
              <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                {t("contact_hotlines")}
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:0911971800"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900 text-white border border-neutral-800 transition-all shadow-md group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880] text-neutral-950 flex items-center justify-center font-bold text-lg shrink-0 shadow-inner">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 font-mono">{t("contact_line1")}</div>
                    <div className="text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors">
                      0911 97 18 00
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:0916411237"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 transition-all shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-800 border border-neutral-200 flex items-center justify-center font-bold text-lg shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-mono">{t("contact_line2")}</div>
                    <div className="text-lg font-bold text-neutral-900 group-hover:text-[#B08D57] transition-colors">
                      0916 41 12 37
                    </div>
                  </div>
                </motion.a>
              </div>

              <div className="pt-2 text-xs text-neutral-600 border-t border-neutral-100 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B08D57]" />
                <span className="text-neutral-900 font-bold">{t("contact_email_label")}</span>
                <a href="mailto:fidelityarchitects@gmail.com" className="text-[#B08D57] hover:underline font-mono font-semibold">
                  fidelityarchitects@gmail.com
                </a>
              </div>
            </div>

            {/* Locations Card */}
            <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-xl shadow-neutral-200/50">
              <h3 className="text-xl font-extrabold text-neutral-900 font-display">
                {t("contact_locations_title")}
              </h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                    <Building className="w-4 h-4 text-[#B08D57]" />
                    {t("contact_loc1_name")}
                  </div>
                  <div className="text-neutral-600 font-sans">{t("contact_loc1_desc")}</div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-neutral-900 text-sm">
                    <MapPin className="w-4 h-4 text-[#B08D57]" />
                    {t("contact_loc2_name")}
                  </div>
                  <div className="text-neutral-700 font-sans">{t("contact_loc2_desc")}</div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 pt-2 text-[#B08D57] font-bold hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Navigate via Google Maps →
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Order Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl shadow-neutral-200/60"
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-neutral-900 font-display">
                {t("contact_form_title")}
              </h3>
              <p className="text-xs text-neutral-600 font-sans">
                {t("contact_form_desc")}
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 font-display">{t("contact_form_success")}</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto font-sans leading-relaxed">
                  {t("contact_form_success_sub")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-2xl bg-neutral-900 text-white font-bold text-xs hover:bg-neutral-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-neutral-800 font-semibold">{t("contact_form_name")}</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Abebe Bikila"
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#C5A880] focus:bg-white transition-all font-sans text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-neutral-800 font-semibold">{t("contact_form_phone")}</label>
                    <input
                      required
                      type="tel"
                      placeholder="0911..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#C5A880] focus:bg-white transition-all font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-800 font-semibold">{t("contact_form_division")}</label>
                  <select
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-[#C5A880] focus:bg-white transition-all font-sans text-xs"
                  >
                    <option value="furniture">Fidelity Furniture & Interior Design (#ክብ_የቡና_ጠረጴዛ / Custom Wood)</option>
                    <option value="architects">Fidelity Architects & Consulting Engineers (Design & Supervision)</option>
                    <option value="printing">Fidelity Printing & Advertising (3D Signage & Media)</option>
                    <option value="general">Fidelity Business Group HQ</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-800 font-semibold">{t("contact_form_msg")}</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your furniture specifications, architectural project requirements, or print quantity..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#C5A880] focus:bg-white transition-all font-sans text-xs"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-all shadow-xl shadow-neutral-900/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#C5A880]" />
                  {t("contact_form_submit")}
                </motion.button>
              </form>
            )}

          </motion.div>

        </div>

        {/* Dedicated Interactive Google Map & Step-by-Step Directions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-100">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#B08D57] font-bold uppercase tracking-widest block flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#B08D57]" />
                Interactive Workshop Map & Navigation Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display">
                Visit Our Showroom & Workshop in Wolaita Sodo
              </h2>
              <p className="text-xs text-neutral-600 font-sans">
                Located in Greenland Sefer near Green Land Hotel & Hodiye Garage (ወላይታ ሶዶ - ግሪንላንድ ሰፈር፣ ሆድዬ ጋራዥ አጠገብ).
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs shadow-lg transition-all flex items-center gap-2 shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#C5A880]" />
              Open Live Google Maps Navigation
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Embedded Interactive Map Frame */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-inner h-[380px] sm:h-[420px] relative bg-neutral-100">
              <iframe
                title="Fidelity Business Group Location - Green Land Hotel Wolaita Sodo"
                src="https://maps.google.com/maps?q=6.8630289,37.7595453&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-200 text-xs font-mono font-bold text-neutral-900 shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>📍 Green Land Hotel / Greenland Sefer, Sodo</span>
              </div>
            </div>

            {/* Navigation Directions Cards */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B08D57]" />
                Navigation Cues & Direct Landmarks
              </h3>

              <div className="space-y-3 text-xs font-sans">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="font-mono text-[10px] text-[#B08D57] font-bold block uppercase">Primary Landmark 01</span>
                  <div className="font-bold text-neutral-900">Green Land Hotel (ግሪንላንድ ሆቴል)</div>
                  <p className="text-neutral-500 leading-relaxed">Located precisely at coordinates 6.8630° N, 37.7595° E in Wolaita Sodo.</p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="font-mono text-[10px] text-[#B08D57] font-bold block uppercase">Workshop Entrance 02</span>
                  <div className="font-bold text-neutral-900">Hodiye Garage (ሆድዬ ጋራዥ አጠገብ)</div>
                  <p className="text-neutral-500 leading-relaxed">Our Solid Wanza wood workshop & furniture showroom is adjacent to Hodiye Garage.</p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                  <span className="font-mono text-[10px] text-amber-800 font-bold block uppercase">Direct Assistance Hotline</span>
                  <div className="font-bold text-neutral-900">Lost on your way? Call us!</div>
                  <a href="tel:0911971800" className="text-amber-900 font-mono font-bold hover:underline block pt-0.5">
                    📞 0911 97 18 00 / 0916 41 12 37
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
