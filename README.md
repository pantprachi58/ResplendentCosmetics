# Resplendent Aesthetics: Next.js + CSS Modules

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/layout.tsx` loads fonts, renders `Header` and `Footer`
- `app/page.tsx` composes the home page sections
- `app/globals.css` holds the CSS reset and base styles only
- `components/*.tsx` with a matching `*.module.css`, one pair per section
- `components/Icon.tsx` wraps Material Symbols
- `data/*.ts` holds typed content (procedures, stats, case studies, doctors, testimonials, nav, footer links)

Nav links point to routes such as `/about-us` and `/treatments`. Those pages do not exist yet.
