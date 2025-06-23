
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedDemos } from "@/components/AnimatedDemos";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { IndustrySection } from "@/components/IndustrySection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-background text-dark-text overflow-x-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AnimatedDemos />
        <IntegrationsSection />
        <FeatureHighlights />
        <IndustrySection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
