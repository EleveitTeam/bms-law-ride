import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Clock, MapPin, Phone } from "lucide-react";

const FreeTransport = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="max-w-5xl mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            We'll get you here, <span className="text-primary">free of charge</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Don't let transportation be a barrier to getting legal help. We provide free transportation to our office for consultations and meetings.
          </p>
        </div>

        <Card className="animate-scale-in border-border hover:border-primary/20 transition-colors duration-300 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-montserrat">Free Pickup</h3>
                <p className="text-sm text-muted-foreground font-montserrat">
                  We'll pick you up from your home, hospital, or any location in NYC
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-montserrat">Flexible Timing</h3>
                <p className="text-sm text-muted-foreground font-montserrat">
                  Schedule at your convenience, including evenings and weekends
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-montserrat">All 5 Boroughs</h3>
                <p className="text-sm text-muted-foreground font-montserrat">
                  Manhattan, Brooklyn, Queens, Bronx, and Staten Island coverage
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule my free transport
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FreeTransport;