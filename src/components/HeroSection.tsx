
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30">
          AI-Powered Business Automation
        </Badge>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          Stop Losing Customers,{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Automate Your Bookings
          </span>{" "}
          and Support with AI
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          78% of Americans won't wait longer than 5 minutes before searching for alternatives. 
          Keep your customers engaged—automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4 hover-scale"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            📅 Book Your Free Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4 hover-scale"
            onClick={scrollToFeatures}
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 text-sm text-gray-400">
          <p>Trusted by clinics, real estate agencies, car dealerships, restaurants, and healthcare professionals</p>
        </div>
      </div>
    </section>
  );
};
