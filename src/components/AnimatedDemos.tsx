
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Car, Users } from "lucide-react";

const conversations = {
  scheduling: [
    { type: 'customer', text: "I need to schedule a consultation", delay: 1000 },
    { type: 'ai', text: "Perfect! I have availability this week. Which day works better for you?", delay: 1500 },
    { type: 'calendar', text: "📅 Creating appointment...", delay: 2000 },
    { type: 'ai', text: "✅ Appointment confirmed for Thursday 2PM. Reminder sent!", delay: 2500 },
  ],
  leads: [
    { type: 'customer', text: "I'm interested in a 3-bedroom house", delay: 1000 },
    { type: 'ai', text: "Great! What's your budget range and preferred location?", delay: 1500 },
    { type: 'customer', text: "$400k, downtown area", delay: 1800 },
    { type: 'sheet', text: "📊 Lead qualified and added to CRM", delay: 2200 },
  ],
  carSales: [
    { type: 'customer', text: "Looking for a reliable SUV", delay: 1000 },
    { type: 'ai', text: "Perfect timing! Check out this 2024 Honda CR-V 🚗", delay: 1500 },
    { type: 'car', text: "🚙 2024 Honda CR-V\n💰 $28,900\n⭐ 5-star safety rating", delay: 2000 },
    { type: 'ai', text: "Want to schedule a test drive? 🗓️", delay: 2500 },
  ],
  restaurant: [
    { type: 'customer', text: "Table for 4 at 7 PM tonight?", delay: 1000 },
    { type: 'ai', text: "7 PM is fully booked, but I have 6:30 PM or 8:30 PM available", delay: 1500 },
    { type: 'customer', text: "8:30 PM works!", delay: 1800 },
    { type: 'ai', text: "🍽️ Reserved! Table for 4 at 8:30 PM. Can I help with any dietary preferences?", delay: 2200 },
  ]
};

const industryTypes = [
  "Businesses", "Health Clinics", "Restaurants", 
  "Car Dealerships", "Real Estate Agents", "Lawyers", "Professionals"
];

export const AnimatedDemos = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<{[key: string]: number}>({
    scheduling: 0,
    leads: 0,
    carSales: 0,
    restaurant: 0
  });
  const [currentDemo, setCurrentDemo] = useState('scheduling');

  useEffect(() => {
    const industryInterval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industryTypes.length);
    }, 2000);

    return () => clearInterval(industryInterval);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const showNextMessage = (demo: string, index: number) => {
      const conversation = conversations[demo as keyof typeof conversations];
      if (index < conversation.length) {
        timeoutId = setTimeout(() => {
          setVisibleMessages(prev => ({ ...prev, [demo]: index + 1 }));
          showNextMessage(demo, index + 1);
        }, conversation[index].delay);
      } else {
        timeoutId = setTimeout(() => {
          setVisibleMessages(prev => ({ ...prev, [demo]: 0 }));
          showNextMessage(demo, 0);
        }, 3000);
      }
    };

    showNextMessage(currentDemo, 0);

    return () => clearTimeout(timeoutId);
  }, [currentDemo]);

  const renderMessage = (message: any, index: number) => {
    let bgColor = "bg-gray-900 text-white border border-gray-700";
    let icon = null;

    if (message.type === 'customer') {
      bgColor = "bg-black text-white";
    } else if (message.type === 'ai') {
      bgColor = "bg-white text-black border border-gray-200";
    } else if (message.type === 'calendar') {
      bgColor = "bg-blue-50 text-blue-800 border border-blue-200";
      icon = <Calendar className="w-3 h-3" />;
    } else if (message.type === 'sheet') {
      bgColor = "bg-green-50 text-green-800 border border-green-200";
      icon = <Users className="w-3 h-3" />;
    } else if (message.type === 'car') {
      bgColor = "bg-orange-50 text-orange-800 border border-orange-200";
      icon = <Car className="w-3 h-3" />;
    }

    return (
      <div
        key={index}
        className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-in`}
      >
        <div className={`max-w-xs px-4 py-3 rounded-2xl ${bgColor}`}>
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-xs opacity-75">
              {message.type === 'customer' ? 'Customer' : 
               message.type === 'ai' ? 'CirkadianAI' : 'System'}
            </span>
          </div>
          <p className="text-sm whitespace-pre-line">{message.text}</p>
        </div>
      </div>
    );
  };

  const demos = ['scheduling', 'leads', 'carSales', 'restaurant'];

  return (
    <section className="py-20 px-6 bg-white" id="automation-demo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">
            Stop Losing Customers,{" "}
            <span className="accent-primary">Automate Your Operation</span>{" "}
            with AI
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Specialized Solutions for{" "}
            <span 
              className="font-semibold text-black transition-all duration-500 inline-block"
              key={currentIndustry}
            >
              {industryTypes[currentIndustry]}
            </span>
          </p>
          
          <p className="text-lg text-gray-500 mb-12">
            Watch how seamlessly your customers interact with our AI across different scenarios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, idx) => (
            <Card 
              key={demo}
              className="bg-gray-50 border-gray-200 p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setCurrentDemo(demo)}
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-black capitalize mb-2">
                  {demo === 'carSales' ? 'Car Sales' : demo}
                </h3>
              </div>
              <div className="space-y-3 h-64 overflow-hidden">
                {conversations[demo as keyof typeof conversations]
                  .slice(0, visibleMessages[demo])
                  .map((message, index) => renderMessage(message, index))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
