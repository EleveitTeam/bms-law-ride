import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Clock, Shield, Users, Phone } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No upfront fees – we only charge at the end, if you win.",
      description: "You don't pay unless we win your case"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "We cover filing and case expenses.",
      description: "All legal costs covered by us"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated traffic team: cars, motorcycles, pedestrians, taxis, buses, trains/subway.",
      description: "Specialists in all traffic accident types"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 WhatsApp assistance.",
      description: "Always available when you need us"
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Your claim, <span className="text-primary">made simple</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-montserrat leading-relaxed">
            With years of experience in traffic accident liability cases, we know how to move your case forward without you having to advance money or waste time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start mb-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                      <h3 className="text-lg font-semibold text-foreground font-montserrat leading-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-montserrat">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat with us on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;