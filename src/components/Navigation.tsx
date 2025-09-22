import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Cases We Handle", href: "#cases" },
    { label: "How We Work", href: "#how-we-work" },
    { label: "FAQ", href: "#faq" },
    { label: "Our Team", href: "#our-team" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-foreground font-montserrat">
              BMS <span className="text-primary">Law Firm</span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium font-montserrat"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              size="sm"
              className="font-montserrat"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              className="bg-gradient-primary hover:opacity-90 font-montserrat"
              size="sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
                  Call Now
                </Button>
                <Button
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  className="w-full bg-gradient-primary hover:opacity-90 font-montserrat"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Free Consultation
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