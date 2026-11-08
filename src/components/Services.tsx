import { services } from "@/lib/content";
import { ServiceIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="section" id="hizmetler" aria-labelledby="hizmetler-baslik">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2" id="hizmetler-baslik">Hizmetlerimiz</h2>
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
