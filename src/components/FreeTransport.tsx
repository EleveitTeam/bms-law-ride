import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Phone } from "lucide-react";

const FreeTransport = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="max-w-5xl mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Te acercamos al <br /> estudio <span className="text-primary">sin cargo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat  text-balance leading-relaxed">
            Si lo necesitás, ponemos un vehículo a tu disposición para que vengas a consultar. Coordiná por WhatsApp.
          </p>
        </div>

        <Card className="animate-scale-in border-border hover:border-primary/20 transition-colors duration-300 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Car className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-montserrat">
                Servicio de traslado gratuito
              </h3>
              <p className="text-sm text-muted-foreground font-montserrat">
                Coordinamos tu traslado para que no tengas que preocuparte por venir.
              </p>
            </div>

            <div className="text-center">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Quiero coordinar el traslado
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FreeTransport;
