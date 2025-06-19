
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Car, Users, FileText, Clock } from "lucide-react";

const conversations = {
  scheduling: [{
    type: 'customer',
    text: "I need to schedule a consultation",
    delay: 500
  }, {
    type: 'ai',
    text: "Perfect! I have availability this week. Which day works better for you?",
    delay: 800
  }, {
    type: 'calendar',
    text: "📅 Creating appointment...",
    delay: 1200
  }, {
    type: 'ai',
    text: "✅ Appointment confirmed for Thursday 2PM. Reminder sent!",
    delay: 1500
  }],
  carSales: [{
    type: 'customer',
    text: "Looking for a reliable SUV",
    delay: 500
  }, {
    type: 'ai',
    text: "Perfect timing! Check out this 2024 Honda CR-V 🚗",
    delay: 800
  }, {
    type: 'car',
    text: "🚙 2024 Honda CR-V\n💰 $28,900\n⭐ 5-star safety rating",
    delay: 1200
  }, {
    type: 'ai',
    text: "Want to schedule a test drive? 🗓️",
    delay: 1500
  }],
  dentist: [{
    type: 'appointment',
    text: "Dr. Smith - Dental Cleaning\n2:00 PM - 3:00 PM",
    delay: 800,
    position: { row: 1, col: 0 },
    color: 'green'
  }, {
    type: 'appointment',
    text: "Dr. Johnson - Teeth Whitening\n10:00 AM - 11:00 AM",
    delay: 1500,
    position: { row: 1, col: 1 },
    color: 'purple'
  }, {
    type: 'appointment',
    text: "Dr. Smith - Root Canal\n3:00 PM - 4:30 PM",
    delay: 2100,
    position: { row: 1, col: 2 },
    color: 'orange'
  }],
  realEstate: [{
    type: 'property',
    text: "🏠 Property Listing Form",
    delay: 500
  }, {
    type: 'data',
    text: "📍 Address: 123 Oak Street\n💰 Price: $485,000",
    delay: 800
  }, {
    type: 'details',
    text: "🛏️ 3 Bedrooms, 2 Bathrooms\n📐 2,100 sq ft\n🚗 2-car garage",
    delay: 1200
  }, {
    type: 'status',
    text: "✅ Listing created and published\n📊 MLS# 789456123",
    delay: 1500
  }]
};

// Fixed dates for the dentist calendar
const dentistDates = [
  { text: "December 15, 2024", col: 0 },
  { text: "December 16, 2024", col: 1 },
  { text: "December 17, 2024", col: 2 }
];

const industryTypes = ["Businesses", "Health Clinics", "Restaurants", "Car Dealerships", "Real Estate Agents", "Lawyers", "Professionals"];

export const AnimatedDemos = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<{
    [key: string]: number;
  }>({
    scheduling: 0,
    carSales: 0,
    dentist: 0,
    realEstate: 0
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
        }, 2000 + baseDelay);
        timeoutIds.push(timeoutId);
      }
    };

    // Start all demos with staggered delays
    showNextMessage('scheduling', 0, 0);
    showNextMessage('carSales', 0, 1000);
    showNextMessage('dentist', 0, 2000);
    showNextMessage('realEstate', 0, 3000);

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
    } else if (message.type === 'appointment') {
      bgColor = "bg-green-900 text-green-200 border border-green-700";
      icon = <Clock className="w-3 h-3" />;
    } else if (message.type === 'patient') {
      bgColor = "bg-purple-900 text-purple-200 border border-purple-700";
      icon = <Users className="w-3 h-3" />;
    } else if (message.type === 'system') {
      bgColor = "bg-gray-700 text-gray-200 border border-gray-600";
    } else if (message.type === 'property') {
      bgColor = "bg-indigo-900 text-indigo-200 border border-indigo-700";
      icon = <FileText className="w-3 h-3" />;
    } else if (message.type === 'data' || message.type === 'details') {
      bgColor = "bg-teal-900 text-teal-200 border border-teal-700";
    } else if (message.type === 'status') {
      bgColor = "bg-emerald-900 text-emerald-200 border border-emerald-700";
    } else if (message.type === 'date') {
      bgColor = "bg-blue-900 text-blue-200 border border-blue-700";
      icon = <Calendar className="w-3 h-3" />;
    }

    return (
      <div key={index} className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
        <div className={`max-w-xs px-4 py-3 rounded-2xl ${bgColor}`}>
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-xs opacity-75">
              {message.type === 'customer' ? 'Customer' : 
               message.type === 'ai' ? 'CirkadianAI' : 
               message.type === 'date' ? 'Calendar' :
               'System'}
            </span>
          </div>
          <p className="text-sm whitespace-pre-line">{message.text}</p>
        </div>
      </div>
    );
  };

  const renderCalendarGrid = () => {
    const dentistMessages = conversations.dentist.slice(0, visibleMessages.dentist);
    
    return (
      <div className="grid grid-cols-3 gap-4 h-full">
        {[0, 1, 2].map(col => (
          <div key={col} className="space-y-4">
            {[0, 1].map(row => {
              if (row === 0) {
                // Always show dates (fixed)
                const dateInfo = dentistDates[col];
                return (
                  <div key={row}>
                    <div className="px-3 py-3 rounded-2xl bg-blue-900 text-blue-200 border border-blue-700 h-20 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-3 h-3" />
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="text-xs opacity-75">Calendar</span>
                      </div>
                      <div className="flex-1 flex items-center">
                        <p className="text-sm whitespace-pre-line leading-tight">{dateInfo.text}</p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Animate appointments
                const appointment = dentistMessages.find(msg => 
                  msg.position && msg.position.col === col && msg.position.row === row
                );
                
                if (!appointment) return <div key={row} className="h-32" />;
                
                let bgColor = "bg-gray-800 text-white border border-gray-700";
                
                // Apply different colors based on appointment color
                if (appointment.color === 'green') {
                  bgColor = "bg-green-900 text-green-200 border border-green-700";
                } else if (appointment.color === 'purple') {
                  bgColor = "bg-purple-900 text-purple-200 border border-purple-700";
                } else if (appointment.color === 'orange') {
                  bgColor = "bg-orange-900 text-orange-200 border border-orange-700";
                }
                
                return (
                  <div key={row} className="animate-fade-in">
                    <div className={`px-3 py-4 rounded-2xl ${bgColor} h-32 flex flex-col`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3 h-3" />
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="text-xs opacity-75">Appointment</span>
                      </div>
                      <div className="flex-1 flex items-center">
                        <p className="text-sm whitespace-pre-line leading-tight">{appointment.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    );
  };

  const demos = ['scheduling', 'carSales', 'dentist', 'realEstate'];

  return (
    <section id="automation-demo" className="px-6 bg-black py-[80px]">
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
          {demos.map((demo, idx) => (
            <Card key={demo} className="bg-gray-900 border-gray-800 p-8 hover:border-gray-600 transition-all duration-300 h-96">
              <div className="space-y-4 h-full overflow-hidden">
                {demo === 'dentist' ? (
                  renderCalendarGrid()
                ) : (
                  conversations[demo as keyof typeof conversations]
                    .slice(0, visibleMessages[demo])
                    .map((message, index) => renderMessage(message, index))
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
