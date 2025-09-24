import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppFloat = () => {
  return (
    <button
      onClick={() => window.open("https://wa.me/5491160930878", "_blank")}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;
