import Image from "next/image";
import { services } from "@/lib/content";
import { navItems, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";

const about = `${site.yearsOfExperience} yıldır Amasya’da harita mühendisliği ve kadastro hizmetleri veren resmî LİHKAB ofisi.`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div>
          <Image
            className="footer__brand-mark"
            src={site.logo.lockup}
            alt={`${site.name} logosu`}
            width={528}
            height={549}
            style={{ width: 108, height: "auto" }}
            sizes="108px"
          />
          <p className="footer__about">{about}</p>
          <div className="footer__socials">
            <a
              className="footer__social"
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram sayfamız"
            >
              <InstagramIcon />
            </a>
            <a
              className="footer__social"
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook sayfamız"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <nav aria-label="Alt menü">
          <h2 className="footer__title">Hızlı bağlantılar</h2>
          <ul className="footer__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Hizmetler</h2>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#hizmetler">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">İletişim</h2>
          <ul className="footer__list">
            <li>
              <a href={site.mapsSearchUrl} target="_blank" rel="noopener noreferrer">
                {site.address.line}
              </a>
            </li>
            <li>
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                WhatsApp’tan yazın
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>
          © {year} {site.name}. Tüm hakları saklıdır.
        </span>
        <span>{site.legalNote} · Amasya</span>
      </div>
    </footer>
  );
}
