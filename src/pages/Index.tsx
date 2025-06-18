
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-black to-green-600/10 animate-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
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
