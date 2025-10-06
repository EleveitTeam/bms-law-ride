import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
          role="presentation"
          aria-hidden="true"
        ></div>
        {/* Overlay degradado oscuro → claro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div> */}
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance font-montserrat leading-tight">
            Abogados especialistas en
            {" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              accidentes de tránsito
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-montserrat leading-relaxed text-white/90">
            ¿Tuviste un choque o atropello y sufriste lesiones? Te ayudamos a reclamar tu indemnización.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 
                        text-base sm:text-lg md:text-xl 
                        px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 
                        rounded-full shadow-elegant font-montserrat font-semibold sm:w-auto"
            >
              <a
                href="https://wa.me/5491160219178"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({
                    event: 'whatsapp_click',
                    button_text: 'Valoración gratuita por WhatsApp',
                    button_location: 'Hero'
                  });
                }}
                aria-label="Valoración gratuita por WhatsApp"
              >
                Valoración gratuita por WhatsApp
              </a>
            </Button>
          </div>

          {/* Indicadores de confianza */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="text-center animate-slide-up">
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">24/7</div>
              <p className="text-sm text-white/80 font-montserrat">Atención</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">Sin</div>
              <p className="text-sm text-white/80 font-montserrat">adelantos</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">Traslado</div>
              <p className="text-sm text-white/80 font-montserrat">gratuito</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">Equipo</div>
              <p className="text-sm text-white/80 font-montserrat">especialista</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
