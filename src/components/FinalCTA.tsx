import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="max-w-4xl mx-auto container-padding">
        <Card className="bg-gradient-primary border-0 animate-scale-in overflow-hidden">
          <CardContent className="p-12 text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-montserrat">
                Call me now!
              </h2>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-montserrat leading-relaxed">
                24/7 online legal advice. Don't stay with doubts – we'll call you back immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-xl px-10 py-5 rounded-full shadow-lg font-montserrat font-bold"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Leave my number
                </Button>
                
                <Button
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-xl px-10 py-5 rounded-full font-montserrat font-bold"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Now
                </Button>
              </div>

              <p className="text-primary-foreground/80 mt-6 text-sm font-montserrat">
                Available 24/7 • Free Consultation • No Upfront Fees
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;