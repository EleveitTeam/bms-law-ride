import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcelo Alejandro Espósito",
      quote:
        "Excelente consulta, me respondieron rápidamente y supe qué hacer. Los recomiendo.",
      rating: 5,
    },
    {
      name: "Gastón Ramos",
      quote:
        "Excelente atención por parte del Dr. Bravo. Muy recomendable el asesoramiento.",
      rating: 5,
    },
    {
      name: "Cesar Paliza",
      quote:
        "Excelente servicio, cordialidad y seriedad en un momento tan estresante como un accidente de tránsito. Muy recomendables.",
      rating: 5,
    },
    {
      name: "Martin Segura",
      quote:
        "Son un equipo de profesionales que se ocupan de todo desde el minuto cero, siempre comprometidos en dar respuesta y sacar todas las inquietudes y miedos del cliente en situaciones críticas.",
      rating: 5,
    },
    {
      name: "Claudio Gasparetti",
      quote:
        "¡Excelentes profesionales! Cumplen con todo lo pactado en tiempo y forma, para recomendar.",
      rating: 5,
    },
    {
      name: "Patricio Rolando Ruiz",
      quote:
        "Gran profesionalismo y dedicación. Súper personalizado. ¡Gracias a todo el equipo de BMS! ¡GRAN TRABAJO!",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Experiencias <span className="text-primary">reales</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Testimonios de personas que confiaron en nosotros para resolver su caso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
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
                  <p className="font-semibold text-foreground font-montserrat">
                    {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 
                      text-base sm:text-lg md:text-xl 
                      px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                      rounded-full shadow-elegant font-montserrat font-semibold w-auto"
          >
            Quiero que revisen mi caso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
