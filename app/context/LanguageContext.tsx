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

    // Architects Page
    arch_badge: "Engineering & Construction Division",
    arch_title: "Fidelity Architects & Consulting Engineers",
    arch_motto1: "“Building a legacy!”",
    arch_motto2: "“From design up to construction.”",
    arch_bio: "Founded and led by CEO Fidel Gebremedhin (EiABC Graduate & WSU Lecturer), Fidelity Architects combines structural rigor with futuristic architectural aesthetics. We manage complete lifecycles — from preliminary conceptual blueprints to full construction execution.",
    arch_cta_call: "Consult an Architect: 0911 97 18 00",
    arch_cta_inquiry: "Send RFP / Project Inquiry",
    arch_services_title: "Our Core Architecture & Engineering Services",
    arch_services_desc: "End-to-end architectural planning, structural supervision, and building solutions.",
    arch_s1_title: "Architectural Design & 3D Visualization",
    arch_s1_desc: "Residential, commercial, and mixed-use architectural planning. Photorealistic 3D modeling, floor plans, and elevation renderings.",
    arch_s2_title: "Construction Supervision & Quality Auditing",
    arch_s2_desc: "On-site quality assurance, structural auditing, contractor supervision, and compliance with Ethiopian building standards.",
    arch_s3_title: "Turnkey Project Execution & Handover",
    arch_s3_desc: "Managing complete construction projects from groundbreaking foundations through interior fitting and final handover.",

    // Furniture Page
    furn_badge: "Custom Craftsmanship & Interiors",
    furn_title: "Fidelity Furniture & Interior Design",
    furn_motto1: "“for elegant spaces!”",
    furn_motto2: "“Where quality meets elegance.”",
    furn_bio: "Elevate your residential or office space with architect-designed furniture crafted from 100% pure Ethiopian Wanza wood and premium hardware. Specializing in custom circular coffee tables, nursery changing sets, and ergonomic bedroom suites.",
    furn_on_time: "⚡ Timely delivery is what sets us apart! በቀጠሮ ቀን ማድረስ መለያችን ነው!",
    furn_cta_order: "Order Custom Woodwork: 0911 97 18 00",
    furn_cta_call2: "Call Workshop: 0916 41 12 37",
    furn_catalog_title: "Signature Wanza Product Collections",
    furn_catalog_desc: "Architect-guided structural precision for home and commercial environments.",
    furn_p1_badge: "#ክብ_የቡና_ጠረጴዛ",
    furn_p1_title: "Pure Wanza Circular Coffee Tables",
    furn_p1_desc: "Handcrafted solid Wanza wood coffee tables with smooth wood grain finish and industrial-grade stability. Perfect for luxury homes and office lounges.",
    furn_p2_badge: "Nursery & Family Collection",
    furn_p2_title: "Changing Tables & Nursery Sets",
    furn_p2_desc: "Engineered with safety, comfort, and stability for growing families. Premium smooth drawer glides, rounded safety edges, and eco-friendly wood finishes.",
    furn_p3_badge: "Bedroom & Living Suites",
    furn_p3_title: "Handcrafted Storage Beds & Wardrobes",
    furn_p3_desc: "Under-bed hydraulic storage mechanisms, custom headboards, and space-saving wardrobes blending modern design with traditional Ethiopian joinery.",
    furn_tv_badge: "#for_elegant_spaces!",
    furn_tv_title: "Decorate Small Spaces With Modern Style! (Modern TV Stand)",
    furn_tv_desc: "This Fidelity Furniture’s TV stand is the ideal choice for keeping all your electronics organized without taking up too much room.",
    furn_workshop_loc: "Showroom & Workshop Location",
    furn_workshop_addr: "Wolaita Sodo - Greenland Sefer, near Hodiye Garage (ወላይታ ሶዶ - ግሪንላንድ ሰፈር ሆድዬ ጋራዥ አጠገብ)",

    // Printing Page
    print_badge: "Media & Advertising Collateral Division",
    print_title: "Fidelity Printing & Advertising",
    print_motto: "“Stand out!”",
    print_bio: "General Managed by Fidel Gebremedhin since September 2021. We empower businesses, institutions, and brands across Ethiopia to capture market leadership through high-precision commercial printing, illuminated signage, and strategic advertising media.",
    print_cta_quote: "Request Print Quote: 0911 97 18 00",
    print_cta_desk: "Contact Advertising Desk",
    print_services_title: "Commercial Advertising & Print Capabilities",
    print_services_desc: "High resolution output across outdoor signage, branding, and publication media.",
    print_s1_title: "Large Format Outdoor Signage",
    print_s1_desc: "Illuminated 3D channel letters, flex banners, vinyl billboards, and commercial building fascia signs designed to endure weather elements.",
    print_s2_title: "Corporate Identity Collateral",
    print_s2_desc: "Premium textured business cards, corporate brochures, letterheads, branded apparel, calendars, and promotional giveaway items.",
    print_s3_title: "Event Branding & Exhibition Packaging",
    print_s3_desc: "Roll-up banners, backdrop walls, booth branding, and high resolution digital offset print materials for expos and conferences.",

    // Contact Page
    contact_badge: "Direct Customer Service & Order Desk",
    contact_title: "Contact Fidelity Business Group",
    contact_desc: "Call us directly or send a message to order custom furniture, consult on architectural design, or place commercial print orders.",
    contact_hotlines: "Direct Order Hotlines",
    contact_line1: "Primary Order Line",
    contact_line2: "Secondary Workshop Line",
    contact_email_label: "Official Inquiry Email:",
    contact_locations_title: "Office & Workshop Locations",
    contact_loc1_name: "1. Addis Ababa, Ethiopia",
    contact_loc1_desc: "Corporate HQ & Architectural Design Studio",
    contact_loc2_name: "2. Wolaita Sodo Location",
    contact_loc2_desc: "Greenland Sefer, near Hodiye Garage (ወላይታ ሶዶ - ግሪንላንድ ሰፈር ሆድዬ ጋራዥ አጠገብ)",
    contact_form_title: "Send an Order or Project Inquiry",
    contact_form_desc: "Select the enterprise division you wish to contact (Architects, Furniture, or Printing).",
    contact_form_name: "Your Full Name *",
    contact_form_phone: "Phone Number *",
    contact_form_division: "Enterprise Division *",
    contact_form_msg: "Message / Product Order Details *",
    contact_form_submit: "Submit Project Inquiry",
    contact_form_success: "Thank You for Reaching Out!",
    contact_form_success_sub: "Your message has been received. Architect Fidel's team will contact you via phone or email promptly.",
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

    // Architects Page
    arch_badge: "የሕንፃ ዲዛይን እና የግንባታ ክፍል",
    arch_title: "ፊደሊቲ አርክቴክስ እና ኮንሰልቲንግ ኢንጂነርስ",
    arch_motto1: "“ታሪክ የሚሰሩ ህንፃዎች!”",
    arch_motto2: "“ከዲዛይን እስከ ግንባታ ማጠናቀቅ።”",
    arch_bio: "በዋና ስራ አስኪያጅ አርክቴክት ፊደል ገብረመድህን (የEiABC ተመረቂ እና የወ/ሶ/ዩ መምህር) የሚመራው ፊደሊቲ አርክቴክስ ከፍተኛ የሕንፃ ጥበብን እና ጥንካሬን አዋህዶ ያቀርባል። ከየመጀመሪያው ረቂቅ ንድፍ ጀምሮ እስከ ሙሉ ግንባታ ቁጥጥር ድረስ እንሰራለን።",
    arch_cta_call: "አርክቴክት ያማክሩ: 0911 97 18 00",
    arch_cta_inquiry: "የፕሮጀክት ጥያቄ ይላኩ",
    arch_services_title: "ዋና የሕንፃ እና የምህንድስና አገልግሎቶቻችን",
    arch_services_desc: "ከመነሻ ንድፍ እስከ ግንባታ ማጠናቀቅ ሙሉ የአርክቴክቸር አገልግሎት።",
    arch_s1_title: "የሕንፃ ዲዛይን እና 3D ማሳያ (Visualization)",
    arch_s1_desc: "የመኖሪያ፣ የንግድ እና የባለብዙ አገልግሎት ህንፃዎች ንድፍ። እውነተኛ የሚመስሉ 3D ማሳያዎች፣ የወለል ፕላኖች እና የህንፃ ውጫዊ እይታዎች።",
    arch_s2_title: "የግንባታ ቁጥጥር እና የጥራት ምርመራ",
    arch_s2_desc: "በቦታው ላይ የሚደረግ የጥራት ቁጥጥር፣ የህንፃ ጥንካሬ ምርመራ፣ የኮንትራክተሮች ቁጥጥር እና ከኢትዮጵያ የህንፃ ህግጋት ጋር መጣጣም።",
    arch_s3_title: "ሙሉ ግንባታ ማጠናቀቅ (Turnkey Projects)",
    arch_s3_desc: "ከመሰረት ቁፋሮ ጀምሮ እስከ የውስጥ ዲዛይን እና ቁልፍ ማስረከብ ድረስ ሙሉ የግንባታ ፕሮጀክቶችን በኃላፊነት መስራት።",

    // Furniture Page
    furn_badge: "የቤት እቃዎች እና የውስጥ ዲዛይን",
    furn_title: "ፊደሊቲ ፈርኒቸር እና ኢንቴሪየር ዲዛይን",
    furn_motto1: "“ለሚያቡበቡ ቦታዎች!”",
    furn_motto2: "“ጥራት ከውበት ጋር የሚገናኝበት።”",
    furn_bio: "የመኖሪያ ወይም ቢሮዎን በአርክቴክቶች በተነደፉ 100% በንፁህ ዋንዛ እና ጥራት ባላቸው እቃዎች በተሰሩ የቤት እቃዎች ያድምቁ። በክብ የቡና ጠረጴዛዎች፣ የህፃናት መቀየሪያዎች እና የመኝታ ክፍል እቃዎች ላይ እንሰራለን።",
    furn_on_time: "⚡ በቀጠሮ ቀን ማድረስ መለያችን ነው! Timely delivery is what sets us apart!",
    furn_cta_order: "የዋንዛ እቃ ይዘዙ: 0911 97 18 00",
    furn_cta_call2: "ወደ ዎርክሾፕ ይደውሉ: 0916 41 12 37",
    furn_catalog_title: "የንፁህ ዋንዛ እቃዎች ስብስብ",
    furn_catalog_desc: "በአርክቴክቶች የተቀረጹ እና ለረጅም ጊዜ የሚቆዩ የቤት እና ቢሮ እቃዎች።",
    furn_p1_badge: "#ክብ_የቡና_ጠረጴዛ",
    furn_p1_title: "ንፁህ ዋንዛ ክብ የቡና ጠረጴዛዎች",
    furn_p1_desc: "ለመኖርያ ቤትም ሆነ ለንግድ ቤት የሚሆኑ በንፁህ ዋንዛ ብቻ የተሰሩ ቅልብጭ ያሉ አነስተኛ የቡና ጠረጴዛዎች! ከፍተኛ ጥራት እና ውበት ያላቸው።",
    furn_p2_badge: "የህፃናት እና የቤተሰብ ስብስብ",
    furn_p2_title: "የህፃናት ልብስ መቀየሪያዎች እና ሳጥኖች",
    furn_p2_desc: "ለቤተሰብ ምቾት እና ደህንነት ታስበው በአርክቴክቶች የተነደፉ። ለስላሳ የካቢኔ መሳቢያዎች፣ ክብ ማዕዘኖች እና ከኬሚካል ነፃ የሆኑ ማጠናቀቂያዎች።",
    furn_p3_badge: "የመኝታ እና የሳሎን እቃዎች",
    furn_p3_title: "የመኝታ አልጋዎች እና የልብስ ቁምሳጥኖች",
    furn_p3_desc: "ከአልጋ ስር እቃ ማስቀመጫ ያላቸው hydrolic አልጋዎች፣ የልብስ ቁምሳጥኖች እና ዘመናዊ ዲዛይን ከሀገር በቀል የዋንዛ ጥበብ ጋር።",
    furn_tv_badge: "#ለቄንጠኛ_ስፍራዎች!",
    furn_tv_title: "ጠባብ ቦታን በዘመናዊ ስታይል ያስውቡ! (የቲቪ ስታንድ)",
    furn_tv_desc: "ይህ የፊደሊቲ ፈርኒቸር የቲቪ ስታንድ ብዙ ቦታ ሳይይዝ ሁሉንም የኤሌክትሮኒክስ ዕቃዎችዎን በሥርዓት ለመያዝ ተመራጭ ነው።",
    furn_workshop_loc: "የእቃዎች ማሳያ እና ዎርክሾፕ አድራሻ",
    furn_workshop_addr: "ወላይታ ሶዶ - ግሪንላንድ ሰፈር ሆድዬ ጋራዥ አጠገብ (Wolaita Sodo - Greenland Sefer)",

    // Printing Page
    print_badge: "ማስታወቂያ እና የህትመት ስራዎች",
    print_title: "ፊደሊቲ ፕሪንቲንግ እና ማስታወቂያ",
    print_motto: "“ጎልተው ይታዩ!”",
    print_bio: "ከመስከረም 2014 ዓ.ም ጀምሮ በአርክቴክት ፊደል ገብረመድህን የሚመራ። በመላው ኢትዮጵያ የሚገኙ ድርጅቶችን፣ ተቋማትን እና ንግዶችን በከፍተኛ ጥራት የህትመት፣ የበራሩ 3D ማስታወቂያዎች እና የብራንዲንግ ስራዎች እናጎለብታለን።",
    print_cta_quote: "የህትመት ዋጋ ይጠይቁ: 0911 97 18 00",
    print_cta_desk: "የማስታወቂያ ክፍልን ያናግሩ",
    print_services_title: "የማስታወቂያ እና የህትመት አቅሞቻችን",
    print_services_desc: "በሁሉም የህትመት እና የማስታወቂያ ዘርፎች የላቀ ጥራት ያላቸው ውጤቶች።",
    print_s1_title: "የውጪ 3D እና የበራሩ ማስታወቂያዎች",
    print_s1_desc: "በራሪ 3D ፊደላት፣ ፍሌክስ ባነሮች፣ የቪኒል ቢልቦርዶች እና የህንፃ ላይ ማስታወቂያዎች ከአየር ንብረት የሚጠበቁ።",
    print_s2_title: "የድርጅት መታወቂያ እና ህትመቶች",
    print_s2_desc: "ጥራት ያላቸው ቢዝነስ ካርዶች፣ ፕሮፌሽናል ብሮሹሮች፣ ሌተርሄዶች፣ የድርጅት አልባሳት፣ ካላንደሮች እና የስጦታ እቃዎች።",
    print_s3_title: "የኤግዚቢሽን እና ሁነቶች ብራንዲንግ",
    print_s3_desc: "ሮል አፕ ባነሮች፣ የጀርባ ቪዲዮ/ባነር ግድግዳዎች፣ የስታንድ ብራንዲንግ እና ከፍተኛ ጥራት ያላቸው የኦፍሴት ህትመቶች።",

    // Contact Page
    contact_badge: "የቀጥታ ደንበኞች አገልግሎት እና ትዕዛዝ መቀበያ",
    contact_title: "ፊደሊቲ ቢዝነስ ግሩፕን ያናግሩ",
    contact_desc: "የቤት እቃዎችን ለማዘዝ፣ በአርክቴክቸር ዲዛይን ለማማከር ወይም የማስታወቂያ ህትመቶችን ለማዘዝ በቀጥታ ይደውሉልን ወይም መልእክት ይላኩ።",
    contact_hotlines: "የቀጥታ ማዘዣ ስልኮች",
    contact_line1: "ዋና ማዘዣ መስመር",
    contact_line2: "ሁለተኛ የዎርክሾፕ መስመር",
    contact_email_label: "የኢሜይል አድራሻ:",
    contact_locations_title: "የቢሮ እና ዎርክሾፕ አድራሻዎች",
    contact_loc1_name: "1. አዲስ አበባ፣ ኢትዮጵያ",
    contact_loc1_desc: "ዋና መስሪያ ቤት እና የአርክቴክቸር ዲዛይን ስቱዲዮ",
    contact_loc2_name: "2. ወላይታ ሶዶ አድራሻ",
    contact_loc2_desc: "ግሪንላንድ ሰፈር፣ ሆዲዬ ጋራዥ አጠገብ (Wolaita Sodo - Greenland Sefer)",
    contact_form_title: "የፕሮጀክት ወይም የትዕዛዝ ጥያቄ ይላኩ",
    contact_form_desc: "ልታናግሩት የሚፈልጉትን የድርጅታችንን ዘርፍ ይምረጡ (አርክቴክቸር፣ የቤት እቃ፣ ወይም ህትመት)።",
    contact_form_name: "ሙሉ ስምዎ *",
    contact_form_phone: "ስልክ ቁጥር *",
    contact_form_division: "የድርጅቱ ዘርፍ *",
    contact_form_msg: "የመልእክቱ / የትዕዛዙ ዝርዝር *",
    contact_form_submit: "ጥያቄውን ላክ",
    contact_form_success: "ስላናገሩን እናመሰግናለን!",
    contact_form_success_sub: "መልእክትዎ ደርሶናል! በአርክቴክት ፊደል የሚመራው ቡድናችን በቅርቡ በስልክ ወይም በኢሜይል ያናግርዎታል።",
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
