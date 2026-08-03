import type { Metadata } from "next";

/**
 * Site adresi tek kaynaktan okunur.
 *
 * Kalıcı alan adı henüz bağlanmadığı için canonical, sitemap ve structured data
 * URL'leri yalnızca NEXT_PUBLIC_SITE_URL tanımlıyken üretilir. Geçici Vercel
 * adresi (VERCEL_URL) canonical olarak kullanılmaz; bu adresin indekslenmesi
 * ileride gerçek alan adıyla çakışır.
 */
function normalizeSiteUrl(value: string | undefined): string | null {
  const raw = value?.trim();
  if (!raw) return null;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  if (!url.hostname.includes(".")) return null;

  // Sondaki "/" karakterleri temizlenir: https://ornek.com
  const path = url.pathname.replace(/\/+$/, "");
  return `${url.origin}${path}`;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const hasSiteUrl = siteUrl !== null;

/** Alan adı tanımlıysa absolute URL, tanımlı değilse null döndürür. */
export function absoluteUrl(path = "/"): string | null {
  if (!siteUrl) return null;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return suffix === "/" ? `${siteUrl}/` : `${siteUrl}${suffix}`;
}

/** metadataBase yalnızca gerçek alan adı varken tanımlanır. */
export function metadataBase(): Pick<Metadata, "metadataBase"> {
  return siteUrl ? { metadataBase: new URL(siteUrl) } : {};
}

/** Canonical yalnızca gerçek alan adı varken yazılır; sahte URL üretilmez. */
export function canonicalFor(path: string): Pick<Metadata, "alternates"> {
  const url = absoluteUrl(path);
  return url ? { alternates: { canonical: url } } : {};
}

/**
 * İndeksleme izni tek noktadan yönetilir.
 *
 * Gerçek alan adı tanımlı değilken site noindex/nofollow olarak yayınlanır:
 * geçici .vercel.app adresinin indekslenmesi, kalıcı alan adı bağlandığında
 * yinelenen içerik ve yanlış canonical sorunları doğurur. NEXT_PUBLIC_SITE_URL
 * tanımlandığı anda otomatik olarak index/follow durumuna geçilir.
 *
 * robots.txt tarafında tarama engellenmez; arama motorunun bu meta etiketi
 * görebilmesi için sayfayı tarayabiliyor olması gerekir.
 */
export function robotsMeta(): Pick<Metadata, "robots"> {
  const indexable = hasSiteUrl;

  return {
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
