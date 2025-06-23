
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Flowing wave background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-800/20"></div>
        <svg className="absolute bottom-0 left-0 w-full h-96" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="url(#wave-gradient)" 
            fillOpacity="0.3" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-80" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="url(#wave-gradient-2)" 
            fillOpacity="0.2" 
            d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,197.3C672,203,768,181,864,181.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <Badge variant="secondary" className="mb-6 bg-gray-800/80 text-gray-200 border-gray-600">
          AI-Powered Business Automation
        </Badge>
        
        <h1 className="text-4xl font-bold mb-8 leading-tight animate-fade-in text-white md:text-6xl">
          Stop Losing Customers,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Automate Your Bookings
          </span>{" "}
          and Support with AI
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          78% of Americans won't wait longer than 5 minutes before searching for alternatives. 
          Keep your customers engaged—automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 hover-scale border-0" onClick={() => window.open('https://calendly.com', '_blank')}>
            📅 Book Your Free Demo
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-gray-400">
          <p>Trusted by clinics, real estate agencies, car dealerships, restaurants, and healthcare professionals</p>
        </div>
      </div>
    </section>
  );
};
