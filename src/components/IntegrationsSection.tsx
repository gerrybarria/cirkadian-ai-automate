
import { MessageCircle, Send, Slack, Calendar, Facebook, Instagram, Globe, CreditCard, FileSpreadsheet, CalendarDays, Briefcase, CheckSquare } from "lucide-react";

const integrations = [
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Telegram", icon: Send },
  { name: "Slack", icon: Slack },
  { name: "Monday", icon: Calendar },
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "WordPress", icon: Globe },
  { name: "Stripe", icon: CreditCard },
  { name: "Google Sheets", icon: FileSpreadsheet },
  { name: "Google Calendar", icon: CalendarDays },
  { name: "Asana", icon: Briefcase },
  { name: "Google Tasks", icon: CheckSquare },
];

export const IntegrationsSection = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          We Adapt and Power{" "}
          <span className="accent-primary">Your Workflow</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          We can integrate with your actual working method
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {/* First set of logos */}
            {integrations.map((integration, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <integration.icon className="w-8 h-8 text-black" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {integrations.map((integration, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <integration.icon className="w-8 h-8 text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
