import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="ust" aria-labelledby="hero-baslik">
      <h1 className="sr-only" id="hero-baslik">
        Amasya’da güvenilir harita ve kadastro hizmetleri
      </h1>

      <div className="hero__banner">
        <Image
          className="hero__banner-img"
          src="/amasya-banner.webp"
          alt="Amasya Yeşilırmak kıyısı, tarihi Yalıboyu evleri ve Harşena Dağı panoraması"
          width={1024}
          height={363}
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <Image
          className="hero__banner-img hero__banner-blur"
          src="/amasya-banner.webp"
          alt=""
          aria-hidden="true"
          width={1024}
          height={363}
          priority
          sizes="100vw"
        />
      </div>

      <div className="wrap hero__actions">
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
