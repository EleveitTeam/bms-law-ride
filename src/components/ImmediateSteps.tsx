import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Camera, Users, FileText, MessageCircle, Heart } from "lucide-react";

const ImmediateSteps = () => {
  const steps = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Atención médica",
      description: "Pedí atención médica y guardá todo informe"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Fotos",
      description: "Sacá fotos del lugar, vehículos y lesiones"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Testigos y póliza",
      description: "Tomá datos de testigos y póliza"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Denuncia",
      description: "Hacé la denuncia policial y en la aseguradora"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Escribinos",
      description: "Te guiamos en el momento"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-montserrat">
              Qué hacer para <br></br> <span className="text-primary">no perder pruebas</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto font-montserrat leading-relaxed">
            Lo urgente después del accidente: seguí estos pasos simples para cuidar tu reclamo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm font-montserrat flex-1">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 
                      text-base sm:text-lg md:text-xl 
                      px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                      rounded-full shadow-elegant font-montserrat font-semibold w-auto"          >
            <a
              href="https://wa.me/5491160219178"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                  event: 'whatsapp_click',
                  button_text: 'Asistencia por WhatsApp ahora',
                  button_location: 'ImmediateSteps'
                });
              }}
              aria-label="Asistencia por WhatsApp ahora"
            >
              Asistencia por WhatsApp ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImmediateSteps;
