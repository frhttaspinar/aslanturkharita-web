import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seo";

/**
 * Tüm genel sayfalar taranabilir. OAI-SearchBot, ChatGPT arama görünürlüğü için
 * ayrıca tanımlanır; model eğitimi tercihi (GPTBot) bu dosyanın konusu değildir
 * ve buraya kural yazılmaz.
 *
 * host ve sitemap yalnızca gerçek alan adı tanımlıyken üretilir; geçici Vercel
 * adresi yazılmaz.
 *
 * Alan adı yokken indeksleme, sayfa metadata'sındaki noindex ile engellenir
 * (bkz. robotsMeta). Burada Disallow kullanılmaz: tarama kapatılırsa arama
 * motoru HTML'deki noindex etiketini hiç göremez.
 */
export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    ...(sitemap ? { sitemap } : {}),
    ...(siteUrl ? { host: siteUrl } : {}),
  };
}
