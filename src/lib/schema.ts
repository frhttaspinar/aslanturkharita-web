import { services } from "./content";
import { absoluteUrl } from "./seo";
import { site } from "./site";
import type { BlogPost } from "./blog";

/**
 * Structured data düğümleri. Yalnızca sayfada görünen ve doğrulanmış bilgiler
 * kullanılır: çalışma saati, koordinat, fiyat, puan, yorum, kuruluş tarihi,
 * çalışan sayısı, e-posta veya belge numarası üretilmez.
 *
 * Absolute URL gerektiren alanlar (@id, url, logo, image) yalnızca gerçek
 * alan adı tanımlıyken eklenir.
 */

type Node = Record<string, unknown>;

/** undefined/null alanları çıkararak temiz JSON-LD üretir. */
function clean(node: Node): Node {
  return Object.fromEntries(
    Object.entries(node).filter(([, value]) => value !== undefined && value !== null)
  );
}

const businessId = absoluteUrl("/#isletme") ?? undefined;
const websiteId = absoluteUrl("/#website") ?? undefined;

const publisherRef: Node = businessId
  ? { "@id": businessId }
  : { "@type": "Organization", name: site.name };

export function professionalServiceNode(): Node {
  return clean({
    "@type": "ProfessionalService",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: absoluteUrl("/") ?? undefined,
    logo: absoluteUrl(site.logo.lockup) ?? undefined,
    image: absoluteUrl("/og-aslanturk-harita.png") ?? undefined,
    telephone: site.phone.international,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.district,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Amasya" },
    knowsAbout: [
      "Harita mühendisliği",
      "Kadastro teknik hizmetleri",
      "Aplikasyon",
      "Cins değişikliği",
      "Parsel sınır tespiti",
    ],
    sameAs: [site.social.instagram, site.social.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Harita ve kadastro hizmetleri",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  });
}

export function webSiteNode(): Node {
  return clean({
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    description: site.description,
    url: absoluteUrl("/") ?? undefined,
    inLanguage: "tr-TR",
    publisher: publisherRef,
    // Siteyi hazırlayan kuruluş; işletmenin sahibi veya bağlı kuruluşu değildir.
    creator: {
      "@type": "Organization",
      name: "Doku Yazılım",
      url: "https://dokuyazilim.com",
    },
  });
}

export function webPageNode(options: {
  path: string;
  name: string;
  description: string;
}): Node {
  const url = absoluteUrl(options.path) ?? undefined;
  return clean({
    "@type": "WebPage",
    "@id": url ? `${url}#webpage` : undefined,
    url,
    name: options.name,
    description: options.description,
    inLanguage: "tr-TR",
    isPartOf: websiteId ? { "@id": websiteId } : undefined,
    about: businessId ? { "@id": businessId } : undefined,
  });
}

export function breadcrumbNode(items: { name: string; path?: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) =>
      clean({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path ? (absoluteUrl(item.path) ?? undefined) : undefined,
      })
    ),
  };
}

export function faqPageNode(items: { question: string; answer: string }[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function blogPostingNode(post: BlogPost): Node {
  const url = absoluteUrl(`/blog/${post.slug}`) ?? undefined;
  const sources = post.sections.find((section) => section.type === "sources");

  return clean({
    "@type": "BlogPosting",
    "@id": url ? `${url}#article` : undefined,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.coverImage) ?? undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: publisherRef,
    articleSection: post.category,
    inLanguage: "tr-TR",
    isPartOf: websiteId ? { "@id": websiteId } : undefined,
    mainEntityOfPage: url ? { "@type": "WebPage", "@id": `${url}#webpage` } : undefined,
    citation:
      sources && sources.type === "sources"
        ? sources.items.map((item) => ({
            "@type": "CreativeWork",
            name: item.label,
            url: item.url,
          }))
        : undefined,
  });
}

/** Düğümleri tek bir @graph altında birleştirir. */
export function jsonLdGraph(nodes: Node[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
