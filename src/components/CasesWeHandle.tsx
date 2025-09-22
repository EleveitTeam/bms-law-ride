import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Bike, UserX, CarTaxiFront, Bus, Train, AlertTriangle, HelpCircle } from "lucide-react";

const CasesWeHandle = () => {
  const cases = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Accidentes en auto",
      description: "Choque, alcance, múltiple"
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Motos y ciclistas",
      description: "Colisiones, caídas, incidentes en tránsito"
    },
    {
      icon: <UserX className="w-8 h-8" />,
      title: "Peatón atropellado",
      description: "Cruce, vereda, atropello en la vía pública"
    },
    {
      icon: <CarTaxiFront className="w-8 h-8" />,
      title: "Taxis / remises / apps",
      description: "Pasajeros y choferes en servicios de transporte"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Colectivos",
      description: "Transporte público y escolar"
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: "Tren y subte",
      description: "Incidentes en andenes y formaciones"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Conductor sin seguro o sin registro",
      description: "Accidentes con choferes sin cobertura o sin licencia"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Siniestros con fuga",
      description: "Identificación y coberturas posibles"
    }
  ];

  return (
    <section id="cases" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Especialistas en <span className="text-primary">tránsito</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cases.map((caseType, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {caseType.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                  {caseType.title}
                </h3>
                <p className="text-muted-foreground text-sm font-montserrat text-balance flex-1">
                  {caseType.description}
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
            Quiero saber si mi caso corresponde
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesWeHandle;
