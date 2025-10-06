import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5491160219178"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'whatsapp_click',
          button_text: 'WhatsApp Float Button',
          button_location: 'Float'
        });
      }}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;
