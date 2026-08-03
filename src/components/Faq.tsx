import type { BlogFaq } from "@/lib/blog";

/**
 * Erişilebilir açılır cevaplar. details/summary kullanıldığı için klavye ve
 * ekran okuyucu desteği tarayıcıdan gelir; ek JavaScript yüklenmez.
 */
export default function Faq({ items }: { items: BlogFaq[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.question}>
          <summary className="faq__question">
            <span>{item.question}</span>
            <span className="faq__sign" aria-hidden />
          </summary>
          <p className="faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
