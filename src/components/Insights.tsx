import Link from "next/link";
import BlogCard from "./BlogCard";
import { ArrowIcon } from "./Icons";
import { blogPosts } from "@/lib/blog";

export default function Insights() {
  return (
    <section className="section insights" id="bilgi-merkezi">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Bilgi Merkezi</span>
          <h2 className="h2">Harita ve kadastro işlemlerini anlaşılır hale getiriyoruz</h2>
          <p className="lede">
            Taşınmazınızla ilgili teknik süreçleri doğru adımlarla ilerletebilmeniz için sık
            sorulan konuları sade biçimde açıklıyoruz.
          </p>
        </div>

        <div className="post-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="btn-row">
          <Link className="btn btn--quiet" href="/blog">
            Tüm yazıları inceleyin
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
