import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBody from "@/components/BlogBody";
import BlogCard from "@/components/BlogCard";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { blogPosts, getPost, relatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { blogPostingNode, breadcrumbNode, jsonLdGraph } from "@/lib/schema";
import { canonicalFor } from "@/lib/seo";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Yazı bulunamadı" };
  }

  return {
    title: post.seoTitle,
    description: post.description,
    ...canonicalFor(`/blog/${post.slug}`),
    openGraph: {
      type: "article",
      title: `${post.seoTitle} | ${site.name}`,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      section: post.category,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.seoTitle} | ${site.name}`,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = relatedPosts(post.slug);
  const graph = jsonLdGraph([
    blogPostingNode(post),
    breadcrumbNode([
      { name: "Ana Sayfa", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ]);

  return (
    <>
      <article className="section post">
        <div className="wrap post__inner">
          <nav className="crumbs" aria-label="Sayfa yolu">
            <Link href="/">Ana Sayfa</Link>
            <span aria-hidden>/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden>/</span>
            <span aria-current="page">{post.category}</span>
          </nav>

          <header className="post__header">
            <span className="eyebrow">{post.category}</span>
            <h1 className="post__title">{post.title}</h1>
            <p className="lede">{post.description}</p>

            <p className="post__byline">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.updatedAt ? (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    Güncelleme:{" "}
                    <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </p>
          </header>

          <figure className="pafta post__figure">
            <div className="post__cover">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                sizes="(max-width: 899px) 92vw, 760px"
                priority
              />
            </div>
          </figure>

          <BlogBody sections={post.sections} />

          {post.faq && post.faq.length > 0 ? (
            <section className="post__faq" aria-labelledby="sik-sorulanlar">
              <h2 id="sik-sorulanlar">Sık sorulan sorular</h2>
              <Faq items={post.faq} />
            </section>
          ) : null}

          <aside className="post__cta" aria-label="İletişim">
            <p className="post__cta-title">Taşınmazınız için işlem mi gerekiyor?</p>
            <p className="post__cta-text">
              Ada–parsel bilginizi iletin; hangi işlemin gerektiğini, gereken evrakı ve nasıl
              ilerleyeceğimizi konuşalım. Tüm hizmetlerimizi{" "}
              <Link href="/#hizmetler">hizmetler bölümünde</Link> bulabilirsiniz.
            </p>
            <div className="btn-row">
              <a
                className="btn btn--primary"
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp’tan Yazın
              </a>
              <a className="btn btn--quiet" href={site.phone.href}>
                <PhoneIcon />
                {site.phone.display}
              </a>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="section--tight related">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">İlgili yazılar</span>
              <h2 className="h2">Bu konuyla ilgili diğer yazılar</h2>
            </div>
            <div className="post-grid post-grid--two">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd data={graph} />
    </>
  );
}
