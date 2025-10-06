import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="max-w-4xl mx-auto container-padding">
        <Card className="bg-gradient-primary border-0 animate-scale-in overflow-hidden">
          <CardContent className="p-12 text-center relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-montserrat">
                Consultá por WhatsApp
              </h2>

              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-montserrat leading-relaxed">
                Asesoría legal online las 24 h. Te devolvemos el llamado de inmediato.
              </p>

              <div className="flex justify-center">
                <Button
                  onClick={() =>
                    window.open("https://wa.me/5491160219178", "_blank")
                  }
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-xl px-10 py-5 rounded-full shadow-lg font-montserrat font-bold"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Envíanos un mensaje
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
