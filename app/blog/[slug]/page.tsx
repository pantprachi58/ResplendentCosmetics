import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CtaBand from "@/components/treatment/CtaBand";
import BlogCard from "@/components/blog/BlogCard";
import { blogCategoryLabel, blogPosts, getBlogPost, readMinutes, relatedPosts } from "@/data/blog";
import { bookConsultationCta, clinicMeta } from "@/data/treatments/shared";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

// Only the slugs in data/blog.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Resplendent Aesthetics Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", images: [post.image.src] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const category = blogCategoryLabel[post.category];
  const related = relatedPosts(post);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image.src,
    author: { "@type": "Organization", name: "Resplendent Aesthetics" },
    publisher: { "@type": "Organization", name: "Resplendent Aesthetics" },
  };

  return (
    <main className={ui.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb current={post.title} trail={[{ label: "Blog", href: "/blog" }]} />

      {/* Article header */}
      <header className={styles.header}>
        <div className={`${ui.container} ${styles.headerInner}`}>
          <div className={styles.headerTags}>
            <Link href={`/blog?category=${post.category}`} className={styles.categoryLink}>
              {category}
            </Link>
            <span className={styles.topic}>{post.topic}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.lead}>{post.excerpt}</p>
          <div className={styles.meta}>
            <span>
              <Icon name="schedule" />
              {readMinutes(post)} min read
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
              src={post.image.src}
              alt={post.image.alt}
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
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.block}>
                <h2 className={styles.blockTitle}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className={styles.bullets}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <Icon name="check_circle" filled className={styles.bulletIcon} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

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

            <p className={styles.disclaimer}>
              <Icon name="info" />
              This article is general information, not medical advice. Suitability, risks and results differ from
              person to person and can only be assessed in a consultation.
            </p>
          </article>

          <aside className={styles.aside}>
            <nav className={styles.toc} aria-label="In this article">
              <p className={styles.asideLabel}>In this article</p>
              <ol>
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
                <li>
                  <a href="#questions">Questions to ask</a>
                </li>
              </ol>
            </nav>

            <div className={styles.treatmentCard}>
              <p className={styles.asideLabel}>Related treatment</p>
              <p className={styles.treatmentName}>{post.treatment.label}</p>
              <p className={styles.treatmentText}>
                Read how the procedure works, recovery and FAQs, or speak to Dr. Sukhbir Singh directly.
              </p>
              <div className={styles.treatmentActions}>
                <CtaLink cta={{ label: `View ${post.treatment.label}`, href: post.treatment.href, icon: "arrow_forward" }} block />
                <CtaLink cta={bookConsultationCta("Book a Consultation")} variant="secondary" block />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related articles */}
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

      {/* CTA */}
      <CtaBand
        data={{
          eyebrow: `${category} Treatments • Greater Kailash Part 1`,
          title: `Considering ${post.treatment.label}?`,
          text: "Book a private consultation with Dr. Sukhbir Singh to discuss your goals, suitability and recovery.",
          primaryCta: bookConsultationCta("Book a Consultation"),
          meta: clinicMeta.slice(0, 1),
        }}
      />
    </main>
  );
}
