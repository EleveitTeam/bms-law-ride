import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/541160219178"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float whatsapp-link"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
