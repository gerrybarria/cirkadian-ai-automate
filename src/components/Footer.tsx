
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-text">
            Ready to{" "}
            <span className="gradient-text-primary">
              Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-dark-text-muted mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already automating their customer interactions with CirkadianAI
          </p>
          <Button 
            size="lg" 
            className="btn-gradient-primary text-lg px-8 py-4 hover-scale text-white border-0 shadow-lg" 
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            📅 Book Your Free Demo Now
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-dark-border">
          <div className="text-2xl font-bold gradient-text-primary mb-4 md:mb-0">
            CirkadianAI
          </div>
          <p className="text-dark-text-subtle text-center">
            © 2024 CirkadianAI. All rights reserved. Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};
