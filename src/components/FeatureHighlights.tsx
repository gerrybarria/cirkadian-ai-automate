
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Automated Appointment Scheduling",
    description: "Seamless integration with calendars and minimal wait times",
    stat: "Reduce booking times from hours to seconds, increasing client retention by 40%"
  },
  {
    icon: MessageCircle,
    title: "Intelligent Customer Support",
    description: "Real-time responses and 24/7 availability for your customers",
    stat: "Instant responses lead to 30% fewer lost sales opportunities"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer inquiry, even outside business hours",
    stat: "Capture 60% more leads with round-the-clock automation"
  },
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    description: "Convert more prospects into paying customers automatically",
    stat: "Average 45% increase in booking conversion rates"
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 px-6 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
            Powerful Features That{" "}
            <span className="accent-primary">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered automation platform transforms how you handle customer interactions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 hover:border-gray-300 transition-all duration-300 group hover-scale"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                  <p className="text-sm text-gray-700 font-medium">{feature.stat}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
