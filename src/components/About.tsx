import { site } from "@/lib/site";

const facts = [
  "Harita mühendisliği ve arazi ölçümü",
  "Saha ve büro çalışması tek elden",
  "Amasya Merkez’de ofis",
];

const intro = `Aslantürk Harita, ${site.yearsOfExperience} yıldır Amasya’da harita mühendisliği ve arazi ölçümü alanlarında çalışıyor. Taşınmaz sahiplerinin teknik ölçüm, değerlendirme ve dosya hazırlığı ihtiyaçlarında destek sağlıyoruz.`;

export default function About() {
  return (
    <section className="section about" id="hakkimizda">
      <div className="wrap about__inner">
        <div className="about__body">
          <span className="eyebrow">Hakkımızda</span>
          <h2 className="h2">{`${site.yearsOfExperience} yıldır aynı işi yapıyoruz: doğru ölçmek`}</h2>

          <p>{intro}</p>
          <p>
            İşin özü ölçünün doğruluğu. Arazide GNSS ve total station ile topladığımız verileri
            büroda kontrol ediyor, dosyayı ilgili kuruma teslim edilebilir hâle getirdikten sonra
            kapatıyoruz. Sürecin ne kadar süreceğini ve hangi evrakın gerektiğini baştan söylüyoruz.
          </p>

          <ul className="about__facts">
            {facts.map((fact) => (
              <li className="about__fact" key={fact}>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
