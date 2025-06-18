
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { AnimatedChatbot } from "@/components/AnimatedChatbot";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { IndustrySection } from "@/components/IndustrySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ChatWidget } from "@/components/ChatWidget";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,243,0.03),transparent_70%)]" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AnimatedChatbot />
        <FeatureHighlights />
        <IndustrySection />
        <TestimonialsSection />
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
};

export default Index;
