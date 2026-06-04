
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ShaderWrapper from "@/components/landing/ShaderWrapper";
import ValuePropSections from "@/components/landing/ValuePropSection";
import ComparisonTable from "@/components/landing/ComparisonTable";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialMarquee from "@/components/landing/TestimonialMarquee";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppFloating from "@/components/landing/WhatsAppFloating";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">

      {/* Shader-covered area: Hero + Problem */}
      <ShaderWrapper>
        <HeroSection />
        <ProblemSection />
      </ShaderWrapper>

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Value Prop Sections (HEPA, Factory Direct, Garansi & Purna Jual) */}
      <ValuePropSections />

      {/* 6. Comparison Table */}
      <ComparisonTable />

      {/* 7. Auto-scrolling Testimonials */}
      <TestimonialMarquee />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Final CTA / Urgency */}
      <FinalCTA />

      {/* 10. Footer */}
      <Footer />

      {/* WhatsApp Floating Contact Button */}
      <WhatsAppFloating />
    </main>
  );
}
