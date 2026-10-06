# CLAUDE.md

Marketing website for **Resplendent Aesthetics**, a plastic & cosmetic surgery clinic (Dr. Sukhbir Singh, Greater Kailash Part 1, New Delhi).

## Stack & commands

- Next.js 16 (App Router), React 19, TypeScript (strict), plain **CSS Modules**. No Tailwind, no UI library, no state library.
- No test suite, no ESLint config. Prettier is installed but has no config file (defaults).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # also the main type-check; run it after changes
npm start
```

## Layout

```
app/
  layout.tsx          Root layout: metadata, Google Fonts <link>s, <Header/> + <Footer/>
  globals.css         Reset only (Tailwind-preflight-derived; the --tw-* vars are leftovers, harmless)
  page.tsx            Home page: stacks section components in order
  about/page.tsx      About page (self-contained: data + markup inline)
  treatments/page.tsx Client component; filterable grid over data/procedures.ts
  treatments/<slug>/  Treatment detail pages (blepharoplasty, botox, brow-lift, chin-jawline,
                      face-neck-lift, hair-transplant, hydrafacial, liposuction, rhinoplasty,
                      vaginal-tightening, vaginoplasty, chemical-peel, dimple-creation,
                      ear-lobe-repair, otoplasty, eyelid-surgery, dermal-fillers, prp-therapy,
                      microdermabrasion, thread-lift, buttock-calf-augmentation, gender-reassignment,
                      laser-hair-removal, body-tightening, rf-microneedling, fat-grafting, tummy-tuck,
                      breast-surgery (#augmentation/#lift/#reduction), hymenoplasty, penile-enlargement,
                      gynecomastia, six-pack-abs, lip-augmentation)
  book-consultation/ contact/ doctors/ why-choose-us/   Standalone pages (page.tsx + page.module.css)
  gallery/ achievements/   Videos + event photos; publications list (data in data/gallery.ts, data/achievements.ts)
components/
  <Section>.tsx + <Section>.module.css   one pair per home-page section
  Icon.tsx            Material Symbols wrapper: <Icon name="call" filled? className? />
  about/*             About-page section components (currently NOT used by app/about/page.tsx)
  shared/ui.module.css  Shared primitives for content pages: .page (main wrapper w/ header offset),
                      .container, .section, .eyebrow, .title, .btn*, .media/.cover, form .input
  shared/CtaLink.tsx  Pill button; next/link for "/" routes, <a> for tel:/# (external http links open in a new tab)
  shared/PageIntro.tsx  Centred heading for non-treatment pages
  treatment/*         Reusable treatment-page sections, each fed by typed data: Breadcrumb,
                      TreatmentHero, TreatmentOverview, ProcessSteps, FeatureBand, CaseGallery,
                      CardGrid, CalloutBanner, FaqAccordion (client), ConsultationForm (client),
                      CtaBand, VideoGallery (lazy youtube-nocookie embeds), MediaCardGrid (photo cards / galleries), Diagrams (inline SVG scans)
  booking/BookingWizard.tsx  Client 4-step booking flow; contact/ContactForm.tsx  Client form
data/*.ts             Typed content arrays (procedures, doctors, results, testimonials,
                      stats, navigation, treatmentCategories, footer, facility, about, internationalDesk,
                      doctorProfiles, whyChooseUs, contact, booking)
data/treatments/      types.ts (TreatmentPageData etc.), shared.ts, one content file per treatment page
public/
  svg/                Logos + favicon (PNG despite the folder name; filenames contain spaces)
  videos/video1.mp4   Hero background video
  images/procedures/  Local procedure images (not yet referenced in code)
  images/pages/<route>/  Locally downloaded images for the new pages (no remote image links)
  *.html              Saved copy of the original live site, for reference only
```

Path alias: `@/*` → repo root (e.g. `@/components/Icon`, `@/data/procedures`).

## Conventions

- **Content lives in `data/*.ts`** as exported typed arrays (`export type X = {...}; export const xs: X[] = [...]`). Components import and map over them; don't hardcode lists in components.
- **Styling**: each component imports `styles from "./Name.module.css"`. Colors are hardcoded hex (no CSS variables). Main palette: navy `#0a192f` / `#1a1a2e` / `#1e293b`, accent blue `#2d6a9f`, slate greys `#f1f5f9` `#e2e8f0` `#94a3b8`. Mobile-first: media queries use `min-width` at 640 / 768 / 1024 / 1280px. Content container max-width is ~1320px.
- Tone variants are typed string unions mapped to CSS classes (e.g. `badgeTone: "navy" | "blue" | ...` → `badgeToneClass` record in `app/treatments/page.tsx`).
- Fonts: Inter + Plus Jakarta Sans, and Material Symbols Outlined, loaded via `<link>` in `app/layout.tsx` (not `next/font`).
- Server components by default; add `"use client"` only when needed (currently `Header.tsx` and `app/treatments/page.tsx`).
- Images: `next/image` with remote images from `lh3.googleusercontent.com` (the only allowed remote host in `next.config.mjs`). Add any new remote host there. Logos use plain `<img>` with an eslint-disable comment.
- Commented section headers in JSX (`{/* Hero Section */}`) are the norm in page files.

- **New treatment pages**: add `data/treatments/<slug>.ts` (typed `TreatmentPageData` + any extra section data) and an `app/treatments/<slug>/page.tsx` that composes `components/treatment/*` sections inside `<main className={ui.page}>`. Put images in `public/images/pages/<slug>/`, never hotlink. Palette for these pages is blue/green: `#0052cc` / `#003d9b` / `#10b981` / navy `#002244` / charcoal `#0f172a`.
- Legacy URLs (`/rhinoplasty`, `/hair-transplant`, ... and old production `*.php` pages) 308-redirect to `/treatments/<slug>` via `next.config.mjs`. When porting a page from the live PHP site, add its `.php` URL there.
- Live-site photos must also be checked for stock images posing as results and identifiable patients (one gallery photo showed patients on OT tables and was excluded).
- Live-site photos must be checked before use: several carry another clinic's watermark ("Pure Aesthetic Surgery") and were deliberately not used.
- Live pages contain copy-paste errors (wrong FAQ blocks, wrong meta descriptions, stray paragraphs) and medical overclaims ("guaranteed", "no side effects"); review the content, don't port blindly.
- Pages ported from the live site use only the live content (no invented stats, cases or surgeon claims); sections without source material are omitted.
- **Header** (`components/Header.tsx`, client): main links from `data/navigation.ts`; the Treatments mega menu (Face / Body / Women / Men) from `data/treatmentCategories.ts`, which mirrors the live site's menu (Hair Transplant deliberately left out). Every href there must resolve to a built page. Desktop nav shows at ≥1280px (mega menu opens on mouse hover or the chevron button; Escape / outside click closes); below that a hamburger opens an accordion panel. The contact top bar shows at ≥1024px. The fixed header is 5rem tall (7.5rem with the top bar); `globals.css` sets a matching `scroll-margin-top` on `[id]` so in-page anchors aren't hidden.
- International patient links go to `/contact#international-desk` (there is no separate page; `/international-patients` redirects there).

## Known gaps

- `/treatments/eyelid-surgery` (ported from live) and `/treatments/blepharoplasty` (template) cover the same procedure; consolidate into one before launch to avoid duplicate SEO content.
- Pages not reachable from the header menu: `hydrafacial`, `chin-jawline`, `blepharoplasty` (overlaps `eyelid-surgery`), `hair-transplant` and `/why-choose-us` (the last two are still linked from the footer). The live `blog.php` has no local equivalent.
- Forms (contact, booking, consultation) have no backend; they only show a client-side confirmation.
- `README.md` is partly stale (says `/about-us` and `/treatments` don't exist).
- `app/treatments/page.tsx` derives categories by matching `procedure.badge` strings against hardcoded lists; adding a procedure with a new badge value means updating those lists (filter map and the surgical/non-surgical counts).
- `components/about/*` and `data/about.ts` duplicate content that `app/about/page.tsx` defines inline; pick one source when editing the About page.
- Contact details (phone `+91 99103 91229`, Greater Kailash address, hours) are hardcoded across several components (`Header`, `Footer`, `Hero`, `AppointmentCta`, `InternationalDesk`, `Facility`, `about/*`). Grep for `99103` / `Greater Kailash` and update them all together.
