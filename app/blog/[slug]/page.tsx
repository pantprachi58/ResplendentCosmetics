import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CtaBand from "@/components/treatment/CtaBand";
import BlogCard from "@/components/blog/BlogCard";
import AdminToolbar from "@/components/blog/AdminToolbar";
import { bookConsultationCta, clinicMeta } from "@/data/treatments/shared";
import { getPostBySlug, getPublishedPosts, BLOG_CATEGORIES } from "@/lib/db/blog";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

// Helper to get related posts
function relatedPosts(currentPost: any, allPosts: any[]) {
  return allPosts
    .filter((p) => p.slug !== currentPost.slug && p.category === currentPost.category)
    .slice(0, 3);
}

type Props = { params: Promise<{ slug: string }> };

// Allow dynamic params since posts can be added via admin
export const dynamicParams = true;
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Resplendent Aesthetics Blog`,
    description: post.excerpt,
    openGraph: { 
      title: post.title, 
      description: post.excerpt, 
      type: "article", 
      images: post.coverImage ? [post.coverImage] : [] 
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug((await params).slug);
  if (!post || post.status !== "published") notFound();

  // Fetch all published posts for related posts
  const allPosts = await getPublishedPosts();
  const related = relatedPosts(post, allPosts);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: { "@type": "Organization", name: post.author?.name || "Resplendent Aesthetics" },
    publisher: { "@type": "Organization", name: "Resplendent Aesthetics" },
  };

  return (
    <main className={ui.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb current={post.title} trail={[{ label: "Blog", href: "/blog" }]} />

      {/* Admin Toolbar - only visible to admins */}
      <AdminToolbar postSlug={post.slug} />

      {/* Article header */}
      <header className={styles.header}>
        <div className={`${ui.container} ${styles.headerInner}`}>
          <div className={styles.headerTags}>
            <Link href={`/blog?category=${post.category}`} className={styles.categoryLink}>
              {post.category}
            </Link>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.lead}>{post.excerpt}</p>
          <div className={styles.meta}>
            <span>
              <Icon name="schedule" />
              {post.readingTime}
            </span>
            <span>
              <Icon name="edit_note" />
              {post.author?.name || "Resplendent Aesthetics team"}
            </span>
          </div>
        </div>
        {post.coverImage && (
          <div className={`${ui.container} ${styles.heroWrap}`}>
            <div className={`${ui.media} ${styles.hero}`}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1320px) 1272px, 100vw"
                className={ui.cover}
              />
            </div>
          </div>
        )}
      </header>

      {/* Article body */}
      <section className={styles.bodySection}>
        <div className={`${ui.container} ${styles.layout}`}>
          <article className={styles.article}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <p className={styles.disclaimer}>
              <Icon name="info" />
              This article is general information, not medical advice. Suitability, risks and results differ from
              person to person and can only be assessed in a consultation.
            </p>
          </article>

          <aside className={styles.aside}>
            {/* Additional sidebar content can go here */}
          </aside>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className={`${ui.section} ${ui.white} ${styles.related}`}>
          <div className={ui.container}>
            <div className={ui.headerSplit}>
              <div>
                <span className={ui.eyebrow}>Keep Reading</span>
                <h2 className={ui.title}>Related Guides</h2>
              </div>
              <Link href={`/blog?category=${post.category}`} className={styles.allLink}>
                View all {post.category.toLowerCase()} articles
                <Icon name="arrow_forward" />
              </Link>
            </div>
            <ul className={styles.relatedGrid}>
              {related.map((item) => (
                <li key={item.slug}>
                  <BlogCard post={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBand
        data={{
          eyebrow: `${post.category} Treatments • Greater Kailash Part 1`,
          title: "Considering Treatment?",
          text: "Book a private consultation with Dr. Sukhbir Singh to discuss your goals, suitability and recovery.",
          primaryCta: bookConsultationCta("Book a Consultation"),
          meta: clinicMeta.slice(0, 1),
        }}
      />
    </main>
  );
}
