
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
    <section className="py-20 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-text">
          We Adapt and Power{" "}
          <span className="gradient-text-primary">Your Workflow</span>
        </h2>
        
        <p className="text-xl text-dark-text-muted mb-16 max-w-2xl mx-auto">
          We can integrate with your actual working method
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {/* First set of logos */}
            {integrations.map((integration, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex flex-col items-center space-y-2 hover:scale-110 transition-transform"
              >
                <integration.icon className="w-12 h-12 text-dark-text-muted hover:text-brand-primary transition-colors" />
                <span className="text-xs text-dark-text-subtle font-medium">{integration.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {integrations.map((integration, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex flex-col items-center space-y-2 hover:scale-110 transition-transform"
              >
                <integration.icon className="w-12 h-12 text-dark-text-muted hover:text-brand-primary transition-colors" />
                <span className="text-xs text-dark-text-subtle font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
