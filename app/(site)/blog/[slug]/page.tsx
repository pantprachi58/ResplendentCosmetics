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
import { optimiseArticleImages } from "@/lib/blog/render";
import { getPublishedPost, listPublishedPosts } from "@/lib/blog/repository";
import { absoluteUrl, clampDescription, pageMetadata, siteName, titleWithSuffix } from "@/lib/seo";
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

/** Meta title/description as entered in the admin (imported posts keep the old site's), else derived from the post */
const seoTitle = (post: Post) => post.seo.title || titleWithSuffix(post.title, [" | Resplendent Aesthetics Blog", " | Resplendent Aesthetics"]);
const seoDescription = (post: Post) => post.seo.description || clampDescription(post.excerpt);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  if (!post) return { robots: { index: false, follow: false } };
  return pageMetadata({
    title: seoTitle(post),
    description: seoDescription(post),
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    keywords: post.seo.keywords,
    article: {
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      section: blogCategoryLabel[post.category],
      tags: post.seo.keywords,
    },
  });
}

/** Up to `count` other posts, same category first */
function relatedPosts(post: Post, all: PostSummary[], count = 3) {
  const others = all.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, count);
}

/** Below this width the cover is shown at its own size instead of stretched across the full-width banner */
const FULL_BANNER_MIN_WIDTH = 1000;

/** Article, breadcrumb and (when present) FAQ structured data for search engines */
function structuredData(post: Post, url: string) {
  const organization = { "@type": "Organization", name: siteName, url: absoluteUrl("/"), logo: absoluteUrl("/svg/logo.png") };
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: seoDescription(post),
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(post.coverImage.src),
        ...(post.coverImage.width && post.coverImage.height ? { width: post.coverImage.width, height: post.coverImage.height } : {}),
      },
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.publishedAt ?? undefined,
      dateModified: post.updatedAt,
      author: organization,
      publisher: organization,
      articleSection: blogCategoryLabel[post.category],
      ...(post.seo.keywords.length ? { keywords: post.seo.keywords.join(", ") } : {}),
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();

  const category = blogCategoryLabel[post.category];
  const related = relatedPosts(post, await listPublishedPosts());
  const article = prepareArticle(post.content);
  const articleHtml = optimiseArticleImages(article.html);
  const hasFaqs = post.faqs.length > 0;
  const url = absoluteUrl(`/blog/${post.slug}`);

  const { width: coverWidth, height: coverHeight } = post.coverImage;
  const compactCover = Boolean(coverWidth && coverHeight && coverWidth < FULL_BANNER_MIN_WIDTH);

  return (
    <main className={ui.page}>
      <script
        type="application/ld+json"
        // Escape "<" so post text can't close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(post, url)).replace(/</g, "\\u003c") }}
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
            {post.reviewedBy ? (
              <span>
                <Icon name="verified" filled />
                Medically reviewed by{" "}
                <Link href="/doctors" className={styles.reviewer}>
                  {post.reviewedBy}
                </Link>
              </span>
            ) : (
              <span>
                <Icon name="edit_note" />
                Resplendent Aesthetics team
              </span>
            )}
          </div>
        </div>
        <div className={`${ui.container} ${styles.heroWrap}`}>
          <div
            className={`${ui.media} ${styles.hero} ${compactCover ? styles.heroCompact : ""}`}
            style={compactCover ? { maxWidth: coverWidth, aspectRatio: `${coverWidth} / ${coverHeight}` } : undefined}
          >
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              fill
              priority
              sizes={compactCover ? `(min-width: ${coverWidth! + 32}px) ${coverWidth}px, 100vw` : "(min-width: 1320px) 1272px, 100vw"}
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
            <div className={styles.prose} dangerouslySetInnerHTML={{ __html: articleHtml }} />

            {hasFaqs && (
              <section id="faq" className={styles.faq} aria-labelledby="faq-heading">
                <h2 id="faq-heading" className={styles.faqTitle}>
                  <Icon name="quiz" />
                  Frequently Asked Questions
                </h2>
                <div className={styles.faqList}>
                  {post.faqs.map((faq, index) => (
                    <details key={index} className={styles.faqItem} open={index === 0}>
                      <summary className={styles.faqQuestion}>
                        <span>{faq.question}</span>
                        <Icon name="expand_more" className={styles.faqChevron} />
                      </summary>
                      <div className={styles.faqAnswer}>
                        {faq.answer.split(/\n{2,}/).map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <p className={styles.disclaimer}>
              <Icon name="info" />
              This article is general information, not medical advice. Suitability, risks and results differ from
              person to person and can only be assessed in a consultation.
            </p>
          </article>

          <aside className={styles.aside}>
            {(article.toc.length > 0 || hasFaqs) && (
              <nav className={styles.toc} aria-label="In this article">
                <p className={styles.asideLabel}>In this article</p>
                <ol>
                  {article.toc.map((entry) => (
                    <li key={entry.id}>
                      <a href={`#${entry.id}`}>{entry.text}</a>
                    </li>
                  ))}
                  {hasFaqs && (
                    <li>
                      <a href="#faq">Frequently asked questions</a>
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
