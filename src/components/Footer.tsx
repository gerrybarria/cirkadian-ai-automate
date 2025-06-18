import { Button } from "@/components/ui/button";
export const Footer = () => {
  return <footer className="bg-gray-900/50 border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already automating their customer interactions with CirkadianAI
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4 hover-scale" onClick={() => window.open('https://calendly.com', '_blank')}>
            📅 Book Your Free Demo Now
          </Button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              CirkadianAI
            </div>
            <p className="text-gray-400">
              Automating business processes with AI-powered solutions for modern enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Appointment Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lead Qualification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hospitality</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 CirkadianAI. All rights reserved. Built with ❤️</p>
        </div>
      </div>
    </footer>;
};