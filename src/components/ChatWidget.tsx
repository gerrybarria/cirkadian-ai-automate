
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 bg-gray-950 border-gray-800 animate-scale-in shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">Chat with us!</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-400 mb-4">
              Got questions? Our team is here to help you get started with AI automation.
            </p>
            <Button 
              className="w-full bg-white text-black hover:bg-gray-200"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Start Conversation
            </Button>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 bg-white text-black hover:bg-gray-200 shadow-lg hover-scale"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};
