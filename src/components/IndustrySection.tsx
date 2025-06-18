
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Home, Car, Calendar, Utensils } from "lucide-react";

const industries = [
  {
    title: "Clinics",
    description: "Instantly schedule patient appointments, send reminders, and manage follow-ups",
    benefits: ["Automated patient intake", "Appointment reminders", "Follow-up scheduling"],
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    bgPattern: "bg-gradient-to-br from-gray-900 to-black"
  },
  {
    title: "Real Estate",
    description: "Automatically qualify leads, book viewings, and enhance your customer journey",
    benefits: ["Lead qualification", "Property viewings", "Client communication"],
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center",
    bgPattern: "bg-gradient-to-br from-black to-gray-900"
  },
  {
    title: "Car Dealerships",
    description: "Accelerate test drives, service appointments, and inquiries through automation",
    benefits: ["Test drive booking", "Service scheduling", "Lead management"],
    icon: Car,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&crop=center",
    bgPattern: "bg-gradient-to-br from-gray-900 to-black"
  },
  {
    title: "Healthcare Professionals",
    description: "Streamline patient intake, automate reminders, and enhance patient experience",
    benefits: ["Patient scheduling", "Intake automation", "Treatment reminders"],
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    bgPattern: "bg-gradient-to-br from-black to-gray-900"
  },
  {
    title: "Restaurants & Bars",
    description: "Effortlessly manage reservations, table assignments, and customer interactions",
    benefits: ["Reservation management", "Table optimization", "Customer service"],
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
    bgPattern: "bg-gradient-to-br from-gray-900 to-black"
  }
];

export const IndustrySection = () => {
  return (
    <section className="py-20 px-6 bg-black" id="industries">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Specialized Solutions for{" "}
            <span className="accent-primary">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored automation that understands your specific business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="border-gray-800 hover:border-gray-600 transition-all duration-300 group hover-scale overflow-hidden bg-gray-950"
            >
              <div className={`${industry.bgPattern} relative overflow-hidden border-b border-gray-800`}>
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="h-8 w-8 text-black" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 bg-gray-950">
                <h3 className="text-xl font-semibold mb-3 text-white">{industry.title}</h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <ul className="space-y-2 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-white mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-950 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Exceptional Post-Sale Support</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our dedicated post-sales team ensures you have continuous support, prompt changes, 
              and proactive improvements—keeping your business running flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
