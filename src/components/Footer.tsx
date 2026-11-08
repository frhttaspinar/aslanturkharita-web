import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { navItems, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";

const about = `Amasya’da ${site.yearsOfExperience} yıllık deneyimle harita mühendisliği ve arazi ölçümü alanlarında teknik hizmet sunan ofis.`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div>
          {/* Logo koyu zeminde okunabilsin diye açık bir plaka üzerinde,
              kendi renkleriyle gösterilir. */}
          <span className="footer__brand-plate">
            <Image
              className="footer__brand-mark"
              src={site.logo.lockup}
              alt={`${site.name} logosu`}
              width={1254}
              height={1254}
              sizes="180px"
            />
          </span>
          <p className="footer__engineer">{site.engineerName}</p>
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
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Hizmetler</h2>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.id}>
                <Link href="/#hizmetler">{service.title}</Link>
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
        <span className="footer__credit">
          Web tasarım ve geliştirme:{" "}
          <a
            href="https://dokuyazilim.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            aria-label="Doku Yazılım web sitesini yeni sekmede aç"
          >
            Doku Yazılım
          </a>
        </span>
      </div>
    </footer>
  );
}
