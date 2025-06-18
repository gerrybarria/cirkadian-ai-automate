
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Home, Car, Calendar, Utensils } from "lucide-react";

const industries = [
  {
    title: "Clinics",
    description: "Instantly schedule patient appointments, send reminders, and manage follow-ups",
    benefits: ["Automated patient intake", "Appointment reminders", "Follow-up scheduling"],
    icon: Stethoscope,
    image: "🏥",
    bgPattern: "bg-gradient-to-br from-gray-50 to-white"
  },
  {
    title: "Real Estate",
    description: "Automatically qualify leads, book viewings, and enhance your customer journey",
    benefits: ["Lead qualification", "Property viewings", "Client communication"],
    icon: Home,
    image: "🏠",
    bgPattern: "bg-gradient-to-br from-white to-gray-50"
  },
  {
    title: "Car Dealerships",
    description: "Accelerate test drives, service appointments, and inquiries through automation",
    benefits: ["Test drive booking", "Service scheduling", "Lead management"],
    icon: Car,
    image: "🚗",
    bgPattern: "bg-gradient-to-br from-gray-50 to-white"
  },
  {
    title: "Healthcare Professionals",
    description: "Streamline patient intake, automate reminders, and enhance patient experience",
    benefits: ["Patient scheduling", "Intake automation", "Treatment reminders"],
    icon: Calendar,
    image: "⚕️",
    bgPattern: "bg-gradient-to-br from-white to-gray-50"
  },
  {
    title: "Restaurants & Bars",
    description: "Effortlessly manage reservations, table assignments, and customer interactions",
    benefits: ["Reservation management", "Table optimization", "Customer service"],
    icon: Utensils,
    image: "🍽️",
    bgPattern: "bg-gradient-to-br from-gray-50 to-white"
  }
];

export const IndustrySection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="industries">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
            Specialized Solutions for{" "}
            <span className="accent-primary">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored automation that understands your specific business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="border-gray-200 hover:border-gray-300 transition-all duration-300 group hover-scale overflow-hidden"
            >
              <div className={`${industry.bgPattern} p-6 text-center border-b border-gray-100`}>
                <div className="text-6xl mb-4 animate-pulse-subtle">{industry.image}</div>
                <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-3 text-black">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-2 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-black mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-black hover:bg-gray-50"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">Exceptional Post-Sale Support</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our dedicated post-sales team ensures you have continuous support, prompt changes, 
              and proactive improvements—keeping your business running flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
