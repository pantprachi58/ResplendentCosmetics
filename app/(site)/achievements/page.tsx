import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import PageIntro from "@/components/shared/PageIntro";
import CalloutBanner from "@/components/treatment/CalloutBanner";
import CtaBand from "@/components/treatment/CtaBand";
import Certificates from "@/components/Certificates";
import { RESEARCHGATE_URL, articles, books } from "@/data/achievements";
import { certificates } from "@/data/certificates";
import ui from "@/components/shared/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Achievements & Publications | Dr. Sukhbir Singh | Resplendent Aesthetics",
  description:
    "Books and peer-reviewed articles published by Dr. Sukhbir Singh, plastic and cosmetic surgeon, on PRP, injection rhinoplasty, fillers, fat grafting and reconstructive surgery.",
};

const years = articles.map((article) => article.year);

export default function AchievementsPage() {
  return (
    <main className={ui.page}>
      <Breadcrumb current="Achievements" />
      <PageIntro
        eyebrow="Academic Contributions"
        title="Achievements & Publications"
        lead="Dr. Sukhbir Singh has contributed to plastic and aesthetic surgery through published books and peer-reviewed articles on PRP, injection rhinoplasty, fillers, fat grafting and reconstructive techniques."
        stats={[
          { value: String(books.length), label: "Books" },
          { value: String(articles.length), label: "Articles" },
          { value: `${Math.min(...years)}–${Math.max(...years)}`, label: "Published" },
        ]}
      />

      {/* Books */}
      <section className={`${ui.section} ${ui.white}`}>
        <div className={ui.container}>
          <div className={ui.header}>
            <span className={ui.eyebrow}>Books Published</span>
            <h2 className={ui.title}>Books & Monographs</h2>
          </div>
          <div className={styles.books}>
            {books.map((book) => (
              <article key={book.title} className={styles.book}>
                <span className={styles.bookIcon}>
                  <Icon name="menu_book" />
                </span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className={`${ui.section} ${ui.ivory}`}>
        <div className={ui.container}>
          <div className={ui.header}>
            <span className={ui.eyebrow}>Articles Published</span>
            <h2 className={ui.title}>Peer-Reviewed Articles</h2>
          </div>
          <ol className={styles.articles}>
            {articles.map((article) => (
              <li key={article.title} className={styles.article}>
                <span className={styles.year}>{article.year}</span>
                <div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.authors}>{article.authors}</p>
                  <p className={styles.journal}>
                    <Icon name="description" className={styles.journalIcon} />
                    {article.journal}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Certificates */}
      <section className={`${ui.section} ${ui.white}`}>
        <div className={ui.container}>
          <div className={ui.header}>
            <span className={ui.eyebrow}>Professional Credentials</span>
            <h2 className={ui.title}>Certifications & Memberships</h2>
          </div>
          <Certificates certificates={certificates} columns={3} />
        </div>
      </section>

      <CalloutBanner
        data={{
          icon: "school",
          eyebrow: "Research Profile",
          title: "Sukhbir Singh on ResearchGate",
          text: "Browse Dr. Sukhbir Singh's research publications and citations on his ResearchGate profile.",
          cta: { label: "View ResearchGate Profile", href: RESEARCHGATE_URL, icon: "open_in_new" },
        }}
      />

      <CtaBand
        data={{
          eyebrow: "Greater Kailash Part 1 • South Delhi",
          title: "Consult an Experienced Plastic Surgeon",
          text: "Book a consultation with Dr. Sukhbir Singh at R-9, Basement, Greater Kailash Part 1, New Delhi - 110048.",
          primaryCta: { label: "Book a Consultation", href: "/book-consultation", icon: "arrow_forward" },
        }}
      />
    </main>
  );
}
