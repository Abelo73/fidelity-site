import HeroSection from "./components/HeroSection";
import TrustedTicker from "./components/TrustedTicker";
import VenturesShowcase from "./components/VenturesShowcase";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ExpandedProjectsGallery from "./components/ExpandedProjectsGallery";
import ProductShowcase from "./components/ProductShowcase";
import TestimonialSection from "./components/TestimonialSection";
import CtaBanner from "./components/CtaBanner";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-20 bg-white text-neutral-900">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. INFINITE FADING SCROLLING TRUSTED COMPANY TICKER */}
      <TrustedTicker />

      {/* 3. 4-COMPANIES SECTOR SHOWCASE */}
      <VenturesShowcase />

      {/* 4. REAL BUILT PROJECTS SHOWCASE (Leaning Tower G+1 & DICHA BOYS Store Design) */}
      <ProjectsShowcase />

      {/* 5. EXPANDED PROJECTS GALLERY (Filterable Master Gallery) */}
      <ExpandedProjectsGallery />

      {/* 6. ADONAY ETHIOPIAN TIKTOKER TESTIMONIAL SHOWCASE */}
      <TestimonialSection />

      {/* 7. FEATURED PRODUCT SHOWCASE: WANZA WOOD COFFEE TABLE */}
      <ProductShowcase />

      {/* 8. DIRECT ORDER CTA BANNER */}
      <CtaBanner />

    </div>
  );
}
