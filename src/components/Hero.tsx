import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

const stats = [
  { value: `${site.yearsOfExperience} Yıl`, label: "Aktif saha tecrübesi" },
  { value: "Harita Mühendisliği", label: "Arazi ve proje ölçümleri" },
  { value: "Amasya Merkez", label: "Hızırpaşa, Karacaoğlan Cd." },
];

export default function Hero() {
  return (
    <section className="hero" id="ust">
      <div className="hero__backdrop" aria-hidden="true">
        <svg
          viewBox="0 0 1440 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="hero-survey-arc"
              x1="120"
              y1="80"
              x2="1320"
              y2="680"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2e1065" stopOpacity="0.12" />
              <stop offset="55%" stopColor="#5b21b6" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#ff5da2" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient
              id="hero-contour-wave"
              x1="0"
              y1="620"
              x2="1440"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#5b21b6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ff5da2" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#2e1065" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <line x1="92" y1="0" x2="92" y2="560" stroke="#2e1065" strokeOpacity="0.06" strokeWidth="0.8" />
          <line x1="0" y1="108" x2="640" y2="108" stroke="#2e1065" strokeOpacity="0.06" strokeWidth="0.8" />
          <line x1="1324" y1="36" x2="1324" y2="700" stroke="#5b21b6" strokeOpacity="0.07" strokeWidth="0.8" />
          <circle
            cx="1060"
            cy="340"
            r="286"
            stroke="url(#hero-survey-arc)"
            strokeWidth="1.1"
            strokeDasharray="6 6"
          />
          <circle
            cx="1060"
            cy="340"
            r="332"
            stroke="#2e1065"
            strokeOpacity="0.08"
            strokeWidth="0.8"
          />
          <path
            d="M-40 676C280 568 590 732 960 632C1170 574 1320 612 1480 544"
            stroke="url(#hero-contour-wave)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M-20 698C300 594 610 750 980 650C1180 596 1330 628 1480 568"
            stroke="#2e1065"
            strokeOpacity="0.07"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="wrap hero__inner">
        <div>
          <span className="eyebrow rise">
            {site.legalNote} · {site.address.district}
          </span>

          <h1 className="hero__title rise rise-2">
            Amasya’da güvenilir harita ve kadastro hizmetleri
          </h1>

          <svg
            className="hero__sketch-line rise rise-2"
            viewBox="0 0 360 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hero-title-rule" x1="0" y1="12" x2="360" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#db2777" stopOpacity="0.85" />
                <stop offset="54%" stopColor="#5b21b6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2e1065" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M4 18C82 6 164 5 240 14C286 20 326 16 356 6"
              stroke="url(#hero-title-rule)"
              strokeWidth="2.1"
              strokeLinecap="round"
              className="sketch-line-draw"
            />
            <path
              d="M26 21C108 11 186 12 264 19C304 22 332 19 354 12"
              stroke="#5b21b6"
              strokeOpacity="0.3"
              strokeWidth="0.85"
              strokeLinecap="round"
            />
            <path d="M18 9V21M12 15H24" stroke="#db2777" strokeOpacity="0.45" strokeWidth="0.9" />
          </svg>

          <p className="hero__text rise rise-3">
            Aslantürk Harita, {site.yearsOfExperience} yıllık tecrübesiyle harita mühendisliği,
            arazi ölçümü ve taşınmazlarınıza yönelik teknik çalışmalarda profesyonel destek
            sunar.
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
