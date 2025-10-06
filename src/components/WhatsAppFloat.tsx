import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppFloat = () => {
  return (
    <button
      onClick={() => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'whatsapp_click',
          button_text: 'WhatsApp Float Button',
          button_location: 'Float'
        });
        setTimeout(() => {
          window.open("https://wa.me/5491160219178", "_blank");
        }, 300);
      }}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;
