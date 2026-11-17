import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CtaLink from "@/components/shared/CtaLink";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import CtaBand from "@/components/treatment/CtaBand";
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

/** Up to `count` other posts, same category first (4 fit the sticky sidebar on a laptop screen) */
function relatedPosts(post: Post, all: PostSummary[], count = 4) {
  const others = all.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, count);
}

/** Cover width = main column: 864px from 1320px up, viewport minus sidebar + gutters from 1024px, else minus gutters */
const COVER_SIZES = "(min-width: 1320px) 864px, (min-width: 1024px) calc(100vw - 26rem), calc(100vw - 2rem)";

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

  return (
    <main className={ui.page}>
      <script
        type="application/ld+json"
        // Escape "<" so post text can't close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(post, url)).replace(/</g, "\\u003c") }}
      />
      <Breadcrumb current={post.title} trail={[{ label: "Blog", href: "/blog" }]} />

      {/* Article (header, cover and body in the main column) + sidebar beside it from the top */}
      <section className={styles.bodySection}>
        <div className={`${ui.container} ${styles.layout}`}>
          <article className={styles.article}>
            <header className={styles.header}>
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
              {coverWidth && coverHeight ? (
                // Full image: column width, height from the image's own proportions (nothing cropped)
                <div className={styles.hero}>
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    width={coverWidth}
                    height={coverHeight}
                    priority
                    sizes={COVER_SIZES}
                    className={styles.heroImage}
                  />
                </div>
              ) : (
                // Size unknown (a path typed in the admin): fixed 16:9 frame so the page doesn't jump while it loads
                <div className={`${ui.media} ${styles.hero} ${styles.heroFixed}`}>
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    fill
                    priority
                    sizes={COVER_SIZES}
                    className={ui.cover}
                  />
                </div>
              )}
            </header>

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

            {/* Related articles: sticky in the desktop sidebar (fills the column beside long articles); after the article on phones */}
            {related.length > 0 && (
              <section className={styles.related} aria-labelledby="related-heading">
                <div className={styles.relatedHeader}>
                  <span className={ui.eyebrow}>Keep Reading</span>
                  <h2 id="related-heading" className={styles.relatedHeading}>
                    Related Guides
                  </h2>
                </div>
                <ul className={styles.relatedList}>
                  {related.map((item) => (
                    <li key={item.slug} className={styles.relatedItem}>
                      <div className={`${ui.media} ${styles.relatedThumb}`}>
                        {/* Decorative here: the title next to it names the article */}
                        <Image src={item.coverImage.src} alt="" fill sizes="112px" className={ui.cover} />
                      </div>
                      <div className={styles.relatedBody}>
                        <span className={styles.relatedMeta}>{item.topic || blogCategoryLabel[item.category]}</span>
                        <h3 className={styles.relatedTitle}>
                          <Link href={`/blog/${item.slug}`} className={styles.relatedLink}>
                            {item.title}
                          </Link>
                        </h3>
                        <span className={styles.relatedRead}>
                          <Icon name="schedule" />
                          {item.readMinutes} min read
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href={`/blog?category=${post.category}`} className={styles.allLink}>
                  View all {category.toLowerCase()} articles
                  <Icon name="arrow_forward" />
                </Link>
              </section>
            )}
          </aside>
        </div>
      </section>

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
