import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto cuesta contratar un abogado por un accidente de tránsito?",
      answer: "La primera consulta es gratis. No pagás adelantos: los honorarios se cobran al final, solo si cobrás."
    },
    {
      question: "¿Cuánto tiempo tengo para reclamar?",
      answer: "Hay plazos legales que pueden ser de hasta 3 años y en caso de incumplimiento contractual es 1 año desde la fecha del siniestro. Pero conviene actuar cuanto antes para preservar pruebas."
    },
    {
      question: "¿Puedo reclamar si el otro no tenía seguro o se dio a la fuga?",
      answer: "Puede haber vías alternativas (fondos, demandas, identificación por actas o cámaras). Revisamos tu caso."
    },
    {
      question: "¿Qué documentos necesito?",
      answer: "DNI, constancia del siniestro, datos del vehículo/seguro, estudios médicos y todo lo que acredite el hecho y las lesiones."
    },
    {
      question: "¿Cuánto tarda un reclamo?",
      answer: "Depende del caso y la lesión. Buscamos acuerdos rápidos cuando convienen; si no, vamos por la vía judicial."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-montserrat text-balance leading-relaxed">
            Respondemos las preguntas más frecuentes sobre reclamos por accidentes de tránsito.
          </p>
        </div>

        <div className="animate-scale-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/20 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground !no-underline font-montserrat hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-montserrat leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 
                      text-base sm:text-lg md:text-xl 
                      px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                      rounded-full shadow-elegant font-montserrat font-semibold w-auto"          >
            Hablá con un abogado ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
