import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const WHATSAPP_LINK = "https://wa.me/<TU_NUMERO>";
  const IG_LINK = "https://instagram.com/bmsabogadosarg";

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Escribinos o <span className="text-primary">visitanos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Respondemos rápido por WhatsApp y te esperamos en nuestro estudio en Lomas de Zamora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Medios de contacto */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                        <svg className="w-6 h-6 text-primary mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"></path>
                        </svg>
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Escribinos por WhatsApp para una consulta rápida y seguimiento del caso.
                </p>
                <Button
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-montserrat"
                >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"></path>
                        </svg>
                  Chatear por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <Instagram className="w-6 h-6 text-primary mr-3" />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Seguí tips legales y novedades de casos.
                </p>
                <Button
                  onClick={() => window.open(IG_LINK, "_blank")}
                  variant="outline"
                  className="font-montserrat"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @bmsabogadosarg
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Información del estudio */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Dirección
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat">
                  Hipólito Irigoyen 8774, 2º C – Lomas de Zamora
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Horario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-montserrat">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes a viernes:</span>
                    <span className="text-foreground font-medium">9:00 a 19:00 h</span>
                  </div>
                </div>
                <p className="text-sm text-primary font-medium mt-4 font-montserrat">
                  Guardia por WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA grande */}
        <div className="text-center">
          <Card className="bg-gradient-primary border-0 animate-scale-in max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-montserrat">
                Consultá gratis por WhatsApp
              </h3>
              <p className="text-primary-foreground/90 mb-6 font-montserrat text-lg">
                Contanos tu caso y te orientamos en el momento.
              </p>
              <Button
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-xl px-10 py-5 rounded-full shadow-lg font-montserrat font-bold"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Consultá gratis por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
