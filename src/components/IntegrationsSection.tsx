
import { WhatsApp, Telegram, Slack, Monday, Facebook, Instagram, Wordpress, Stripe, GoogleSheets, GoogleCalendar, Asana, GoogleTasks } from "lucide-react";

const integrations = [
  { name: "WhatsApp", icon: WhatsApp },
  { name: "Telegram", icon: Telegram },
  { name: "Slack", icon: Slack },
  { name: "Monday", icon: Monday },
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "WordPress", icon: Wordpress },
  { name: "Stripe", icon: Stripe },
  { name: "Google Sheets", icon: GoogleSheets },
  { name: "Google Calendar", icon: GoogleCalendar },
  { name: "Asana", icon: Asana },
  { name: "Google Tasks", icon: GoogleTasks },
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
