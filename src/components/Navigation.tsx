import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Solo secciones destacadas
  const navigationItems = [
    { label: "Elegirnos", href: "#why-choose-us" },
    { label: "Casos", href: "#cases" },
    { label: "Proceso", href: "#how-we-work" },
    { label: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY <= 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navBase =
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300";
  const navState = isTop
    ? "bg-transparent border-transparent"
    : "bg-white/95 backdrop-blur-md border-b border-border shadow-sm";

  const linkBase =
    "transition-colors font-medium font-montserrat";
  const linkState = isTop
    ? "text-white hover:text-white/80"
    : "text-foreground hover:text-primary";

  const logoText = isTop ? "text-white" : "text-foreground";

  return (
    <nav className={`${navBase} ${navState}`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className={`text-2xl font-bold font-montserrat ${logoText}`}>
              BMS <span className="text-primary">Abogados</span>
            </h2>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`${linkBase} ${linkState}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Botones CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant={isTop ? "secondary" : "outline"}
              size="sm"
              className={`font-montserrat ${
                isTop
                  ? "bg-white text-primary hover:bg-white/90"
                  : ""
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamanos
            </Button>
            <Button
              onClick={() =>
                window.open("https://wa.me/1234567890", "_blank")
              }
              className="bg-gradient-primary hover:opacity-90 font-montserrat"
              size="sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultá gratis
            </Button>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={isTop ? "text-white" : ""}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Navegación móvil */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors font-montserrat w-full text-left"
                >
                  {item.label}
                </button>
              ))}

              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  variant="outline"
                  size="sm"
                  className="w-full font-montserrat"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamanos
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://wa.me/1234567890", "_blank")
                  }
                  className="w-full bg-gradient-primary hover:opacity-90 font-montserrat"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Consultá gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
