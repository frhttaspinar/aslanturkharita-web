/** JSON-LD çıktısını tek noktadan basar. Yalnızca schema verisi için kullanılır. */
export default function JsonLd({ data }: { data: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />;
}
