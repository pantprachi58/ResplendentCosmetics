# Certificates Component

A responsive, reusable component for displaying certificate images with metadata in a grid layout.

## Features

- **Responsive Grid Layout**: Adapts from 1 column (mobile) to 2, 3, or 4 columns (desktop)
- **Hover Effects**: Smooth image zoom and overlay with view icon
- **Year Badges**: Optional year badges with premium styling
- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Fully Accessible**: Proper alt text and semantic HTML

## Usage

### Basic Implementation

```tsx
import Certificates from "@/components/Certificates";
import { certificates } from "@/data/certificates";

export default function MyPage() {
  return (
    <section>
      <Certificates certificates={certificates} />
    </section>
  );
}
```

### With Custom Columns

```tsx
// 2 columns on desktop
<Certificates certificates={certificates} columns={2} />

// 3 columns on desktop (default)
<Certificates certificates={certificates} columns={3} />

// 4 columns on desktop
<Certificates certificates={certificates} columns={4} />
```

## Props

### `CertificatesProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `certificates` | `CertificateData[]` | required | Array of certificate data objects |
| `variant` | `'grid' \| 'carousel'` | `'grid'` | Layout variant (currently only grid is implemented) |
| `columns` | `2 \| 3 \| 4` | `3` | Number of columns on desktop screens |

### `CertificateData`

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✓ | Unique identifier |
| `title` | `string` | ✓ | Certificate title |
| `organization` | `string` | ✓ | Issuing organization |
| `year` | `string` | ✗ | Year received (displays as badge) |
| `imageUrl` | `string` | ✓ | URL of certificate image |
| `description` | `string` | ✗ | Additional description text |

## Data Structure Example

```typescript
// data/certificates.ts
import type { CertificateData } from "@/components/Certificates";

export const certificates: CertificateData[] = [
  {
    id: "cert-1",
    title: "Board Certification in Plastic Surgery",
    organization: "Medical Council of India",
    year: "2008",
    imageUrl: "https://example.com/certificate.jpg",
    description: "Master of Surgery (MS) & MCh in Plastic Surgery"
  },
  // ... more certificates
];
```

## Responsive Breakpoints

- **Mobile (< 640px)**: 1 column
- **Tablet (≥ 640px)**: 2 columns
- **Desktop (≥ 1024px)**: 2, 3, or 4 columns based on `columns` prop

## Styling

The component uses CSS modules with the following features:

- Smooth hover animations
- Image zoom effect on hover
- Overlay with view icon
- Premium gradient badges for years
- Professional card design with subtle shadows
- Brand colors (blue #0052cc, green #10b981)

## Current Implementation

The Certificates component is currently used in:

1. **About Page** (`/about`)
   - Shows certifications & professional memberships
   - 3-column layout
   - Placed after timeline section

2. **Achievements Page** (`/achievements`)
   - Shows professional credentials
   - 3-column layout
   - Placed after peer-reviewed articles section

## Customization

### Add New Certificates

Edit `data/certificates.ts` and add new entries to the array.

### Change Styling

Edit `components/Certificates.module.css` to customize:
- Card design
- Hover effects
- Colors and shadows
- Spacing and layout

### Adjust Image Aspect Ratios

In `Certificates.module.css`, modify:
```css
.imageContainer {
  aspect-ratio: 4 / 3; /* Change this */
}
```

Common aspect ratios:
- `4 / 3` - Standard landscape
- `3 / 2` - Wide landscape  
- `1 / 1` - Square
- `3 / 4` - Portrait

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS Grid and aspect-ratio (with fallbacks)
- Responsive images via Next.js Image component
