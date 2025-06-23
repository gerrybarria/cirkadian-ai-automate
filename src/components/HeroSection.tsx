
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-black">
      {/* Professional dark background with subtle green accents */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-professional-accent/5 via-black to-professional-accent/5"></div>
        <svg className="absolute bottom-0 left-0 w-full h-96" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="url(#wave-gradient)" 
            fillOpacity="0.1" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FF88" />
              <stop offset="50%" stopColor="#39FF14" />
              <stop offset="100%" stopColor="#00FF88" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <Badge variant="secondary" className="mb-6 bg-professional-surface border-professional-border text-professional-text-muted">
          AI-Powered Business Automation
        </Badge>
        
        <h1 className="text-4xl font-bold mb-8 leading-tight animate-fade-in text-white md:text-6xl">
          Stop Losing Customers,{" "}
          <span className="text-professional-accent">
            Automate Your Bookings
          </span>{" "}
          and Support with AI
        </h1>
        
        <p className="text-xl md:text-2xl text-professional-text-secondary mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          78% of Americans won't wait longer than 5 minutes before searching for alternatives. 
          Keep your customers engaged—automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="btn-gradient-primary text-lg px-8 py-4 hover-scale shadow-lg" 
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            📅 Book Your Free Demo
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-professional-text-muted">
          <p>Trusted by clinics, real estate agencies, car dealerships, restaurants, and healthcare professionals</p>
        </div>
      </div>
    </section>
  );
};
