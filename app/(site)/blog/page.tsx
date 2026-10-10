import type { Metadata } from "next";
import Breadcrumb from "@/components/treatment/Breadcrumb";
import PageIntro from "@/components/shared/PageIntro";
import BlogExplorer from "@/components/blog/BlogExplorer";
import CtaBand from "@/components/treatment/CtaBand";
import { bookConsultationCta, clinicMeta } from "@/data/treatments/shared";
import { listPublishedPosts } from "@/lib/blog/repository";
import ui from "@/components/shared/ui.module.css";

export const metadata: Metadata = {
  title: "Blog & Treatment Guides | Resplendent Aesthetics",
  description:
    "Patient guides on face, body, women's and men's aesthetic treatments from Resplendent Aesthetics, Greater Kailash, New Delhi: what to ask, what to expect and how to prepare.",
};

// Rebuilt at most every 5 minutes; saving a post in /admin refreshes it straight away.
export const revalidate = 300;

export default async function BlogPage() {
  const posts = await listPublishedPosts();

  return (
    <main className={ui.page}>
      <Breadcrumb current="Blog" />

      {/* Intro */}
      <PageIntro
        eyebrow="Beauty Blog & Decision Guides"
        title="Useful Answers Before You Book"
        lead="Clear, consultation-friendly guides to the questions patients ask most about face, body, women's and men's treatments. Each article explains what to expect and what to ask, so you can make an informed decision."
      />

      {/* Articles */}
      <BlogExplorer posts={posts} />

      {/* CTA */}
      <CtaBand
        data={{
          eyebrow: "Greater Kailash Part 1 • South Delhi",
          title: "Have a Question We Haven't Answered?",
          text: "Book a private consultation with Dr. Sukhbir Singh to talk through your concern and options.",
          primaryCta: bookConsultationCta("Book a Consultation"),
          meta: clinicMeta.slice(0, 1),
        }}
      />
    </main>
  );
}
