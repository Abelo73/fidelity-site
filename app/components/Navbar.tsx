"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X, Building2, Sofa, Printer, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Magnetic button physics state
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [phoneBouncing, setPhoneBouncing] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setBtnPos({
      x: (e.clientX - centerX) * 0.2,
      y: (e.clientY - centerY) * 0.2,
    });
  };

  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
    setPhoneBouncing(false);
  };

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_about"), href: "/about" },
    {
      name: t("nav_ventures"),
      href: "#",
      dropdown: [
        {
          title: "Fidelity Architects",
          desc: "Building a legacy!",
          href: "/architects",
          icon: Building2,
        },
        {
          title: "Fidelity Furniture",
          desc: "For elegant spaces!",
          href: "/furniture",
          icon: Sofa,
        },
        {
          title: "Fidelity Printing",
          desc: "Stand out!",
          href: "/printing",
          icon: Printer,
        },
      ],
    },
    { name: t("nav_gallery"), href: "/gallery" },
    { name: t("nav_contact"), href: "/contact" },
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="max-w-7xl mx-auto pointer-events-auto"
      >
        <div className="relative flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-md bg-white/85 border border-neutral-200/90 shadow-lg shadow-neutral-900/5">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-10 sm:h-10 relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 flex items-center justify-center shadow-inner flex-shrink-0"
            >
              <Image
                src="/logos/fidelity-business-group.png"
                alt="Fidelity Business Group Logo"
                fill
                className="object-cover p-1"
              />
            </motion.div>
            <div className="leading-tight">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-neutral-950 group-hover:text-[#B08D57] transition-colors block">
                FIDELITY
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-neutral-500 uppercase font-mono font-bold block -mt-0.5">
                Business Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      setVenturesOpen(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setVenturesOpen(false);
                    }}
                  >
                    <button className="relative px-3.5 py-2 rounded-full text-xs font-semibold text-neutral-700 hover:text-neutral-950 transition-colors flex items-center gap-1.5 focus:outline-none">
                      {link.name}
                      <motion.span
                        animate={{ rotate: venturesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                      </motion.span>
                      
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="navbar-hover"
                          className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Ventures Dropdown Menu */}
                    <AnimatePresence>
                      {venturesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-72 rounded-2xl p-2 bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-2xl z-50"
                        >
                          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-mono text-[#B08D57] font-bold">
                            Enterprise Divisions
                          </div>
                          {link.dropdown.map((sub) => {
                            const IconComp = sub.icon;
                            return (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-100 transition-all group/item"
                              >
                                <div className="w-9 h-9 relative rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover/item:bg-[#C5A880]/15 group-hover/item:text-[#B08D57] transition-colors border border-neutral-200">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-neutral-900 group-hover/item:text-[#B08D57] transition-colors">
                                    {sub.title}
                                  </div>
                                  <div className="text-[11px] text-neutral-500">
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-3.5 py-2 rounded-full text-xs font-semibold transition-colors ${
                    isActive
                      ? "text-neutral-950 font-bold"
                      : "text-neutral-700 hover:text-neutral-950"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-underline"
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#C5A880] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {hoveredIndex === index && !isActive && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher & Magnetic Call CTA */}
          <div className="flex items-center gap-2">
            {/* Language Switcher Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/90 text-neutral-800 text-[11px] font-mono font-bold hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shadow-sm"
              aria-label="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>{lang === "en" ? "अማርኛ" : "English"}</span>
            </motion.button>

            {/* Direct Call CTA Button */}
            <motion.a
              ref={buttonRef}
              href="tel:0911971800"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setPhoneBouncing(true)}
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
              className="relative group overflow-hidden px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-neutral-950 text-white font-bold text-xs shadow-md hover:shadow-xl hover:shadow-[#C5A880]/20 transition-all flex items-center gap-2 border border-neutral-800"
            >
              <motion.span
                animate={
                  phoneBouncing
                    ? { scale: [1, 1.3, 0.9, 1.15, 1], rotate: [0, -12, 12, -6, 0] }
                    : { scale: 1, rotate: 0 }
                }
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center p-1 rounded-full bg-[#C5A880] text-neutral-950"
              >
                <Phone className="w-3 h-3 fill-current" />
              </motion.span>

              <span className="font-mono tracking-tight font-bold text-[11px] sm:text-xs">0911 97 18 00</span>

              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-2 pointer-events-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-neutral-200 p-4 sm:p-5 shadow-2xl overflow-hidden text-neutral-900"
          >
            <div className="flex flex-col space-y-1.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                {t("nav_home")}
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                {t("nav_about")}
              </Link>

              <div className="pt-2 border-t border-neutral-100">
                <div className="px-3.5 py-1 text-[10px] font-mono text-[#B08D57] uppercase tracking-wider font-bold">
                  Enterprise Divisions
                </div>
                <Link
                  href="/architects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 flex items-center gap-2.5 font-medium"
                >
                  <Building2 className="w-4 h-4 text-[#B08D57]" />
                  Fidelity Architects
                </Link>
                <Link
                  href="/furniture"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 flex items-center gap-2.5 font-medium"
                >
                  <Sofa className="w-4 h-4 text-[#B08D57]" />
                  Fidelity Furniture
                </Link>
                <Link
                  href="/printing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 flex items-center gap-2.5 font-medium"
                >
                  <Printer className="w-4 h-4 text-[#B08D57]" />
                  Fidelity Printing
                </Link>
              </div>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                {t("nav_gallery")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-100 transition-colors"
              >
                {t("nav_contact")}
              </Link>

              {/* Language Switcher inside Mobile Drawer */}
              <div className="pt-2">
                <button
                  onClick={toggleLang}
                  className="w-full py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Languages className="w-4 h-4 text-[#B08D57]" />
                  <span>Switch Language: {lang === "en" ? "አማርኛ" : "English"}</span>
                </button>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:0911971800"
                  className="w-full text-center py-3 rounded-2xl bg-neutral-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-3.5 h-3.5 fill-current text-[#C5A880]" />
                  Call Direct: 0911 97 18 00
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
