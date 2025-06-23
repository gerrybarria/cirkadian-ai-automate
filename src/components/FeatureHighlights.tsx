
import { Calendar, MessageCircle, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Automated Appointment Scheduling",
    description: "Seamless integration with calendars and minimal wait times. Reduce booking times from hours to seconds, increasing client retention by 40%"
  },
  {
    icon: MessageCircle,
    title: "Intelligent Customer Support", 
    description: "Real-time responses and 24/7 availability for your customers. Instant responses lead to 30% fewer lost sales opportunities"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer inquiry, even outside business hours. Capture 60% more leads with round-the-clock automation"
  },
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    description: "Convert more prospects into paying customers automatically. Average 45% increase in booking conversion rates"
  },
  {
    icon: MessageCircle,
    title: "Reliability and Trust",
    description: "We believe that establishing a trusted partnership in business is the only way to success. It's the way that we've chosen."
  },
  {
    icon: Calendar,
    title: "Rapid Implementation",
    description: "From agile to DevOps to continuous delivery, we use modern development approaches to work better, faster, and be more transparent."
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 px-6 bg-black" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Powerful Features That{" "}
            <span className="text-professional-accent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-professional-text-secondary max-w-3xl mx-auto">
            Our AI-powered automation platform transforms how you handle customer interactions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-professional-accent flex items-center justify-center shadow-lg">
                  <feature.icon className="h-4 w-4 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-professional-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-professional-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
