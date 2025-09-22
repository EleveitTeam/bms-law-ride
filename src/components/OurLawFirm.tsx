import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle, Users, Phone } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const OurLawFirm = () => {
  const trustBadges = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct communication",
      description: "Talk directly with your attorney, not just assistants"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Plain language",
      description: "We explain everything in terms you can understand"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp updates",
      description: "Get real-time updates on your case progress"
    }
  ];

  return (
    <section id="our-team" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            <span className="text-primary">BMS</span> Lawyers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            Meet the dedicated legal team fighting for your rights and compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Team Photo */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-0">
                <img
                  src={teamPhoto}
                  alt="BMS Law Firm team of professional attorneys"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                At BMS Law Firm, we are more than just lawyers – we are your advocates, your voice, and your support system during one of the most challenging times in your life. With years of specialized experience in traffic accident cases, our team has successfully recovered millions in compensation for our clients.
              </p>
              
              <p className="text-lg text-muted-foreground font-montserrat leading-relaxed">
                We understand that every accident is unique, and every client deserves personalized attention. That's why we limit our case load to ensure each client receives the dedicated focus their case deserves.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">15+</div>
                  <p className="text-sm text-muted-foreground font-montserrat">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">500+</div>
                  <p className="text-sm text-muted-foreground font-montserrat">Cases Won</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-montserrat">$50M+</div>
                  <p className="text-sm text-muted-foreground font-montserrat">Recovered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <Card 
              key={index}
              className="hover-lift animate-scale-in border-border hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-montserrat">
                  {badge.title}
                </h3>
                <p className="text-muted-foreground text-sm font-montserrat">
                  {badge.description}
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
            Book your free consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurLawFirm;