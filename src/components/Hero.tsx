import Image from "next/image";
import { services } from "@/lib/content";
import { site } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="ust" aria-labelledby="hero-baslik">
      <h1 className="sr-only" id="hero-baslik">
        Amasya’da güvenilir harita ve kadastro hizmetleri
      </h1>

      <div className="wrap hero__top">
        <figure className="hero__media">
          <Image
            className="hero__img"
            src="/2.jpg"
            alt="Amasya Kral Kaya Mezarları, tarihi Yalıboyu evleri, Yeşilırmak köprüsü ve suya yansıyan manzara"
            width={564}
            height={705}
            priority
            fetchPriority="high"
            sizes="(max-width: 899px) 92vw, 460px"
          />
        </figure>

        <div className="hero__services" aria-labelledby="hero-hizmetler-baslik">
          <h2 className="hero__services-title" id="hero-hizmetler-baslik">
            Hizmetlerimiz
          </h2>
          <ul className="hero__services-list">
            {services.map((service) => (
              <li className="hero__services-item" key={service.id}>
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap hero__actions">
        <p className="hero__intro">
          <strong>Aslantürk Harita</strong>, {site.yearsOfExperience} yıldır Amasya’da harita
          mühendisliği ve kadastro alanında çalışıyor.
        </p>
        <div className="btn-row hero__btn-row">
          <a
            className="btn btn--primary"
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp’tan Bilgi Al
          </a>
          <a className="btn btn--quiet" href="#hizmetler">
            Hizmetleri İncele
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
