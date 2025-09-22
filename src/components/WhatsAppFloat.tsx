import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <button
      onClick={() => window.open("https://wa.me/1234567890", "_blank")}
      className="whatsapp-float animate-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;