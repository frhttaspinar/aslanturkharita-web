import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function CallToAction() {
  return (
    <section className="section--tight cta">
      <div className="wrap cta__inner">
        <div>
          <h2 className="cta__title">Taşınmazınızla ilgili teknik işlemler için bize ulaşın</h2>
          <p className="cta__text">
            Ada–parsel bilgisini iletin; hangi işlemin gerektiğini, gereken evrakı ve tahmini süreyi
            aynı gün konuşalım.
          </p>
        </div>

        <div className="btn-row">
          <a
            className="btn btn--light"
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp’tan Yazın
          </a>
          <a className="btn btn--outline-light" href={site.phone.href}>
            <PhoneIcon />
            Hemen Arayın
          </a>
        </div>
      </div>
    </section>
  );
}
