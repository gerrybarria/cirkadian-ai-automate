
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-background/95 backdrop-blur-lg border-b border-dark-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text-primary">
              CirkadianAI
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-dark-text-muted hover:text-brand-primary transition-colors">Features</a>
            <a href="#industries" className="text-dark-text-muted hover:text-brand-primary transition-colors">Industries</a>
            <a href="#testimonials" className="text-dark-text-muted hover:text-brand-primary transition-colors">Reviews</a>
            <Button 
              className="btn-gradient-primary text-white hover-scale border-0 shadow-lg"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Book Free Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
