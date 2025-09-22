import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-montserrat">
            Reach us <span className="text-primary">anytime</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat leading-relaxed">
            We're here when you need us most. Contact us 24/7 for immediate legal assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  WhatsApp (24/7)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Get instant legal advice and case updates directly through WhatsApp.
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-montserrat"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <Instagram className="w-6 h-6 text-primary mr-3" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Stay updated with legal tips and case studies on our Instagram.
                </p>
                <Button
                  onClick={() => window.open("https://instagram.com/bmslawfirm", "_blank")}
                  variant="outline"
                  className="font-montserrat"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @bmslawfirm
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Office Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-2">
                  123 Broadway, Suite 2500
                </p>
                <p className="text-muted-foreground font-montserrat mb-4">
                  New York, NY 10006
                </p>
                <p className="text-sm text-muted-foreground font-montserrat">
                  Located in the heart of Manhattan's Financial District, easily accessible by subway.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-montserrat">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-montserrat">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="text-foreground font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="text-foreground font-medium">Emergency only</span>
                  </div>
                </div>
                <p className="text-sm text-primary font-medium mt-4 font-montserrat">
                  24/7 Emergency WhatsApp Support Available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Large CTA */}
        <div className="text-center">
          <Card className="bg-gradient-primary border-0 animate-scale-in max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-montserrat">
                Free WhatsApp Consultation
              </h3>
              <p className="text-primary-foreground/90 mb-6 font-montserrat text-lg">
                Don't wait - every moment matters in building your case. Contact us now for immediate legal guidance.
              </p>
              <Button
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-xl px-10 py-5 rounded-full shadow-lg font-montserrat font-bold"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Start Your Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;