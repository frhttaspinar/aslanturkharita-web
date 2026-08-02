import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="section" id="surec">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Çalışma süreci</span>
          <h2 className="h2">Başvurudan teslime dört adım</h2>
          <p className="lede">
            İşlemin hangi aşamada olduğunu her zaman bilirsiniz. Süreç boyunca tek bir muhatabınız
            olur.
          </p>
        </div>

        <ol className="process__grid">
          {processSteps.map((step) => (
            <li className="step" key={step.step}>
              <span className="step__no">{step.step}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
