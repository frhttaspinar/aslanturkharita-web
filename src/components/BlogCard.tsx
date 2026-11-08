import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { ArrowIcon } from "./Icons";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="post-card">
      <Link className="post-card__link" href={`/blog/${post.slug}`}>
        <span className="post-card__meta">
          <span className="post-card__category">{post.category}</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </span>

        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{post.excerpt}</p>

        <span className="post-card__more">
          Yazıyı Oku
          <ArrowIcon />
        </span>
      </Link>
    </article>
  );
}
