import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileSearch, FileText, Scale, DollarSign } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "1",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Contact us",
      description: "Reach out via WhatsApp, phone, or our website for immediate assistance"
    },
    {
      number: "2",
      icon: <FileSearch className="w-8 h-8" />,
      title: "Free review",
      description: "We evaluate your case at no cost and determine your compensation potential"
    },
    {
      number: "3",
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      description: "We gather all necessary evidence, medical records, and witness statements"
    },
    {
      number: "4",
      icon: <Scale className="w-8 h-8" />,
      title: "Filing",
      description: "Our legal team files your claim and handles all legal proceedings"
    },
    {
      number: "5",
      icon: <DollarSign className="w-8 h-8" />,
      title: "Settlement/Judgment",
      description: "We secure your compensation through negotiation or court proceedings"
    }
  ];

  return (
    <section id="how-we-work" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            <span className="text-primary">5</span> clear steps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Our streamlined process makes it easy for you to get the compensation you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold font-montserrat">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-montserrat flex-1">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary z-10">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
          >
            Start your free case review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;