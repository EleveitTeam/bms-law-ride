import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { MessageCircle, CheckCircle, Phone } from "lucide-react";
import team1 from "@/assets/team1.webp";
import team2 from "@/assets/team2.webp";
import team3 from "@/assets/team3.webp";

const OurLawFirm = () => {
  const teamSlides = [
    { src: team1, alt: "Equipo de BMS Abogados compartiendo una reunión" },
    { src: team2, alt: "Abogados de BMS analizando documentación" },
    { src: team3, alt: "Equipo de BMS celebrando un logro legal" }
  ];

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
          {/* Team Photo Carousel */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-0 relative">
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent>
                    {teamSlides.map((slide, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-96 object-cover object-top"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-white/80 !text-black border-none shadow-elegant hover:bg-white focus-visible:ring-primary/60" />
                  <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-white/80 !text-black border-none shadow-elegant hover:bg-white focus-visible:ring-primary/60" />
                </Carousel>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                Somos un equipo dedicado daños y perjuicios por accidentes de tránsito e incumplimiento contractual. Nos diferenciamos de otros estudios porque tenemos experiencia tanto en parte actora como parte demandada. Es decir, conocemos ambas caras de la moneda. Además contamos con equipo interdisciplinario y te acompañamos en cada paso. También atendemos casos penales, de art y sucesiones. Por eso no dudes en elegirnos, ya que podemos darte respuesta como abogados integrales en cada situación que se te presente. Cada caso es nuestra prioridad, por eso cuidamos tus intereses y te acompañamos en cada estadio del proceso, porque sabemos lo que implica para vos pasar por un accidente, es por eso que siendo tus mejores aliados peleamos por tus derechos hasta obtener el mejor resultado.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <Card 
              key={index}
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
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
