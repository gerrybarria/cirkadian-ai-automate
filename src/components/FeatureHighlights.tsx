
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MessageCircle, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Automated Appointment Scheduling",
    description: "Seamless integration with calendars and minimal wait times",
    stat: "Reduce booking times from hours to seconds, increasing client retention by 40%",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: MessageCircle,
    title: "Intelligent Customer Support",
    description: "Real-time responses and 24/7 availability for your customers",
    stat: "Instant responses lead to 30% fewer lost sales opportunities",
    gradient: "from-green-600 to-blue-600"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a customer inquiry, even outside business hours",
    stat: "Capture 60% more leads with round-the-clock automation",
    gradient: "from-purple-600 to-green-600"
  },
  {
    icon: TrendingUp,
    title: "Increased Conversions",
    description: "Convert more prospects into paying customers automatically",
    stat: "Average 45% increase in booking conversion rates",
    gradient: "from-blue-600 to-green-600"
  }
];

export const FeatureHighlights = () => {
  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Powerful Features That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered automation platform transforms how you handle customer interactions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group hover-scale"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg p-3 border border-blue-600/30">
                  <p className="text-sm text-blue-300 font-medium">{feature.stat}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
