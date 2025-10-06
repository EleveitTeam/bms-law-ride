import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Clock, Shield, Users, Phone } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Solo honorarios al final (si ganás).",
      description: "No pagás nada hasta ganar el caso"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Financiamos gastos de inicio y gestión.",
      description: "Todos los costos legales corren por nuestra cuenta"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Equipo dedicado a tránsito",
      description: "Especialistas en todo tipo de accidentes de tránsito"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Atención 24/7 por WhatsApp.",
      description: "Siempre disponibles cuando nos necesites"
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Tu reclamo, <span className="text-primary">sin vueltas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-4xl mx-auto font-montserrat leading-relaxed">
            Hace más de 15 años nos dedicamos a llevar adelante reclamos judiciales por accidentes de tránsito. Contamos con un equipo interdisciplinario compuesto por abogados, médicos legistas, psicólogos, ingenieros mecánicos, entre otros. Sabemos cómo lograr el mejor resultado en el menor tiempo posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
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
            onClick={() => {
              (window as any).dataLayer = (window as any).dataLayer || [];
              (window as any).dataLayer.push({
                event: 'whatsapp_click',
                button_text: 'Escribinos ahora por WhatsApp',
                button_location: 'WhyChooseUs'
              });
              setTimeout(() => {
                window.open("https://wa.me/5491160219178", "_blank");
              }, 300);
            }}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 
                      text-base sm:text-lg md:text-xl 
                      px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                      rounded-full shadow-elegant font-montserrat font-semibold w-auto"
          >
            Escribinos ahora por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
