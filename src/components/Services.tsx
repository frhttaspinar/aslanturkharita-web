import { services } from "@/lib/content";
import { ServiceIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="section" id="hizmetler">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Hizmetler</span>
          <h2 className="h2">Taşınmazınızla ilgili teknik işlemler</h2>
          <p className="lede">
            Aplikasyondan cins değişikliğine, imar uygulamalarından arazi ölçümüne kadar harita
            mühendisliği ve kadastro işlerini tek elden yürütüyoruz. Hangi işlemin gerektiğinden
            emin değilseniz arayın, birlikte netleştirelim.
          </p>
        </div>

        <Reveal>
          <ul className="services__grid">
            {services.map((service) => (
              <li className="svc reveal-item" key={service.id}>
                <span className="svc__icon">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="svc__title">{service.title}</h3>
                <p className="svc__text">{service.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
