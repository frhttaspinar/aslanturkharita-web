import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

const stats = [
  { value: `${site.yearsOfExperience} Yıl`, label: "Aktif saha tecrübesi" },
  { value: "Resmî LİHKAB", label: "Lisanslı harita ofisi" },
  { value: "Amasya Merkez", label: "Hızırpaşa, Karacaoğlan Cd." },
];

export default function Hero() {
  return (
    <section className="hero wrap" id="ust">
      <div className="hero__inner">
        <div>
          <span className="eyebrow rise">
            {site.legalNote} · {site.address.district}
          </span>

          <h1 className="hero__title rise rise-2">
            Amasya’da güvenilir harita ve kadastro hizmetleri
          </h1>

          <p className="hero__text rise rise-3">
            Aslantürk Harita, {site.yearsOfExperience} yıllık tecrübesi ve resmî LİHKAB ofisi
            güvencesiyle harita mühendisliği, kadastro ve taşınmaz işlemlerinizde profesyonel
            çözümler sunar.
          </p>

          <div className="btn-row rise rise-3">
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

          <dl className="hero__stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.value}>
                <dt className="stat__value">{stat.value}</dt>
                <dd className="stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="pafta pafta--grid hero__panel rise rise-2">
          <Image
            className="hero__plan"
            src="/h1.png"
            alt="Parsel sınırları, yollar ve yapı adalarını gösteren imar planı çizimi"
            width={780}
            height={763}
            priority
            sizes="(max-width: 899px) 92vw, 46vw"
          />
          <figcaption className="hero__panel-note">
            <span>Parselasyon ve imar planı çizimi</span>
            <span aria-hidden>K ↑</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
