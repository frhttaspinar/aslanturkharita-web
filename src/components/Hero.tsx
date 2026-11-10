import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="ust" aria-labelledby="hero-baslik">
      <h1 className="sr-only" id="hero-baslik">
        Amasya’da güvenilir harita ve kadastro hizmetleri
      </h1>

      <div className="hero__banner">
        <div className="hero__photo">
          <Image
            className="hero__banner-img"
            src="/2.jpg"
            alt="Amasya yazısı, Harşena Dağı, Kral Kaya Mezarları ve tarihi Yalıboyu evleri panoraması"
            width={1199}
            height={553}
            priority
            fetchPriority="high"
            sizes="(min-width: 1845px) 1199px, (min-width: 1240px) 65vw, 100vw"
          />
          <Image
            className="hero__banner-img hero__banner-blur"
            src="/2.jpg"
            alt=""
            aria-hidden="true"
            width={1199}
            height={553}
            priority
            sizes="(min-width: 1845px) 1199px, (min-width: 1240px) 65vw, 100vw"
          />
        </div>

        <aside className="hero__services" aria-labelledby="hero-services-title">
          <h2 className="hero__services-title" id="hero-services-title">
            HİZMETLERİMİZ
          </h2>
          <ul className="hero__service-list">
            {services.map((service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </aside>
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
