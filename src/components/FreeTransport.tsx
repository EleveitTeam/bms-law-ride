import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Phone } from "lucide-react";

const FreeTransport = () => {
  return (
    <section className="section-padding ">
      <div className="max-w-5xl mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                <Car className="w-32 h-32" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Te acercamos al <br /> estudio <span className="text-primary">sin cargo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat  text-balance leading-relaxed mb-8">
            Si lo necesitás, ponemos un vehículo a tu disposición para que vengas a consultar. Coordiná por WhatsApp.
          </p>
          <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 
                      text-base sm:text-lg md:text-xl 
                      px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                      rounded-full shadow-elegant font-montserrat font-semibold mx-auto w-auto"                   >
                Quiero coordinar el traslado
              </Button>
        </div>
            
      </div>
    </section>
  );
};

export default FreeTransport;
