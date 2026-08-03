import Faq from "./Faq";
import { homeFaq } from "@/lib/content";

export default function HomeFaq() {
  return (
    <section className="section--tight faq-section" id="sss">
      <div className="wrap faq-section__inner">
        <div className="section-head faq-section__head">
          <span className="eyebrow">Sık sorulan sorular</span>
          <h2 className="h2">Kısa cevaplar</h2>
          <p className="lede">
            Daha ayrıntılı bilgi için Bilgi Merkezi yazılarımıza bakabilir, kendi taşınmazınız
            için doğrudan bize ulaşabilirsiniz.
          </p>
        </div>

        <Faq items={homeFaq} />
      </div>
    </section>
  );
}
