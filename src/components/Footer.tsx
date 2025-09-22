import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              BMS <span className="text-primary">Law Firm</span>
            </h3>
            <p className="text-background/80 mb-4 font-montserrat">
              Specialized traffic accident lawyers fighting for your rights and compensation in New York.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </button>
              <button
                onClick={() => window.open("https://instagram.com/bmslawfirm", "_blank")}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-3" />
                <span className="text-background/80 font-montserrat">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-3 mt-1" />
                <div className="text-background/80 font-montserrat">
                  <p>123 Broadway, Suite 2500</p>
                  <p>New York, NY 10006</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Practice Areas</h4>
            <ul className="space-y-2 text-background/80 font-montserrat">
              <li>Car Accidents</li>
              <li>Motorcycle Accidents</li>
              <li>Pedestrian Injuries</li>
              <li>Bus & Train Accidents</li>
              <li>Rideshare Accidents</li>
              <li>Hit-and-Run Cases</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-background/20 pt-8">
          <div className="text-xs text-background/60 font-montserrat leading-relaxed">
            <p className="mb-4">
              <strong>Legal Disclaimer:</strong> This website is for informational purposes only and does not constitute legal advice. 
              The information contained herein is not intended to create, and receipt of it does not constitute, an attorney-client relationship. 
              Internet subscribers and online readers should not act upon this information without seeking professional counsel.
            </p>
            <p className="mb-4">
              No attorney-client relationship is created by using this website or by sending BMS Law Firm an email. 
              An attorney-client relationship is only formed when you have signed a retainer agreement that has been accepted by BMS Law Firm.
            </p>
            <p className="mb-4">
              Past results do not guarantee future outcomes. The amount of any settlement or verdict is dependent upon the specific facts 
              and circumstances of each individual case. BMS Law Firm cannot guarantee a specific result in any legal matter.
            </p>
            <p>
              By using this website, you acknowledge that you have read and understand this disclaimer. 
              If you do not agree with this disclaimer, please do not use this website.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-6 mt-6 text-center text-background/60 font-montserrat">
          <p>&copy; 2024 BMS Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;