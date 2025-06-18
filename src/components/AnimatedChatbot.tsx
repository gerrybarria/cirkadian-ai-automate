
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const conversation = [
  { type: 'customer', text: "Can I schedule an appointment tomorrow?", delay: 1000 },
  { type: 'ai', text: "Absolutely! Which time works best for you: 10 AM or 2 PM?", delay: 2000 },
  { type: 'customer', text: "2 PM is great.", delay: 1500 },
  { type: 'ai', text: "Confirmed! See you at 2 PM tomorrow. You'll receive a reminder 1 hour before.", delay: 2000 },
];

export const AnimatedChatbot = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const showNextMessage = (index: number) => {
      if (index < conversation.length) {
        timeoutId = setTimeout(() => {
          setVisibleMessages(index + 1);
          showNextMessage(index + 1);
        }, conversation[index].delay);
      } else {
        // Reset animation after all messages are shown
        timeoutId = setTimeout(() => {
          setVisibleMessages(0);
          showNextMessage(0);
        }, 3000);
      }
    };

    showNextMessage(0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="py-20 px-6" id="chatbot-demo">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          See AI Automation in{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Action
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12">
          Watch how seamlessly your customers interact with our AI
        </p>
        
        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm p-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            {conversation.slice(0, visibleMessages).map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    message.type === 'customer'
                      ? 'bg-blue-600 text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${
                      message.type === 'customer' ? 'bg-blue-200' : 'bg-green-200'
                    }`} />
                    <span className="text-xs opacity-75">
                      {message.type === 'customer' ? 'Customer' : 'CirkadianAI'}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
