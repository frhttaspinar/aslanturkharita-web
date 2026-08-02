import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="section" id="iletisim">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">İletişim</span>
          <h2 className="h2">Ofisimize gelin ya da telefonla ulaşın</h2>
        </div>

        <div className="contact__inner">
          <div>
            <div className="contact__list">
              <div className="contact__row">
                <PinIcon />
                <div>
                  <span className="contact__label">Adres</span>
                  <span className="contact__value">{site.address.line}</span>
                  <div className="contact__socials">
                    <a
                      className="btn btn--quiet btn--sm"
                      href={site.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Haritalar’da aç
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__row">
                <PhoneIcon />
                <div>
                  <span className="contact__label">Telefon</span>
                  <a className="contact__value" href={site.phone.href}>
                    {site.phone.display}
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <WhatsAppIcon />
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <a
                    className="contact__value"
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mesaj gönderin
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <InstagramIcon />
                <div>
                  <span className="contact__label">Sosyal medya</span>
                  <div className="contact__socials">
                    <a
                      className="btn btn--quiet btn--sm"
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                      Instagram
                    </a>
                    <a
                      className="btn btn--quiet btn--sm"
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              src={site.mapsEmbedUrl}
              title={`${site.name} ofis konumu — ${site.address.line}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
