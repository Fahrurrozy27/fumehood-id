import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ValuePropSections from "@/components/landing/ValuePropSection";
import ComparisonTable from "@/components/landing/ComparisonTable";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialMarquee from "@/components/landing/TestimonialMarquee";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppFloating from "@/components/landing/WhatsAppFloating";
import WikiGlossary from "@/components/landing/WikiGlossary";
import GatedDownloadModal from "@/components/landing/GatedDownloadModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-x-hidden text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Video Background - covers entire viewport under all elements */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 hidden md:block"
        >
          <source src="/molecule-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark green accent overlay to ensure contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#01251e]/60 via-slate-950/80 to-slate-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_45%)]" />
      </div>

      {/* Content Area - above video background */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <ValuePropSections />
        <ComparisonTable />
        <TestimonialMarquee />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>

      {/* WhatsApp Floating Contact Button */}
      <WhatsAppFloating />

      {/* Wikipedia Glossary Hover Preview Container */}
      <WikiGlossary />

      {/* Gated Brochure Download Modal */}
      <GatedDownloadModal />
    </main>
  );
}
