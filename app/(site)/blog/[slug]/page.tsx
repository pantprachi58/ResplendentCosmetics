import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CtaBand from "@/components/treatment/CtaBand";
import BlogCard from "@/components/blog/BlogCard";
import { blogCategoryLabel } from "@/data/blog";
import { bookConsultationCta, clinicMeta } from "@/data/treatments/shared";
import { prepareArticle } from "@/lib/blog/content";
import { getPublishedPost, listPublishedPosts } from "@/lib/blog/repository";
import type { Post, PostSummary } from "@/lib/blog/types";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

// Known posts are prerendered; posts added in /admin render on first request. Unknown slugs 404.
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await listPublishedPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Resplendent Aesthetics Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", images: [post.coverImage.src] },
  };
}

/** Up to `count` other posts, same category first */
function relatedPosts(post: Post, all: PostSummary[], count = 3) {
  const others = all.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, count);
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();

  const category = blogCategoryLabel[post.category];
  const related = relatedPosts(post, await listPublishedPosts());
  const article = prepareArticle(post.content);
  const hasQuestions = post.questions.length > 0;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.src,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: "Resplendent Aesthetics" },
    publisher: { "@type": "Organization", name: "Resplendent Aesthetics" },
  };

  return (
    <main className={ui.page}>
      <script
        type="application/ld+json"
        // Escape "<" so post text can't close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb current={post.title} trail={[{ label: "Blog", href: "/blog" }]} />

      {/* Article header */}
      <header className={styles.header}>
        <div className={`${ui.container} ${styles.headerInner}`}>
          <div className={styles.headerTags}>
            <Link href={`/blog?category=${post.category}`} className={styles.categoryLink}>
              {category}
            </Link>
            {post.topic && <span className={styles.topic}>{post.topic}</span>}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.lead}>{post.excerpt}</p>
          <div className={styles.meta}>
            <span>
              <Icon name="schedule" />
              {post.readMinutes} min read
            </span>
            <span>
              <Icon name="edit_note" />
              Resplendent Aesthetics team
            </span>
          </div>
        </div>
        <div className={`${ui.container} ${styles.heroWrap}`}>
          <div className={`${ui.media} ${styles.hero}`}>
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              fill
              priority
              sizes="(min-width: 1320px) 1272px, 100vw"
              className={ui.cover}
            />
          </div>
        </div>
      </header>

      {/* Article body */}
      <section className={styles.bodySection}>
        <div className={`${ui.container} ${styles.layout}`}>
          <article className={styles.article}>
            {/* Sanitised in prepareArticle (allow-listed tags, local images only) */}
            <div className={styles.prose} dangerouslySetInnerHTML={{ __html: article.html }} />

            {hasQuestions && (
              <section id="questions" className={styles.questions}>
                <h2 className={styles.questionsTitle}>
                  <Icon name="quiz" />
                  Questions to ask at your consultation
                </h2>
                <ol className={styles.questionList}>
                  {post.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ol>
              </section>
            )}

            <p className={styles.disclaimer}>
              <Icon name="info" />
              This article is general information, not medical advice. Suitability, risks and results differ from
              person to person and can only be assessed in a consultation.
            </p>
          </article>

          <aside className={styles.aside}>
            {(article.toc.length > 0 || hasQuestions) && (
              <nav className={styles.toc} aria-label="In this article">
                <p className={styles.asideLabel}>In this article</p>
                <ol>
                  {article.toc.map((entry) => (
                    <li key={entry.id}>
                      <a href={`#${entry.id}`}>{entry.text}</a>
                    </li>
                  ))}
                  {hasQuestions && (
                    <li>
                      <a href="#questions">Questions to ask</a>
                    </li>
                  )}
                </ol>
              </nav>
            )}

            <div className={styles.treatmentCard}>
              <p className={styles.asideLabel}>{post.treatment ? "Related treatment" : "Speak to the surgeon"}</p>
              <p className={styles.treatmentName}>{post.treatment?.label ?? "Dr. Sukhbir Singh"}</p>
              <p className={styles.treatmentText}>
                {post.treatment
                  ? "Read how the procedure works, recovery and FAQs, or speak to Dr. Sukhbir Singh directly."
                  : "Discuss your goals, suitability and recovery in a private consultation."}
              </p>
              <div className={styles.treatmentActions}>
                {post.treatment && (
                  <CtaLink cta={{ label: `View ${post.treatment.label}`, href: post.treatment.href, icon: "arrow_forward" }} block />
                )}
                <CtaLink cta={bookConsultationCta("Book a Consultation")} variant={post.treatment ? "secondary" : "primary"} block />
              </div>
            </div>
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
                View all {category.toLowerCase()} articles
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
          eyebrow: `${category} Treatments • Greater Kailash Part 1`,
          title: post.treatment ? `Considering ${post.treatment.label}?` : "Considering Treatment?",
          text: "Book a private consultation with Dr. Sukhbir Singh to discuss your goals, suitability and recovery.",
          primaryCta: bookConsultationCta("Book a Consultation"),
          meta: clinicMeta.slice(0, 1),
        }}
      />
    </main>
  );
}
