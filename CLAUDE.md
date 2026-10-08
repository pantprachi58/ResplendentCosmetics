# CLAUDE.md

Marketing website for **Resplendent Aesthetics**, a plastic & cosmetic surgery clinic (Dr. Sukhbir Singh, Greater Kailash Part 1, New Delhi).

## Stack & commands

- Next.js 16 (App Router), React 19, TypeScript 7 (strict), plain **CSS Modules**. No Tailwind, no UI library, no state library.
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
  layout.tsx          Root layout: metadata, Google Fonts <link>s, <Header/> + <Footer/> + floating <WhatsAppButton/>
  globals.css         Reset only (Tailwind-preflight-derived; the --tw-* vars are leftovers, harmless)
  page.tsx            Home page: Hero, TrustBar, Procedures, TreatmentChoice, Results, Doctors,
                      Facility, Testimonials, InternationalDesk, AppointmentCta (in that order)
  about/page.tsx      About page (self-contained: data + markup inline)
  treatments/page.tsx Client component; filterable grid over data/procedures.ts
  treatments/<slug>/  Treatment detail pages (blepharoplasty, botox, brow-lift, chin-jawline,
                      face-neck-lift, hair-transplant, hydrafacial, liposuction, rhinoplasty,
                      vaginal-tightening, vaginoplasty, chemical-peel, dimple-creation,
                      ear-lobe-repair, otoplasty, eyelid-surgery, dermal-fillers, prp-therapy,
                      microdermabrasion, thread-lift, buttock-calf-augmentation, gender-reassignment,
                      laser-hair-removal, body-tightening, rf-microneedling, fat-grafting, tummy-tuck,
                      female-breast-surgery (#augmentation/#lift/#reduction), hymenoplasty, penile-enlargement,
                      gynecomastia, six-pack-abs, lip-augmentation)
  book-consultation/ contact/ doctors/ why-choose-us/   Standalone pages (page.tsx + page.module.css)
  gallery/ achievements/   Videos + event photos; publications list (data in data/gallery.ts, data/achievements.ts)
  blog/page.tsx       Blog index: PageIntro + components/blog/BlogExplorer (client; All/Face/Body/Women/Men filter,
                      mirrored in ?category=, "Show more" adds BLOG_PAGE_SIZE cards)
  blog/[slug]/        Article page, statically generated from data/blog.ts (dynamicParams = false → unknown slugs 404)
components/
  <Section>.tsx + <Section>.module.css   one pair per home-page section
  WhatsAppButton.tsx  Floating wa.me link rendered on every page (from layout.tsx)
  Icon.tsx            Material Symbols wrapper: <Icon name="call" filled? className? />
  about/*             About-page section components (currently NOT used by app/about/page.tsx)
  shared/ui.module.css  Shared primitives for content pages: .page (main wrapper w/ header offset),
                      .container, .section, .eyebrow, .title, .btn*, .media/.cover, form .input
  shared/CtaLink.tsx  Pill button; next/link for "/" routes, <a> for tel:/# (external http links open in a new tab)
  shared/PageIntro.tsx  Centred heading for non-treatment pages
  shared/CompareSlider.tsx  Client before/after drag slider (mouse/touch/keyboard); size "lg" in treatment/BeforeAfter,
                      "sm" in the home Results cards. Parent passes className for the frame's aspect/height
  treatment/*         Reusable treatment-page sections, each fed by typed data: Breadcrumb,
                      TreatmentHero, TreatmentOverview, ProcessSteps, FeatureBand, CaseGallery,
                      CardGrid, CalloutBanner, FaqAccordion (client), ConsultationForm (client),
                      CtaBand, VideoGallery (lazy youtube-nocookie embeds), MediaCardGrid (photo cards / galleries), Diagrams (inline SVG scans),
                      BeforeAfter (treatment section wrapping shared/CompareSlider)
  blog/BlogCard.tsx   Article card (stretched title link); blog/BlogExplorer.tsx  client filter + show more
  booking/BookingWizard.tsx  Client 4-step booking flow; contact/ContactForm.tsx  Client form
data/blog.ts          Blog posts (category, sections, consultation questions, linked treatment) + helpers
data/*.ts             Typed content arrays (procedures, doctors, results, testimonials,
                      stats, navigation, treatmentCategories, footer, facility, about, internationalDesk,
                      doctorProfiles, whyChooseUs, contact, booking)
data/treatments/      types.ts (TreatmentPageData etc.), shared.ts, one content file per treatment page,
                      beforeAfter.ts (slider content for all 29 menu pages, keyed by slug)
public/
  svg/                Logos + favicon (PNG despite the folder name; some filenames contain spaces).
                      Header uses svg/logo.png, favicon is svg/favicon.png
  images/footer-logo.png  Footer logo
  videos/video1.mp4   Hero background video
  images/procedures/  Procedure card images (1-20), referenced by data/procedures.ts
  images/{Breast enhancement,Gynecomastia,Hair transplant,Rhinoplasty}/  Before/after photos,
                      not referenced in code yet (folder names have spaces/caps; one file is "hair-before].jpg")
  logo.svg, logo-white.svg, favicon.svg, images/{log1,white-logo,fav}.png  Unreferenced leftovers
  images/pages/<route>/  Locally downloaded images for the new pages (no remote image links)
  *.html              Saved copy of the original live site, for reference only
```

Path alias: `@/*` → repo root (e.g. `@/components/Icon`, `@/data/procedures`).

## Conventions

- **Content lives in `data/*.ts`** as exported typed arrays (`export type X = {...}; export const xs: X[] = [...]`). Components import and map over them; don't hardcode lists in components.
- **Styling**: each component imports `styles from "./Name.module.css"`. Colors are hardcoded hex (no CSS variables). Main palette: navy `#0a192f` / `#1a1a2e` / `#1e293b`, accent blue `#2d6a9f`, slate greys `#f1f5f9` `#e2e8f0` `#94a3b8`. Mobile-first: media queries use `min-width` at 640 / 768 / 1024 / 1280px. Content container max-width is ~1320px.
- Tone variants are typed string unions mapped to CSS classes (e.g. `badgeTone: "navy" | "blue" | ...` → `badgeToneClass` record in `app/treatments/page.tsx` and `components/Procedures.tsx`).
- Fonts: Inter + Plus Jakarta Sans, and Material Symbols Outlined, loaded via `<link>` in `app/layout.tsx` (not `next/font`). The icon font is pinned to `opsz 24, wght 400, GRAD 0` with only `FILL 0..1` variable (~450 KB instead of ~3.9 MB) and uses `display=block`; `globals.css` clips `.material-symbols-outlined` to a 1em box so ligature names never flash as text. If you need another weight/grade/size axis, widen the URL. Don't add per-module font `@import`s.
- Server components by default; add `"use client"` only when needed (currently `Header`, `Procedures` (home filter tabs), `app/treatments/page.tsx`, `FaqAccordion`, `ConsultationForm`, `BookingWizard`, `ContactForm`).
- Images: `next/image`. The older home/about sections (`Hero`, `Doctors`, `Facility`, `about/*`, `data/results.ts`, `data/doctors.ts`, `data/about.ts`) still use remote images from `lh3.googleusercontent.com`, the only allowed remote host in `next.config.mjs`. Newer pages use local files only. Logos use plain `<img>` with an eslint-disable comment.
- Commented section headers in JSX (`{/* Hero Section */}`) are the norm in page files.

- **New treatment pages**: add `data/treatments/<slug>.ts` (typed `TreatmentPageData` + any extra section data) and an `app/treatments/<slug>/page.tsx` that composes `components/treatment/*` sections inside `<main className={ui.page}>`. Put images in `public/images/pages/<slug>/`, never hotlink. Palette for these pages is blue/green: `#0052cc` / `#003d9b` / `#10b981` / navy `#002244` / charcoal `#0f172a`.
- Legacy URLs (`/rhinoplasty`, `/hair-transplant`, ... and old production `*.php` pages) 308-redirect to `/treatments/<slug>` via `next.config.mjs`. When porting a page from the live PHP site, add its `.php` URL there.
- Live-site photos must also be checked for stock images posing as results and identifiable patients (one gallery photo showed patients on OT tables and was excluded).
- Live-site photos must be checked before use: several carry another clinic's watermark ("Pure Aesthetic Surgery") and were deliberately not used.
- Live pages contain copy-paste errors (wrong FAQ blocks, wrong meta descriptions, stray paragraphs) and medical overclaims ("guaranteed", "no side effects"); review the content, don't port blindly.
- Pages ported from the live site use only the live content (no invented stats, cases or surgeon claims); sections without source material are omitted.
- **Header** (`components/Header.tsx`, client): main links from `data/navigation.ts`; the Treatments mega menu (Face / Body / Women / Men) from `data/treatmentCategories.ts`, which mirrors the live site's menu (Hair Transplant deliberately left out). Every href there must resolve to a built page. Desktop nav shows at ≥1280px (mega menu opens on mouse hover or the chevron button; Escape / outside click closes); below that a hamburger opens an accordion panel. The contact top bar shows at ≥1024px. The fixed header is 5rem tall (7.5rem with the top bar); `globals.css` sets a matching `scroll-margin-top` on `[id]` so in-page anchors aren't hidden.
- Every treatment hero has a right-hand photo (`hero.image`). When the hero also has a `card` ("at a glance" facts), TreatmentHero shows the photo at 4:3 with the card layered over its lower edge and drops the card's address footer.
- `components/shared/ui.module.css`: `.page` resets `margin` (and `ul` padding) on h1–h4/p/ul with higher specificity than a single module class, so space text blocks with flex/grid `gap` or `padding-top`, not `margin-top`. `.btn` wraps below 640px (one line from 640px up) and `.page` sets `overflow-wrap: break-word`, so long labels/words don't overflow on 320–375px phones.
- Home "Clinical Gallery" (`components/Results.tsx`, `data/results.ts`) cards are CompareSlider pairs: rhinoplasty and hair use real clinic pairs (`public/images/pages/<slug>/before-after/`), lipo and face-lift are `sample` stand-ins. `public/images/Hair transplant/1–10.jpg` carry the "Pure Aesthetic Surgery" watermark; don't use them.
- Every page in the Treatments menu renders `<BeforeAfter data={beforeAfter[slug]} />` directly after `<TreatmentHero>`. To add real results, put the pair in `public/images/pages/<slug>/before-after/{before,after}.jpg`, point the entry in `data/treatments/beforeAfter.ts` at it, and remove `sample: true` (sample entries reuse one related stock photo for both sides, grey out the before side and show a "Sample image" badge).
- International patient links go to `/contact#international-desk` (there is no separate page; `/international-patients` redirects there).

## Known gaps

- `/treatments/eyelid-surgery` (ported from live) and `/treatments/blepharoplasty` (template) cover the same procedure; consolidate into one before launch to avoid duplicate SEO content.
- Pages not reachable from the header menu: `hydrafacial`, `chin-jawline`, `blepharoplasty` (overlaps `eyelid-surgery`), `hair-transplant` and `/why-choose-us` (the last two are still linked from the footer).
- Before/after sliders: only rhinoplasty, gynecomastia, female-breast-surgery, thread-lift (split from live result-03) and eyelid-surgery (low-res 400px) use real clinic pairs; the other 24 show `sample` stand-ins until real photos are supplied.
- Blog articles in `data/blog.ts` are original drafts (the live `blog.php` couldn't be retrieved; it now 308-redirects to `/blog`). They need clinic review; keep them free of stats, prices and guarantees.
- Forms (contact, booking, consultation) have no backend; they only show a client-side confirmation.
- `README.md` is partly stale (says `/about-us` and `/treatments` don't exist).
- `app/treatments/page.tsx` derives categories by matching `procedure.badge` strings against hardcoded lists; adding a procedure with a new badge value means updating those lists (filter map and the surgical/non-surgical counts).
- `components/about/*` and `data/about.ts` duplicate content that `app/about/page.tsx` defines inline; pick one source when editing the About page.
- Contact details (phone `+91 99103 91229`, Greater Kailash address, hours) are hardcoded in many places: components (`Header`, `Footer`, `Hero`, `AppointmentCta`, `InternationalDesk`, `Facility`, `treatment/CtaBand`, `booking/BookingWizard`, `contact/ContactForm`, `about/*`), pages (`about`, `book-consultation`, `why-choose-us`, ...) and data files (`contact`, `booking`, `doctorProfiles`, `whyChooseUs`, `treatments/shared` and several `treatments/*.ts`). Grep for `99103` / `Greater Kailash` and update them all together.
- `components/WhatsAppButton.tsx` uses a **placeholder** number (`919876543210`). Replace it with the real WhatsApp number before launch.
- The home `Procedures` filter splits cards by `cardTone` (`blue` = surgical, `emerald` = dermatology), not by `badge` like `app/treatments/page.tsx` does.
