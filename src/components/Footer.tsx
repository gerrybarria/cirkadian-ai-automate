
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already automating their customer interactions with CirkadianAI
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 hover-scale text-white border-0" 
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            📅 Book Your Free Demo Now
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-800">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
            CirkadianAI
          </div>
          <p className="text-gray-400 text-center">
            © 2024 CirkadianAI. All rights reserved. Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};
