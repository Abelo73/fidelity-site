"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "am";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About Fidel",
    nav_ventures: "Ventures",
    nav_projects: "Projects",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_call: "0911 97 18 00",

    // Hero
    hero_badge: "FIDEL THE ARCHITECT • ETHIOPIAN ARCHITECTURAL ENTERPRISE",
    hero_title_1: "Architecting Legacies,",
    hero_title_2: "Crafting Elegant Spaces.",
    hero_bio: "An Ethiopian Architect, Lecturer, Entrepreneur & Thought Leader striving to make a difference.",
    hero_subtitle:
      "Directed by Fidel Gebremedhin — Fusing contemporary architectural mastery, urban design, structural engineering, and solid Ethiopian Wanza wood craftsmanship across 4 enterprise divisions.",
    hero_cta_order: "Order Now: 0911 97 18 00",
    hero_cta_projects: "Explore Built Projects",
    hero_discipline_arch: "Architect (EiABC)",
    hero_discipline_furn: "Furniture Designer",
    hero_discipline_gm: "General Manager",
    hero_discipline_lect: "WSU Lecturer",
    hero_active_founder: "Connected • Founder & Lead Architect",
    hero_hubs: "Addis Ababa & Wolaita Sodo",

    // Ticker
    ticker_title: "Trusted by 100+ Enterprise Clients, Institutions & Residential Landmarks across Ethiopia",

    // Projects Section
    proj_tag: "Portfolio & Social Impact",
    proj_title: "Featured Architectural Landmarks & Interior Projects",
    proj_desc: "Realized architectural designs, G+1 residential towers, and commercial interior transformations led by Fidel Gebremedhin.",
    proj_1_title: "The Leaning Tower (የዘመናዊ ማማ)",
    proj_1_cat: "Residential G+1 Villa",
    proj_1_desc: "Contemporary architectural design and on-site construction supervision in Wolaita Sodo.",
    proj_2_title: "DICHA BOYS Store & Branding",
    proj_2_cat: "Commercial Interior & Social Impact",
    proj_2_desc: "Pro-bono commercial interior design and branding in collaboration with Adonay Mada for youth entrepreneurs.",
    proj_3_title: "Solid Wanza Luxury Living Suite",
    proj_3_cat: "Custom Interior & Furniture",
    proj_3_desc: "Handcrafted 100% pure Wanza wood round coffee tables and custom interior suites.",

    // Gallery
    gallery_tag: "Comprehensive Project Gallery",
    gallery_title: "Architectural Design, Master Planning & Furniture Works",
    gallery_desc: "Explore realized residential landmarks, commercial interior transformations, and custom Ethiopian Wanza wood craftsmanship.",
    gallery_all: "All Works",
    gallery_arch: "Architecture & Supervision",
    gallery_interior: "Interior & Commercial",
    gallery_furniture: "Solid Wanza Furniture",

    // Testimonials
    testi_tag: "Client & Creator Testimonials",
    testi_title: "What Leaders, Clients & Creators Say About Fidel",

    testi_1_quote:
      "“Fidel Gebremedhin is not just an incredible architect — he's a true leader who gives back! His interior design for the DICHA BOYS store and custom Wanza furniture transformed our vision into reality.”",
    testi_1_author: "Adonay Mada",
    testi_1_role: "Creator & Collaborator (@adonay_official • Gifata Blessing Project)",

    testi_2_quote:
      "“Fidelity Architects delivered structural perfection for our mixed-use commercial plaza. Architect Fidel’s on-site construction supervision and EiABC architectural standards are unmatched in Ethiopia!”",
    testi_2_author: "Dr. Dawit Wolde",
    testi_2_role: "Commercial Real Estate Developer (Addis Ababa)",

    testi_3_quote:
      "“Our G+1 residential villa designed by Fidel Gebremedhin is the talk of Wolaita Sodo! The solid Wanza wood coffee tables and interior joinery were delivered right on schedule.”",
    testi_3_author: "Bethlehem Tadesse",
    testi_3_role: "Residential Villa Client (Wolaita Sodo)",

    testi_4_quote:
      "“Working alongside Fidel as a university lecturer and practitioner reveals his deep dedication to architectural education and master planning excellence.”",
    testi_4_author: "Eng. Tewodros Assefa",
    testi_4_role: "Department Head & Consulting Engineer (WSU Academic Faculty)",

    // Ecosystem
    eco_tag: "One Vision • Four Specializations",
    eco_title: "The Fidelity Business Group Ecosystem",
    eco_desc:
      "Each enterprise division operates with dedicated mastery under the strategic direction of Fidel Gebremedhin.",

    // CTA
    cta_title: "Ready to Bring Your Architectural & Spatial Vision to Life?",
    cta_desc:
      "Contact Fidel The Architect today for architectural master planning, residential building supervision, custom Wanza furniture, or branding solutions.",
    cta_phone1: "0911 97 18 00",
    cta_phone2: "0916 41 12 37",
    cta_loc: "📍 Addis Ababa & Wolaita Sodo (Greenland Sefer, near Hodiye Garage)",
  },
  am: {
    // Nav
    nav_home: "ዋና ገጽ",
    nav_about: "ስለ ፊደል ገብረመድህን",
    nav_ventures: "ድርጅቶቻችን",
    nav_projects: "ፕሮጀክቶች",
    nav_gallery: "ጋለሪ",
    nav_contact: "አድራሻ",
    nav_call: "0911 97 18 00",

    // Hero
    hero_badge: "ፊደል ዘ አርክቴክት • የሕንፃ እና የውስጥ ዲዛይነር",
    hero_title_1: "ታሪክ የሚሰሩ ህንፃዎች፣",
    hero_title_2: "ውብ ቦታዎችን መፍጠር።",
    hero_bio: "በሀገራችን ውስጥ በአርክቴክቸር፣ በግንባታው ዘርፍ እና በከተሞች ላይ ልዩነት ለመፍጠር የሚጋደል ኢትዮጵያዊ አርክቴክት፣ የዩኒቨርሲቲ መምህር እና ስራ ፈጣሪ!",
    hero_subtitle:
      "በአርክቴክት ፊደል ገብረመድህን የሚመራ — ዘመናዊ የሕንፃ አርክቴክቸር፣ የከተማ ዲዛይን፣ የግንባታ ቁጥጥር እና በንፁህ ዋንዛ የተሰሩ የቤት እቃዎችን በአራት ድርጅቶቻችን የሚያቀርብ።",
    hero_cta_order: "አሁኑኑ ይዘዙ: 0911 97 18 00",
    hero_cta_projects: "የተሰሩ ፕሮጀክቶችን ይመልከቱ",
    hero_discipline_arch: "አርክቴክት (EiABC)",
    hero_discipline_furn: "የቤት ዲዛይነር",
    hero_discipline_gm: "ዋና ስራ አስኪያጅ",
    hero_discipline_lect: "የወ/ሶ/ዩ መምህር",
    hero_active_founder: "በስራ ላይ • መስራች እና ዋና አርክቴክት",
    hero_hubs: "አዲስ አበባ እና ወላይታ ሶዶ",

    // Ticker
    ticker_title: "በመላው ኢትዮጵያ በ100+ ድርጅቶች፣ ዩኒቨርሲቲዎች እና ግለሰቦች የተመሰከረለት",

    // Projects Section
    proj_tag: "የተሰሩ ስራዎች እና ማህበራዊ አስተዋጽኦ",
    proj_title: "የተገነቡ የሕንፃ እና የውስጥ ዲዛይን ፕሮጀክቶች",
    proj_desc: "በአርክቴክት ፊደል ገብረመድህን የተነደፉ እና በግንባታ ቁጥጥር የተጠናቀቁ መኖሪያ ቤቶች እና የንግድ ቦታዎች።",
    proj_1_title: "የዘመናዊ ማማ G+1 የመኖሪያ ቤት",
    proj_1_cat: "ዘመናዊ የመኖሪያ ህንፃ አርክቴክቸር",
    proj_1_desc: "በወላይታ ሶዶ ከተማ በከፍተኛ የሕንፃ ጥበብ እና ግንባታ ቁጥጥር የተሰራ የG+1 መኖሪያ ቤት።",
    proj_2_title: "ዲቻ ቦይስ (DICHA BOYS) የሱቅ ዲዛይን",
    proj_2_cat: "የንግድ ቦታ ዲዛይን እና ብራንዲንግ",
    proj_2_desc: "ከአዶናይ ማዳ ጋር በመተባበር ለወጣት ስራ ፈጣሪዎች በነጻ የተሰራ የሱቅ የውስጥ ዲዛይን እና ብራንዲንግ።",
    proj_3_title: "የንፁህ ዋንዛ የቡና ጠረጴዛ እና የቤት እቃዎች",
    proj_3_cat: "የውስጥ ዲዛይን እና የቤት እቃ",
    proj_3_desc: "በአርክቴክቶች የተነደፉ 100% በንፁህ ዋንዛ የተሰሩ ቅልብጭ ያሉ የቡና ጠረጴዛዎች እና የመኝታ ክፍል ስብስቦች።",

    // Gallery
    gallery_tag: "ሙሉ የተሰሩ ስራዎች ጋለሪ",
    gallery_title: "የሕንፃ ዲዛይን፣ ማስተር ፕላን እና የቤት እቃዎች ጋለሪ",
    gallery_desc: "በአርክቴክት ፊደል ገብረመድህን የተነደፉ መኖሪያ ቤቶች፣ የንግድ ቦታዎች እና በንፁህ ዋንዛ የተሰሩ የቤት እቃዎችን ይመልከቱ።",
    gallery_all: "ሁሉም ስራዎች",
    gallery_arch: "የሕንፃ ዲዛይን እና ቁጥጥር",
    gallery_interior: "የውስጥ ዲዛይን እና ንግድ",
    gallery_furniture: "የንፁህ ዋንዛ የቤት እቃዎች",

    // Testimonials
    testi_tag: "የደንበኞቻችን እና ታዋቂ ሰዎች ምስክርነት",
    testi_title: "ታዋቂ ሰዎች እና ደንበኞች ስለ ፊደል ገብረመድህን ምን ይላሉ?",

    testi_1_quote:
      "“ፊደል ገብረመድህን ጎበዝ አርክቴክት ብቻ ሳይሆን ማህበራዊ ሀላፊነቱን የሚወጣ እውነተኛ መሪ ነው! ከእርሱ ጋር የሰራነው የዲቻ ቦይስ (DICHA BOYS) የሱቅ ዲዛይን እና በዋንዛ የተሰሩ እቃዎች ስራችንን ወደ ላቀ ደረጃ አሸጋግሮታል!”",
    testi_1_author: "አዶናይ ማዳ",
    testi_1_role: "ታዋቂው የቲክቶክ ቪዲዮ ፈጣሪ እና ስራ ፈጣሪ (@adonay_official)",

    testi_2_quote:
      "“ፊደሊቲ አርክቴክቶች ለንግድ ህንፃችን የሰሩት ዲዛይን እና የግንባታ ቁጥጥር በኢትዮጵያ ውስጥ ወደር የሌለው ነው! የአርክቴክት ፊደል የሙያ ብቃት እና ታማኝነት በእውነት ያስመሰግነዋል።”",
    testi_2_author: "ዶ/ር ዳዊት ወልዴ",
    testi_2_role: "የንግድ ህንፃ አልሚ (አዲስ አበባ)",

    testi_3_quote:
      "“ፊደል ገብረመድህን የሰራረን G+1 መኖሪያ ቤት የሰፈራችን ውበት ሆኗል! በንፁህ ዋንዛ የተሰሩት የቡና ጠረጴዛዎች እና የመኝታ እቃዎች በቀጠሮ ቀናቸው ደርሰውልናል።”",
    testi_3_author: "ቤተልሔም ታደሰ",
    testi_3_role: "የመኖሪያ ቤት ደንበኛ (ወላይታ ሶዶ)",

    testi_4_quote:
      "“ከአርክቴክት ፊደል ጋር በዩኒቨርሲቲ መምህርነት እና በሕንፃ ዲዛይን መስራት ለትምህርት እና ለሙያ እድገት ያለውን ከፍተኛ ፍቅር እና ትጋት ያሳያል።”",
    testi_4_author: "ኢንጂነር ቴዎድሮስ አሰፋ",
    testi_4_role: "የዲፓርትመንት ኃላፊ እና አማካሪ ኢንጂነር (ወ/ሶ/ዩ)",

    // Ecosystem
    eco_tag: "አንድ ራዕይ • አራት ልዩ ሙያዎች",
    eco_title: "የፊደሊቲ ቢዝነስ ግሩፕ ተቋማት",
    eco_desc: "እያንዳንዱ ዘርፍ በአርክቴክት ፊደል ገብረመድህን ጥበብ የተቃኘ እና ለላቀ ጥራት የተዘጋጀ ነው።",

    // CTA
    cta_title: "የሕንፃ ወይም የቤት ዲዛይን ራዕይዎን ወደ እውን ለመቀየር ዝግጁ ነዎት?",
    cta_desc: "ለሕንፃ ዲዛይን፣ ለግንባታ ቁጥጥር፣ ለንፁህ ዋንዛ የቤት እቃዎች ወይም ለማስታወቂያ ስራዎች አሁኑኑ ፊደል ዘ አርክቴክት ያናግሩ።",
    cta_phone1: "0911 97 18 00",
    cta_phone2: "0916 41 12 37",
    cta_loc: "📍 አዲስ አበባ እና ወላይታ ሶዶ (ግሪንላንድ ሰፈር፣ ሆዲዬ ጋራዥ አጠገብ)",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "am" : "en"));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
