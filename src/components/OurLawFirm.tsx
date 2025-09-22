import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Phone } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const OurLawFirm = () => {
  const trustBadges = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Trato directo",
      description: "Hablás con tu abogado, no solo con asistentes"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Lenguaje claro",
      description: "Explicamos todo en palabras simples"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Avances por WhatsApp",
      description: "Recibí novedades en tiempo real"
    }
  ];

  return (
    <section id="our-team" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            BMS <span className="text-primary">Abogados</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Team Photo */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-0">
                <img
                  src={teamPhoto}
                  alt="Equipo de BMS Abogados"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                Somos un equipo dedicado a daños y perjuicios por accidentes de tránsito. 
                Te acompañamos de punta a punta: escuchamos, explicamos y avanzamos. 
              </p>
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                También atendemos casos de ART y penal, pero nuestro foco es tránsito.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <Card 
              key={index}
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-montserrat">
                  {badge.title}
                </h3>
                <p className="text-muted-foreground text-sm font-montserrat">
                  {badge.description}
                </p>
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
            Agendar consulta sin costo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurLawFirm;
