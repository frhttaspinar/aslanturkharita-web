import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/date";
import { ArrowIcon } from "./Icons";

export default function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <article className="post-card">
      <Link className="post-card__link" href={`/blog/${post.slug}`}>
        <span className="post-card__frame">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 699px) 92vw, (max-width: 1023px) 46vw, 30vw"
            priority={priority}
          />
        </span>

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
