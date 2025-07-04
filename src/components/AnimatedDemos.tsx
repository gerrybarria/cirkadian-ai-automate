import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Car, Users, FileText, Clock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const conversations = {
  scheduling: [{
    type: 'customer',
    text: "I need legal consultation",
    delay: 500
  }, {
    type: 'ai',
    text: "I'd be happy to help! What type of legal matter?",
    delay: 800
  }, {
    type: 'customer',
    text: "Contract review",
    delay: 1200
  }, {
    type: 'ai',
    text: "Perfect! I have availability Thursday at 2PM. Does that work?",
    delay: 1600
  }, {
    type: 'customer',
    text: "Yes, that works",
    delay: 2000
  }, {
    type: 'calendar',
    text: "📅 Creating appointment...",
    delay: 2400
  }, {
    type: 'ai',
    text: "✅ Appointment confirmed for Thursday 2PM!",
    delay: 2800
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
    text: "Dr. Smith\nCleaning\n2:00 PM",
    delay: 800,
    position: { row: 1, col: 0 },
    color: 'green'
  }, {
    type: 'appointment',
    text: "Dr. Johnson\nWhitening\n10:00 AM",
    delay: 1200,
    position: { row: 1, col: 1 },
    color: 'purple'
  }, {
    type: 'appointment',
    text: "Dr. Smith\nRoot Canal\n3:00 PM",
    delay: 1600,
    position: { row: 1, col: 2 },
    color: 'orange'
  }, {
    type: 'appointment',
    text: "Dr. Martinez\nCheckup\n9:00 AM",
    delay: 2000,
    position: { row: 2, col: 0 },
    color: 'blue'
  }, {
    type: 'appointment',
    text: "Dr. Lee\nBraces\n1:00 PM",
    delay: 2400,
    position: { row: 2, col: 1 },
    color: 'red'
  }, {
    type: 'appointment',
    text: "Dr. Wilson\nFilling\n4:00 PM",
    delay: 2800,
    position: { row: 2, col: 2 },
    color: 'teal'
  }],
  realEstate: [{
    type: 'new-client',
    text: "New client added",
    delay: 1000,
    row: 1
  }, {
    type: 'status-update',
    text: "Status: Active",
    delay: 2000,
    row: 3
  }, {
    type: 'new-client',
    text: "New client added",
    delay: 3000,
    row: 5
  }]
};

// Fixed dates for the dentist calendar
const dentistDates = [
  { text: "Dec 15, 2024", col: 0 },
  { text: "Dec 16, 2024", col: 1 },
  { text: "Dec 17, 2024", col: 2 }
];

// Fixed real estate client data
const realEstateData = [
  { id: "C001", name: "Sarah Johnson", email: "sarah.j@email.com", phone: "(555) 123-4567", budget: "$500K-600K", status: "Active", agent: "Mike Chen" },
  { id: "C002", name: "Robert Williams", email: "rob.williams@email.com", phone: "(555) 234-5678", budget: "$400K-500K", status: "New", agent: "Lisa Rodriguez" },
  { id: "C003", name: "Emily Davis", email: "emily.davis@email.com", phone: "(555) 345-6789", budget: "$600K-750K", status: "Active", agent: "Tom Wilson" },
  { id: "C004", name: "Michael Brown", email: "m.brown@email.com", phone: "(555) 456-7890", budget: "$350K-450K", status: "Closed", agent: "Emma Davis" },
  { id: "C005", name: "Jessica Miller", email: "jess.miller@email.com", phone: "(555) 567-8901", budget: "$700K-850K", status: "Active", agent: "Sarah Johnson" },
  { id: "C006", name: "David Anderson", email: "d.anderson@email.com", phone: "(555) 678-9012", budget: "$450K-550K", status: "Follow-up", agent: "Mike Chen" },
  { id: "C007", name: "Amanda Wilson", email: "amanda.w@email.com", phone: "(555) 789-0123", budget: "$550K-650K", status: "Active", agent: "Lisa Rodriguez" },
  { id: "C008", name: "Christopher Lee", email: "chris.lee@email.com", phone: "(555) 890-1234", budget: "$300K-400K", status: "New", agent: "Tom Wilson" }
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
        }, 3000 + baseDelay);
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
      <div key={index} className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-in mb-3`}>
        <div className={`max-w-[85%] px-3 py-2 rounded-2xl ${bgColor}`}>
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
          <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
        </div>
      </div>
    );
  };

  const renderCalendarGrid = () => {
    const dentistMessages = conversations.dentist.slice(0, visibleMessages.dentist);
    
    return (
      <div className="grid grid-cols-3 gap-2 md:gap-3 h-full">
        {[0, 1, 2].map(col => (
          <div key={col} className="space-y-2 md:space-y-3">
            {[0, 1, 2].map(row => {
              if (row === 0) {
                // Always show dates (fixed)
                const dateInfo = dentistDates[col];
                return (
                  <div key={row}>
                    <div className="px-2 md:px-3 py-2 rounded-lg md:rounded-2xl bg-blue-900 text-blue-200 border border-blue-700 h-12 md:h-14 flex flex-col">
                      <div className="flex items-center gap-1 md:gap-2 mb-1">
                        <Calendar className="w-2 h-2 md:w-3 md:h-3" />
                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-gray-400" />
                        <span className="text-xs opacity-75 hidden md:inline">Calendar</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-xs md:text-sm text-center leading-tight">{dateInfo.text}</p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Animate appointments
                const appointment = dentistMessages.find(msg => 
                  msg.position && msg.position.col === col && msg.position.row === row
                );
                
                if (!appointment) return <div key={row} className="h-16 md:h-20" />;
                
                let bgColor = "bg-gray-800 text-white border border-gray-700";
                
                // Apply different colors based on appointment color
                if (appointment.color === 'green') {
                  bgColor = "bg-green-900 text-green-200 border border-green-700";
                } else if (appointment.color === 'purple') {
                  bgColor = "bg-purple-900 text-purple-200 border border-purple-700";
                } else if (appointment.color === 'orange') {
                  bgColor = "bg-orange-900 text-orange-200 border border-orange-700";
                } else if (appointment.color === 'blue') {
                  bgColor = "bg-blue-900 text-blue-200 border border-blue-700";
                } else if (appointment.color === 'red') {
                  bgColor = "bg-red-900 text-red-200 border border-red-700";
                } else if (appointment.color === 'teal') {
                  bgColor = "bg-teal-900 text-teal-200 border border-teal-700";
                }
                
                return (
                  <div key={row} className="animate-fade-in">
                    <div className={`px-1 md:px-2 py-1 md:py-2 rounded-lg md:rounded-2xl ${bgColor} h-16 md:h-20 flex flex-col overflow-hidden`}>
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-2 h-2 md:w-3 md:h-3 flex-shrink-0" />
                        <div className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 hidden md:block" />
                        <span className="text-xs opacity-75 truncate hidden md:inline">Appointment</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center overflow-hidden">
                        <p className="text-xs text-center whitespace-pre-line leading-tight overflow-hidden">{appointment.text}</p>
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

  const renderSpreadsheet = () => {
    const animatedRows = conversations.realEstate.slice(0, visibleMessages.realEstate);
    
    return (
      <div className="h-full overflow-hidden">
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300 text-xs px-2 py-2">ID</TableHead>
                <TableHead className="text-gray-300 text-xs px-2 py-2">Client Name</TableHead>
                <TableHead className="text-gray-300 text-xs px-2 py-2">Contact</TableHead>
                <TableHead className="text-gray-300 text-xs px-2 py-2">Budget</TableHead>
                <TableHead className="text-gray-300 text-xs px-2 py-2">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {realEstateData.map((client, index) => {
                const isAnimated = animatedRows.some(anim => anim.row === index + 1);
                const animationType = animatedRows.find(anim => anim.row === index + 1)?.type;
                
                let rowBgColor = "bg-gray-900";
                if (isAnimated) {
                  if (animationType === 'new-client') {
                    rowBgColor = "bg-green-900/30 animate-fade-in";
                  } else if (animationType === 'status-update') {
                    rowBgColor = "bg-blue-900/30 animate-fade-in";
                  }
                }
                
                return (
                  <TableRow key={client.id} className={`border-gray-700 ${rowBgColor}`}>
                    <TableCell className="text-gray-300 text-xs px-2 py-2">{client.id}</TableCell>
                    <TableCell className="text-gray-300 text-xs px-2 py-2">{client.name}</TableCell>
                    <TableCell className="text-gray-300 text-xs px-2 py-2">{client.phone}</TableCell>
                    <TableCell className="text-gray-300 text-xs px-2 py-2">{client.budget}</TableCell>
                    <TableCell className="text-gray-300 text-xs px-2 py-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        client.status === 'Active' ? 'bg-green-700 text-green-200' :
                        client.status === 'Follow-up' ? 'bg-yellow-700 text-yellow-200' :
                        client.status === 'Closed' ? 'bg-red-700 text-red-200' :
                        'bg-blue-700 text-blue-200'
                      }`}>
                        {client.status}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  const demos = ['scheduling', 'carSales', 'dentist', 'realEstate'];

  return (
    <section id="automation-demo" className="px-6 bg-black py-[80px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-8 text-3xl md:text-5xl font-bold">
            Specialized Solutions for{" "}
            <span className="font-semibold text-white transition-all duration-500 inline-block" key={currentIndustry}>
              {industryTypes[currentIndustry]}
            </span>
          </p>
          
          <p className="text-lg text-gray-500 mb-12">
            Watch how seamlessly your customers interact with our AI across different scenarios
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {demos.map((demo, idx) => (
            <Card key={demo} className={`bg-gray-900 border-gray-800 p-4 md:p-6 hover:border-gray-600 transition-all duration-300 ${
              demo === 'scheduling' || demo === 'carSales' ? 'h-[500px] md:h-[600px]' : 'h-80 md:h-96'
            }`}>
              <div className="space-y-4 h-full overflow-hidden">
                {demo === 'dentist' ? (
                  renderCalendarGrid()
                ) : demo === 'realEstate' ? (
                  renderSpreadsheet()
                ) : (
                  <div className="h-full overflow-y-auto">
                    {conversations[demo as keyof typeof conversations]
                      .slice(0, visibleMessages[demo])
                      .map((message, index) => renderMessage(message, index))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
