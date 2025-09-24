import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const WHATSAPP_LINK = "https://wa.me/<TU_NUMERO>";
  const IG_LINK = "https://instagram.com/bmsabogadosarg";
  const ADDRESS = "Hipólito Irigoyen 8774, 2º C – Lomas de Zamora";
  const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

  const iconWrapperClass = "w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center";

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Escribinos o <span className="text-primary">visitanos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat text-balance leading-relaxed">
            Respondemos rápido por WhatsApp y te esperamos en nuestra oficina principal en Lomas de Zamora - sucursales en CABA y San Vicente - Canning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {/* Medios de contacto */}
            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-foreground font-montserrat">
                  <span className={iconWrapperClass}>
                    <WhatsAppIcon className="w-6 h-6" />
                  </span>
                  <span>WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4 text-balance">
                  Escribinos por WhatsApp para una consulta rápida y seguimiento del caso.
                </p>
                <Button
                  onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-montserrat flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Chatear por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-foreground font-montserrat">
                  <span className={iconWrapperClass}>
                    <Instagram className="w-6 h-6" />
                  </span>
                  <span>Instagram</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Seguí tips legales y novedades de casos.
                </p>
                <Button
                  onClick={() => window.open(IG_LINK, "_blank")}
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-montserrat flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  @bmsabogadosarg
                </Button>
              </CardContent>
            </Card>
          

          {/* Información del estudio */}
            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-foreground font-montserrat">
                  <span className={iconWrapperClass}>
                    <MapPin className="w-6 h-6" />
                  </span>
                  <span>Dirección</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Hipólito Irigoyen 8774, 2º C – Lomas de Zamora
                </p>
                <Button
                onClick={() => window.open(MAPS_LINK, "_blank")}
                className="mt-4 bg-gradient-primary hover:opacity-90 transition-all duration-300 font-montserrat flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Abrir en Google Maps
              </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-foreground font-montserrat">
                  <span className={iconWrapperClass}>
                    <Clock className="w-6 h-6" />
                  </span>
                  <span>Horario</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-montserrat">
                  <div className="flex flex-col gap-2">
                    <span className="text-muted-foreground">Lunes a viernes:</span>
                    <span className="text-foreground font-semibold">9:00 a 19:00 h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
      </div>
    </section>
  );
};

export default Contact;
