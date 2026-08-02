import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

/** Sayfanın sağ alt köşesinde her ekranda duran sabit WhatsApp butonu. */
export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp’tan mesaj gönderin"
    >
      <WhatsAppIcon width={26} height={26} />
    </a>
  );
}
