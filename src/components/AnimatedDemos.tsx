import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Car, Users } from "lucide-react";
const conversations = {
  scheduling: [{
    type: 'customer',
    text: "I need to schedule a consultation",
    delay: 1000
  }, {
    type: 'ai',
    text: "Perfect! I have availability this week. Which day works better for you?",
    delay: 1500
  }, {
    type: 'calendar',
    text: "📅 Creating appointment...",
    delay: 2000
  }, {
    type: 'ai',
    text: "✅ Appointment confirmed for Thursday 2PM. Reminder sent!",
    delay: 2500
  }],
  carSales: [{
    type: 'customer',
    text: "Looking for a reliable SUV",
    delay: 1000
  }, {
    type: 'ai',
    text: "Perfect timing! Check out this 2024 Honda CR-V 🚗",
    delay: 1500
  }, {
    type: 'car',
    text: "🚙 2024 Honda CR-V\n💰 $28,900\n⭐ 5-star safety rating",
    delay: 2000
  }, {
    type: 'ai',
    text: "Want to schedule a test drive? 🗓️",
    delay: 2500
  }]
};
const industryTypes = ["Businesses", "Health Clinics", "Restaurants", "Car Dealerships", "Real Estate Agents", "Lawyers", "Professionals"];
export const AnimatedDemos = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<{
    [key: string]: number;
  }>({
    scheduling: 0,
    carSales: 0
  });
  useEffect(() => {
    const industryInterval = setInterval(() => {
      setCurrentIndustry(prev => (prev + 1) % industryTypes.length);
    }, 2000);
    return () => clearInterval(industryInterval);
  }, []);
  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];
    const showNextMessage = (demo: string, index: number, baseDelay: number = 0) => {
      const conversation = conversations[demo as keyof typeof conversations];
      if (index < conversation.length) {
        const timeoutId = setTimeout(() => {
          setVisibleMessages(prev => ({
            ...prev,
            [demo]: index + 1
          }));
          showNextMessage(demo, index + 1, baseDelay);
        }, conversation[index].delay + baseDelay);
        timeoutIds.push(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setVisibleMessages(prev => ({
            ...prev,
            [demo]: 0
          }));
          showNextMessage(demo, 0, baseDelay);
        }, 3000 + baseDelay);
        timeoutIds.push(timeoutId);
      }
    };

    // Start first demo immediately
    showNextMessage('scheduling', 0, 0);
    // Start second demo with 2 second delay
    showNextMessage('carSales', 0, 2000);
    return () => timeoutIds.forEach(id => clearTimeout(id));
  }, []);
  const renderMessage = (message: any, index: number) => {
    let bgColor = "bg-gray-800 text-white border border-gray-700";
    let icon = null;
    if (message.type === 'customer') {
      bgColor = "bg-white text-black";
    } else if (message.type === 'ai') {
      bgColor = "bg-gray-800 text-white border border-gray-600";
    } else if (message.type === 'calendar') {
      bgColor = "bg-blue-900 text-blue-200 border border-blue-700";
      icon = <Calendar className="w-3 h-3" />;
    } else if (message.type === 'car') {
      bgColor = "bg-orange-900 text-orange-200 border border-orange-700";
      icon = <Car className="w-3 h-3" />;
    }
    return <div key={index} className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
        <div className={`max-w-xs px-4 py-3 rounded-2xl ${bgColor}`}>
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-xs opacity-75">
              {message.type === 'customer' ? 'Customer' : message.type === 'ai' ? 'CirkadianAI' : 'System'}
            </span>
          </div>
          <p className="text-sm whitespace-pre-line">{message.text}</p>
        </div>
      </div>;
  };
  const demos = ['scheduling', 'carSales'];
  return <section className="py-20 px-6 bg-black" id="automation-demo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          
          <p className="text-gray-400 mb-8 text-5xl font-bold">
            Specialized Solutions for{" "}
            <span className="font-semibold text-white transition-all duration-500 inline-block" key={currentIndustry}>
              {industryTypes[currentIndustry]}
            </span>
          </p>
          
          <p className="text-lg text-gray-500 mb-12">
            Watch how seamlessly your customers interact with our AI across different scenarios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {demos.map((demo, idx) => <Card key={demo} className="bg-gray-900 border-gray-800 p-8 hover:border-gray-600 transition-all duration-300">
              <div className="space-y-4 h-80 overflow-hidden">
                {conversations[demo as keyof typeof conversations].slice(0, visibleMessages[demo]).map((message, index) => renderMessage(message, index))}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};