import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="New York City skyline with traffic"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-montserrat leading-tight">
            Specialized Traffic
            <br />
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Accident Lawyers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Were you injured in a car crash or hit as a pedestrian? We help you claim your compensation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-elegant font-montserrat font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-montserrat font-semibold"
            >
              Call Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">24/7</div>
              <p className="text-sm text-muted-foreground font-montserrat">Available</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">No</div>
              <p className="text-sm text-muted-foreground font-montserrat">Upfront Fees</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">Free</div>
              <p className="text-sm text-muted-foreground font-montserrat">Transport</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-2xl md:text-3xl font-bold text-primary font-montserrat">Expert</div>
              <p className="text-sm text-muted-foreground font-montserrat">Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;