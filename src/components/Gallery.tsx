import Image from "next/image";
import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section className="section gallery" id="calismalarimiz">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Çalışmalarımız</span>
          <h2 className="h2">Sahadan kareler</h2>
          <p className="lede">
            Konut parsellerinden enerji sahalarına kadar farklı işlerde çektiğimiz fotoğraflar.
          </p>
        </div>

        <ul className="gallery__grid">
          {gallery.map((item) => (
            <li className="shot" key={item.src}>
              <div className="shot__frame">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 699px) 46vw, (max-width: 999px) 30vw, 23vw"
                />
              </div>
              <span className="shot__caption">{item.caption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
