
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [{
  name: "Dr. Sarah Johnson",
  company: "Johnson Medical Clinic",
  content: "Since using CirkadianAI, our appointment conversions increased dramatically. Clients love the immediate response times!",
  rating: 5,
  image: "👩‍⚕️"
}, {
  name: "Mike Rodriguez",
  company: "Rodriguez Real Estate",
  content: "We've cut our response time from hours to seconds. Our lead conversion rate improved by 60%.",
  rating: 5,
  image: "🏠"
}, {
  name: "Emma Chen",
  company: "Sunset Restaurant",
  content: "Our reservation system is now completely automated. Customers can book instantly, even at 2 AM!",
  rating: 5,
  image: "🍽️"
}, {
  name: "James Wilson",
  company: "Wilson Auto Dealership",
  content: "Test drive bookings increased by 40%. The AI handles everything perfectly while we focus on sales.",
  rating: 5,
  image: "🚗"
}];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses across different industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
