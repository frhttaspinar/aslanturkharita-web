import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { blogMeta, blogPosts } from "@/lib/blog";
import { breadcrumbNode, jsonLdGraph, webPageNode } from "@/lib/schema";
import { absoluteUrl, canonicalFor } from "@/lib/seo";
import { site } from "@/lib/site";

const blogUrl = absoluteUrl("/blog") ?? undefined;
const blogImage = absoluteUrl("/og-aslanturk-harita.png") ?? "/og-aslanturk-harita.png";

export const metadata: Metadata = {
  title: blogMeta.title,
  description: blogMeta.description,
  ...canonicalFor("/blog"),
  openGraph: blogUrl
    ? {
        type: "website",
        locale: "tr_TR",
        siteName: site.name,
        title: `${blogMeta.title} | ${site.name}`,
        description: blogMeta.description,
        url: blogUrl,
        images: [
          {
            url: blogImage,
            width: 1200,
            height: 630,
            alt: `${site.name} — ${blogMeta.title}`,
          },
        ],
      }
    : null,
  twitter: blogUrl
    ? {
        card: "summary_large_image",
        title: `${blogMeta.title} | ${site.name}`,
        description: blogMeta.description,
        images: [blogImage],
      }
    : null,
};

const graph = jsonLdGraph([
  webPageNode({
    path: "/blog",
    name: `${blogMeta.title} | ${site.name}`,
    description: blogMeta.description,
  }),
  breadcrumbNode([
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
]);

export default function BlogIndexPage() {
  return (
    <>
      <section className="section blog-index">
        <div className="wrap">
          <nav className="crumbs" aria-label="Sayfa yolu">
            <Link href="/">Ana Sayfa</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">Blog</span>
          </nav>

          <div className="section-head">
            <span className="eyebrow">Bilgi Merkezi</span>
            <h1 className="h2">{blogMeta.title}</h1>
            <p className="lede">{blogMeta.description}</p>
          </div>

          <div className="post-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight cta">
        <div className="wrap cta__inner">
          <div>
            <h2 className="cta__title">Kendi taşınmazınız için bilgi almak ister misiniz?</h2>
            <p className="cta__text">
              Yazılar genel bilgilendirme içindir. Ada–parsel bilginizi iletin; hangi işlemin
              gerektiğini ve nasıl ilerleyeceğimizi birlikte netleştirelim.
            </p>
          </div>

          <div className="btn-row">
            <a
              className="btn btn--light"
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp’tan Yazın
            </a>
            <a className="btn btn--outline-light" href={site.phone.href}>
              <PhoneIcon />
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>

      <JsonLd data={graph} />
    </>
  );
}
