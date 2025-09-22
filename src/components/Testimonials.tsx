import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      case: "Car Accident Settlement",
      quote: "After my car accident, I was overwhelmed and didn't know where to turn. BMS Law Firm took care of everything and got me the compensation I needed to recover. They kept me informed every step of the way through WhatsApp, which made everything so much easier.",
      rating: 5,
      settlement: "$125,000"
    },
    {
      name: "James Chen",
      case: "Pedestrian Accident",
      quote: "I was hit by a taxi while crossing the street in Manhattan. The BMS team was incredible - they even provided free transportation to their office since I couldn't drive. They fought hard for me and secured a settlement that covered all my medical bills and more.",
      rating: 5,
      settlement: "$95,000"
    },
    {
      name: "Sarah Johnson",
      case: "Motorcycle Accident",
      quote: "When my motorcycle was hit by an uninsured driver, I thought I was out of luck. BMS Law Firm found other ways to get me compensated and didn't charge me anything upfront. Their 24/7 availability made all the difference during my recovery.",
      rating: 5,
      settlement: "$180,000"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Real <span className="text-primary">experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Don't just take our word for it. See what our clients have to say about their experience with BMS Law Firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <blockquote className="text-muted-foreground font-montserrat leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground font-montserrat">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-montserrat">{testimonial.case}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground font-montserrat">Settlement</p>
                      <p className="font-bold text-primary font-montserrat">{testimonial.settlement}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
          >
            Have my case reviewed
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;