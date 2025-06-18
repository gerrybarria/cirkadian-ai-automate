
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "Clinics",
    description: "Instantly schedule patient appointments, send reminders, and manage follow-ups",
    benefits: ["Automated patient intake", "Appointment reminders", "Follow-up scheduling"],
    color: "blue"
  },
  {
    title: "Real Estate",
    description: "Automatically qualify leads, book viewings, and enhance your customer journey",
    benefits: ["Lead qualification", "Property viewings", "Client communication"],
    color: "green"
  },
  {
    title: "Car Dealerships",
    description: "Accelerate test drives, service appointments, and inquiries through automation",
    benefits: ["Test drive booking", "Service scheduling", "Lead management"],
    color: "purple"
  },
  {
    title: "Healthcare Professionals",
    description: "Streamline patient intake, automate reminders, and enhance patient experience",
    benefits: ["Patient scheduling", "Intake automation", "Treatment reminders"],
    color: "blue"
  },
  {
    title: "Restaurants & Bars",
    description: "Effortlessly manage reservations, table assignments, and customer interactions",
    benefits: ["Reservation management", "Table optimization", "Customer service"],
    color: "green"
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: "from-blue-600 to-blue-400",
    green: "from-green-600 to-green-400",
    purple: "from-purple-600 to-purple-400"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export const IndustrySection = () => {
  return (
    <section className="py-20 px-6" id="industries">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Specialized Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored automation that understands your specific business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group hover-scale"
            >
              <CardContent className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${getColorClasses(industry.color)} text-white text-sm font-medium mb-4`}>
                  {industry.title}
                </div>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <ul className="space-y-2 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(industry.color)} mr-3`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-white hover:bg-gray-800"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl p-8 border border-blue-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">Exceptional Post-Sale Support</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our dedicated post-sales team ensures you have continuous support, prompt changes, 
              and proactive improvements—keeping your business running flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
