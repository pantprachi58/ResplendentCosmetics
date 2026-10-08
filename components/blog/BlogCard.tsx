import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { blogCategoryLabel, readMinutes, type BlogPost } from "@/data/blog";
import ui from "@/components/shared/ui.module.css";
import styles from "./BlogCard.module.css";

/** Article card; the title link is stretched so the whole card is clickable. */
export default function BlogCard({ post, headingLevel = "h3" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className={styles.card}>
      <div className={`${ui.media} ${styles.media}`}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className={`${ui.cover} ${styles.image}`}
        />
        <span className={styles.category}>{blogCategoryLabel[post.category]}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.topic}>{post.topic}</span>
        <Heading className={styles.title}>
          <Link href={`/blog/${post.slug}`} className={styles.link}>
            {post.title}
          </Link>
        </Heading>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.meta}>
            <Icon name="schedule" />
            {readMinutes(post)} min read
          </span>
          <span className={styles.more} aria-hidden="true">
            Read article
            <Icon name="arrow_forward" />
          </span>
        </div>
      </div>
    </article>
  );
}
